import { createWebHashHistory, createRouter } from 'vue-router'

//新建history对象
const history = createWebHashHistory()
//新建router对象
const router = createRouter({
  history: history,
  routes: [
    {
      path: '/',
      name: 'Start',
      component: () => import('../views/Start.vue')
    },
    {
      path: '/style',
      name: 'Style',
      component: () => import('../views/Doc.vue')
    },
    {
      path: '/components',
      name: 'Components',
      component: () => import('../views/Doc.vue')
    },
    {
      path: '/Switch',
      name: 'Switch',
      component: () => import('../components/Switch/Switch.vue')

    },
    {
      path: '/404',
      name: 'NotFound',
      component: () => import('../views/NotFound.vue')

    }

  ]
})

export default router 