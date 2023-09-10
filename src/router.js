import { createRouter, createWebHistory } from 'vue-router'
import home from '@/page/home.vue'
import resume from '@/page/resume.vue'

import profile from '@/page/profile.vue'
import request from '@/page/request.vue'
import service from '@/page/service.vue'
import private_article_list from '@/page/private_article_list.vue'
import job_article_test1 from '@/page/job_article_list/job_article_test1.vue'
import job_article_test2 from '@/page/job_article_list/job_article_test2.vue'
import private_article_test1 from '@/page/private_article_list/private_article_test1.vue'
import private_article_test2 from '@/page/private_article_list/private_article_test2.vue'
import error_page from '@/page/error_page.vue'

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

  {
    path: '/job_article_list/job_article_test1',
    name: 'job_article_test1',
    component: job_article_test1,
    meta: {
      title: '仕事関連の記事1あああ',
      tags: ['PHP', 'Laravel'],
      create_date: "2023/01/01",
      update_date: "2023/02/02",
    }
  },

  {
    path: '/job_article_list/job_article_test2',
    name: 'job_article_test2',
    component: job_article_test2,
    meta: {
      title: '仕事関連の記事2',
      tags: ['Python', 'Django'],
      create_date: "2023/02/01",
      update_date: "2023/03/02",
    }
  },

  {
    path: '/private_article_list/private_article_test1',
    name: 'private_article_test1',
    component: private_article_test1,
    meta: {
      title: '趣味関連の記事1',
      tags: ['ゲーム', 'アニメ'],
      create_date: "2022/02/01",
      update_date: "2022/03/02",
    }
  },

  {
    path: '/private_article_list/private_article_test2',
    name: 'private_article_test2',
    component: private_article_test2,
    meta: {
      title: '趣味関連の記事2',
      tags: ['魚', '料理'],
      create_date: "2022/02/01",
      update_date: "2022/03/02",
    }
  },

  {
    path: '/:catchAll(.*)',
    name: 'error_page',
    component: error_page,
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})


export default router