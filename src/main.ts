
import './index.scss'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Blod from './components/Blod.vue'
import '/@/lib/alive.scss'



createApp(App)
    .use(router)
    .component('Blod', Blod)
    .mount('#app')


