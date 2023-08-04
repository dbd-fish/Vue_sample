import { createRouter, createWebHistory } from 'vue-router'
import home from '@/page/home.vue'
import resume from '@/page/resume.vue'

import profile from '@/page/profile.vue'
import request from '@/page/request.vue'
import service from '@/page/service.vue'
import private_article_list from '@/page/private_article_list.vue'
import job_article_list from '@/page/job_article_list.vue'

import test from '@/page/test.vue'

const routes = [
  {
    path: '/',
    name: 'default',
    component: home,
    meta: { title: 'ホーム' }
  },
  {
    path: '/home',
    name: 'home',
    component: home,
    meta: { title: 'default' }
  },
  {
    path: '/resume', name: 'resume',
    component: resume,
    meta: { title: '職務経歴・スキル' }
  },
  {
    path: '/profile',
    name: 'profile',
    component: profile,
    meta: { title: 'プロフィール' }
  },
  {
    path: '/request',
    name: 'request',
    component: request,
    meta: { title: 'お問い合わせ' }
  },
  {
    path: '/service',
    name: 'service',
    component: service,
    meta: { title: '事業内容' }
  },

  {
    path: '/job_article_list',
    name: 'job_article_list',
    component: job_article_list,
    meta: { title: '仕事関連の記事リスト' }
  },
  {
    path: '/private_article_list',
    name: 'private_article_list',
    component: private_article_list,
    meta: { title: '趣味関連の記事リスト' }
  },

  {
    path: '/test',
    name: 'test',
    component: test,
    meta: { title: 'テスト' }
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})


export default router