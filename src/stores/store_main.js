import { defineStore } from "pinia";

export const useStoreMain = defineStore("store_main", {
  state: () => ({
    now_page: "home_page",
    tab_list: [
      { tab_name: "プロフィール", tab_path: "my_profile" },
      { tab_name: "職務経歴", tab_path: "my_resume" },
      { tab_name: `事業内容`, tab_path: "service_page" },
      { tab_name: "仕事関連の記事", tab_path: "job_article_list" },
      { tab_name: "趣味関連の記事", tab_path: "private_article_list" },
      { tab_name: "お問い合わせ", tab_path: "request_page" },
    ],
    // TODO: これは記事リスト用の情報
    job_article_card_list: [
      {
        card_name: "仕事関連記事_テスト1",
        card_path: "job_article_test1",
        tags: ["PHP", "Laravel"],
        create_date: "2023/01/01",
        update_date: "2023/02/02",
        card_text: "仕事関連記事_テスト1のテキスト",
        card_img: "src/components/img/job_article/仕事記事イメージ１.png",
      },
      {
        card_name: "仕事関連記事_テスト2",
        card_path: "job_article_test2",
        tags: ["Python", "Django"],
        create_date: "2023/02/01",
        update_date: "2023/03/02",
        card_text:
          "仕事関連記事_テスト2のテキストああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ",
        card_img: "src/components/img/job_article/仕事記事イメージ2.jpg",
      },
    ],
    private_article_card_list: [
      {
        card_name: "趣味関連記事_テスト1",
        card_path: "private_article_test1",
        tags: ["ゲーム", "アニメ"],
        create_date: "2022/02/01",
        update_date: "2022/03/02",
        card_text: "趣味関連記事_テスト1のテキスト",
        card_img: "src/components/img/private_article/趣味記事イメージ１.jpg",
      },
      {
        card_name: "趣味関連記事_テスト2",
        card_path: "private_article_test2",
        tags: ["魚", "料理"],
        create_date: "2022/02/01",
        update_date: "2022/03/02",
        card_text: "趣味関連記事_テスト2のテキスト",
        card_img: "src/components/img/private_article/趣味記事イメージ2.jpg",
      },
      {
        card_name: "数合わせ1 ",
        card_path: "private_article_test1",
        tags: ["ゲーム", "アニメ"],
        create_date: "2022/02/01",
        update_date: "2022/03/02",
        card_text: "趣味関連記事_テスト1のテキスト",
        card_img: "src/components/img/private_article/趣味記事イメージ１.jpg",
      },
      {
        card_name: "数合わせ2",
        card_path: "private_article_test2",
        tags: ["魚", "料理"],
        create_date: "2022/02/01",
        update_date: "2022/03/02",
        card_text: "趣味関連記事_テスト2のテキスト",
        card_img: "src/components/img/private_article/趣味記事イメージ2.jpg",
      },
      {
        card_name: "数合わせ3 ",
        card_path: "private_article_test1",
        tags: ["ゲーム", "アニメ"],
        create_date: "2022/02/01",
        update_date: "2022/03/02",
        card_text: "趣味関連記事_テスト1のテキスト",
        card_img: "src/components/img/private_article/趣味記事イメージ１.jpg",
      },
      {
        card_name: "数合わせ4",
        card_path: "private_article_test2",
        tags: ["魚", "料理"],
        create_date: "2022/02/01",
        update_date: "2022/03/02",
        card_text: "趣味関連記事_テスト2のテキスト",
        card_img: "src/components/img/private_article/趣味記事イメージ2.jpg",
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
  },
});
