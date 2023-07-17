import { createRouter, createWebHistory } from 'vue-router'
import home from '@/page/home.vue'
import resume from '@/page/resume.vue'

const routes = [
  { path: '/', home: 't', component: home },
  { path: '/home', name: 'home', component: home },
  { path: '/resume', name: 'resume', component: resume },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router