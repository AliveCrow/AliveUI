import { createApp } from 'vue'
import App from './App.vue'
import './index.scss'
import router from './router'
import Blod from './components/Blod.vue'

createApp(App)
    .use(router)
    .component('Blod', Blod)
    .mount('#app')


