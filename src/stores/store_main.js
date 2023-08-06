import { defineStore } from 'pinia';
import resume_md from "@/components/markdown/resume.md";
import profile_card from "@/components/profile_card.vue";

export const useStoreMain = defineStore('store_main', {
  state: () => ({
    now_page: "home",
    tab_list: [
      { tab_name: 'プロフィール', tab_path: 'profile' },
      { tab_name: '職務経歴', tab_path: 'resume' },
      { tab_name: `事業内容`, tab_path: 'service' },
      { tab_name: '仕事関連の記事', tab_path: 'job_article_list' },
      { tab_name: '趣味の記事', tab_path: 'private_article_list' },
      { tab_name: 'お問い合わせ', tab_path: 'request' },
    ],
  }),
  components: {
    resume_md,
    profile_card
  },
  data() {
    return {

    }
  },
});