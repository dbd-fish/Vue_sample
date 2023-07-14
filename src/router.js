import { createRouter, createWebHistory } from 'vue-router'
import test from '@/page/test.vue'
import test2 from '@/page/test2.vue'

const routes = [
  { path: '/', name: 't', component: test },
  { path: '/test', name: 'test', component: test },
  { path: '/test2', name: 'test2', component: test2 },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router