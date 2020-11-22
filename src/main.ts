
import './index.scss'
import './lib/alive.scss'
import './lib/maize.scss'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ShowBox from './components/ShowBox.vue'
import HighlightJS from './utils/vue3-hightlight'
import importComponents from '../plugins/components'



createApp(App)
    .use(importComponents)
    .use(router)
    .use(HighlightJS)
    .component('ShowBox', ShowBox)
    .mount('#app')


