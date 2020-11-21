//@ts-nocheck
const fs = require('fs')
const virtual = require('@rollup/plugin-virtual')

function pageDir(pageDirPath = './src/views') {
  const files = fs
    .readdirSync('./src/views')
    .map((f) => ({ name: f.split('.')[0], importPath: `./src/views/${f}` }))

  const imports = files.map((f) => `import ${f.name} from '${f.importPath}'`)

  const routes = files.map(
    (f) => `{
        name: '${f.name}',
        path: '/${f.name}',
        component: ${f.name},
        ...(${f.name}.__routeOptions || {}),
      }
      `,
  )

  return { imports, routes }
}
// export const autoRouters = 
export function autoRouters() {
  const { imports, routes } = pageDir()

  const moduleContent = `
    ${imports.join('\n')}
    export const routes = [${routes.join(', \n')}]
  `

  const configureServer = [
    async ({ app }) => {
      app.use(async (ctx, next) => {
        console.log(ctx.path);
        if (ctx.path.startsWith('/@modules/auto-router')) {
          ctx.type = 'js'
          ctx.body = () => { console.log('233') }
        } else {
          await next()
        }
      })
    },
  ]

  // const rollupInputOptions = {
  //   plugins: [virtual({ 'vue-auto-routes': moduleContent })],
  // }

  // const vueCustomBlockTransforms = {
  //   route: ({ code }) => {
  //     return `
  //       export default function (Component) {
  //         Component.__routeOptions = ${code}
  //       }
  //     `
  //   },
  // }

  // , rollupInputOptions, vueCustomBlockTransforms
  return { configureServer }
}

