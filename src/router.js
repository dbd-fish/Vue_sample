import { createRouter, createWebHashHistory } from "vue-router";
import home_page from "@/page/home_page.vue";
import my_resume from "@/page/my_resume.vue";

import my_profile from "@/page/my_profile.vue";
import request_page from "@/page/request_page.vue";
import service_page from "@/page/service_page.vue";
import private_article_list from "@/page/private_article_list.vue";
import job_article_test1 from "@/page/job_article_list/job_article_test1.vue";
import job_article_test2 from "@/page/job_article_list/job_article_test2.vue";
import private_article_test1 from "@/page/private_article_list/private_article_test1.vue";
import private_article_test2 from "@/page/private_article_list/private_article_test2.vue";
import error_page from "@/page/error_page.vue";

import job_article_list from "@/page/job_article_list.vue";

const routes = [
  {
    path: "/",
    name: "default",
    component: home_page,
    meta: { title: "ホーム" },
  },
  {
    path: "/home_page",
    name: "home_page",
    component: home_page,
    meta: { title: "ホーム" },
  },
  {
    path: "/my_resume",
    name: "my_resume",
    component: my_resume,
    meta: { title: "職務経歴" },
  },
  {
    path: "/my_profile",
    name: "my_profile",
    component: my_profile,
    meta: { title: "プロフィール" },
  },
  {
    path: "/request_page",
    name: "request_page",
    component: request_page,
    meta: { title: "お問い合わせ" },
  },
  {
    path: "/service_page",
    name: "service_page",
    component: service_page,
    meta: { title: "事業内容" },
  },

  {
    path: "/job_article_list",
    name: "job_article_list",
    component: job_article_list,
    meta: { title: "仕事関連の記事リスト" },
  },
  {
    path: "/private_article_list",
    name: "private_article_list",
    component: private_article_list,
    meta: { title: "趣味関連の記事リスト" },
  },

  {
    path: "/test_page",
    name: "test_page",
    meta: { title: "テスト" },
  },

  {
    path: "/job_article_list/job_article_test1",
    name: "job_article_test1",
    component: job_article_test1,
    meta: {
      title: "仕事関連の記事1あああ",
      tags: ["PHP", "Laravel"],
      create_date: "2023/01/01",
      update_date: "2023/02/02",
    },
  },

  {
    path: "/job_article_list/job_article_test2",
    name: "job_article_test2",
    component: job_article_test2,
    meta: {
      title: "仕事関連の記事2",
      tags: ["Python", "Django"],
      create_date: "2023/02/01",
      update_date: "2023/03/02",
    },
  },

  {
    path: "/private_article_list/private_article_test1",
    name: "private_article_test1",
    component: private_article_test1,
    meta: {
      title: "趣味関連の記事1",
      tags: ["ゲーム", "アニメ"],
      create_date: "2022/02/01",
      update_date: "2022/03/02",
    },
  },

  {
    path: "/private_article_list/private_article_test2",
    name: "private_article_test2",
    component: private_article_test2,
    meta: {
      title: "趣味関連の記事2",
      tags: ["魚", "料理"],
      create_date: "2022/02/01",
      update_date: "2022/03/02",
    },
  },

  {
    path: "/:catchAll(.*)",
    name: "error_page",
    component: error_page,
  },
];

const router = createRouter({
  history: createWebHashHistory("/Vue_sample/"),
  routes,
});

export default router;
