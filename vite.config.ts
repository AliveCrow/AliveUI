// @ts-nocheck
const path = require('path')
import fs from 'fs'
import { baseParse } from '@vue/compiler-core'
// import { autoRouters } from './src/plugins/auto-router'
import { importMD } from "./plugins/import-md";

module.exports = {
	// 引入第三方的配置
	// optimizeDeps: {
	// 	include: ["axios",]
	// },
	plugins: [importMD()],
	vueCustomBlockTransforms: {
		sourceCode: (options) => {
			const { code, path } = options
			const file = fs.readFileSync(path).toString()
			const parsed = baseParse(file).children.find(n => n.tag === 'sourceCode')
			const title = parsed.children[0]
			const description = parsed.children[1]
			const main = file.split(parsed.loc.source).join('').trim()
			return `export default function (Component) {
				Component.__sourceCode = ${JSON.stringify(main)};
				Component.__title = ${JSON.stringify(title)}
				Component.__description = ${JSON.stringify(description)}
	}`.trim()
		}
	},
	// alias: {
	// 	// alias a path to a fs directory
	// 	// the key must start and end with a slash
	// 	'/@/': path.resolve(__dirname, 'src'),
	// },
	cssPreprocessOptions: {
		scss: {
			//设置公共变量
			additionalData: `@import "./src/lib/var.scss"; `,
		}
	},

}