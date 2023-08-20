import { defineStore } from 'pinia';


export const useStoreMain = defineStore('store_main', {
  state: () => ({
    now_page: "home",
    tab_list: [
      { tab_name: 'プロフィール', tab_path: 'profile' },
      { tab_name: '職務経歴', tab_path: 'resume' },
      { tab_name: `事業内容`, tab_path: 'service' },
      { tab_name: '仕事関連の記事', tab_path: 'job_article_list' },
      { tab_name: '趣味関連の記事', tab_path: 'private_article_list' },
      { tab_name: 'お問い合わせ', tab_path: 'request' },
    ],
    job_article_card_list: [
      { card_name: '仕事関連記事_テスト1', card_path: 'job_article_test1' },
      { card_name: '仕事関連記事_テスト2', card_path: 'job_article_test2' },
    ],
    private_article_card_list: [
      { card_name: '趣味関連記事_テスト1', card_path: 'private_article_test1' },
      { card_name: '趣味関連記事_テスト2', card_path: 'private_article_test2' },
    ],
  }),
  actions: {
    update_now_page(update_page) {
      this.now_page = update_page;
    },
  }
});

