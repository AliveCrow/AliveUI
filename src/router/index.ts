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
      path: '/Use',
      name: 'Use',
      component: () => import('../views/Use.vue')
    },
    {
      path: '/Color',
      name: 'Color',
      component: () => import('../views/Color.vue')
    },
    {
      path:'/Layout',
      name:'Layout',
      component:()=>import('../components/LayoutPage/LayoutPage.vue')
    },
    {
      path:'/Container',
      name:'Container',
      component:()=>import('../components/ContainerPage/ContainerPage.vue')
    },
    {
      path: '/Icon',
      name: 'Icon',
      component: () => import('../views/Icon.vue')
    },
    {
      path: '/Switch',
      name: 'Switch',
      component: () => import('../components/SwitchPage/SwitchPage.vue')

    },
    {
      path: '/Button',
      name: 'Button',
      component: () => import('../components/ButtonPage/ButtonPage.vue')

    },
    {
      path: '/Dialog',
      name: 'Dialog',
      component: () => import('../components/DialogPage/DialogPage.vue')
    },
    {
      path: '/Tab',
      name: 'Tab',
      component: () => import('../components/TabPage/TabPage.vue')
    },
    {
      path: '/Table',
      name: 'Table',
      component: () => import('../components/TablePage/TablePage.vue')
    },
    {
      path: '/components',
      name: 'Components',
      component: () => import('../views/Doc.vue')
    },

    {
      path: '/404',
      name: 'NotFound',
      component: () => import('../views/NotFound.vue')

    }

  ]
})

export default router 