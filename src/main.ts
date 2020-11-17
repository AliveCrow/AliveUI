import { createApp } from 'vue'
import App from './App.vue'
import './index.scss'
import {createWebHashHistory,createRouter} from 'vue-router'

//新建history对象
const history = createWebHashHistory()
//新建router对象
const router = createRouter({
    history : history,
    routes:[
        {
            path:'/',
            name:'Home',
            component:()=>import('./views/Home.vue')
        },
        {
            path:'/doc',
            name:'Doc',
            component:()=>import('./views/Doc.vue')
        }
    ]
})

createApp(App)
    .use(router)
    .mount('#app')


