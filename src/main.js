import './assets/main.css'

import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import vuetify from "./vuetify";

const app = createApp(App)
app.use(router)
app.use(vuetify)
app.mount('#app')

const DEFAULT_TITLE = 'Some Default Title';
router.afterEach((to, from) => {
  // Use next tick to handle router history correctly
  // see: https://github.com/vuejs/vue-router/issues/914#issuecomment-384477609
  Vue.nextTick(() => {
    document.title = to.meta.title || DEFAULT_TITLE;
  });
});