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
    // TODO: これは記事リスト用の情報
    job_article_card_list: [
      {
        card_name: '仕事関連記事_テスト1',
        card_path: 'job_article_test1',
        tags: ['PHP', 'Laravel'],
        create_date: "2023/01/01",
        update_date: "2023/02/02",
      },
      {
        card_name: '仕事関連記事_テスト2',
        card_path: 'job_article_test2',
        tags: ['Python', 'Django'],
        create_date: "2023/02/01",
        update_date: "2023/03/02",
      },
    ],
    private_article_card_list: [
      {
        card_name: '趣味関連記事_テスト1',
        card_path: 'private_article_test1',
        tags: ['ゲーム', 'アニメ'],
        create_date: "2022/02/01",
        update_date: "2022/03/02",
      },
      {
        card_name: '趣味関連記事_テスト2',
        card_path: 'private_article_test2',
        tags: ['魚', '料理'],
        create_date: "2022/02/01",
        update_date: "2022/03/02",
      },
    ],
  }),
  actions: {
    update_now_page(update_page) {
      this.now_page = update_page;
    },
    get_title() {
      return this.now_page;
    },
  }
});

