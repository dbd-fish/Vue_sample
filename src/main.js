import './assets/main.css'

import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import test from '@/page/test.vue'


const app = createApp(App)
app.use(router)
app.mount('#app')