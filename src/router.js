import { createRouter, createWebHistory } from 'vue-router'
import home from '@/page/home.vue'
import resume from '@/page/resume.vue'

import profile from '@/page/profile.vue'
import request from '@/page/request.vue'
import service from '@/page/service.vue'
import private_article_list from '@/page/private_article_list.vue'
import job_article_list from '@/page/job_article_list.vue'

const routes = [
  { path: '/', name: 'default', component: home },
  { path: '/home', name: 'home', component: home },
  { path: '/resume', name: 'resume', component: resume },
  { path: '/profile', name: 'profile', component: profile },
  { path: '/request', name: 'request', component: request },
  { path: '/service', name: 'service', component: service },

  { path: '/job_article_list', name: 'job_article_list', component: job_article_list },
  { path: '/private_article_list', name: 'private_article_list', component: private_article_list },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router