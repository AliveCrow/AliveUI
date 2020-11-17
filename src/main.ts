import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createWebHashHistory,createRouter} from 'vue-router'

//新建history对象
const history = createWebHashHistory()
//新建router对象
const router = createRouter({
    history : history,
    routes:[

    ]
})

const app = createApp(router)
app.mount('#app')
