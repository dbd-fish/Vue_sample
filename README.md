# リポジトリ概要
Vue3を用いてブログのプロトタイプを作成しました。
プロフィールや職務経歴書などが閲覧できます。
ページ本文をmdファイルに分けて管理しています。
また、GitHub Pagesを利用して本サイトを公開しています。
https://dbd-fish.github.io/Vue_sample/#/home_page

# 主な技術スタック
* Vue3: 3.3.4
* Vue Router: 4.2.4
* Vuetify: 3.3.9
* Pinia: 2.1.6

# ディレクトリ構成
下記のようなディレクトリ構成としました。特にこだわりがありません。
```txt
Vue_sample/
├── docs/                   # GitHub Pages用のファイル
├── .vscode/                # Visual Studio Codeの設定ファイルを格納するディレクトリ
├── src/                    # アプリケーションのソースコードを格納するディレクトリ
│   ├── assets/             # 画像やスタイルシートなどの静的リソースを格納するディレクトリ
│   ├── components/         # 再利用可能なVueコンポーネントなどを格納するディレクトリ
│   │   ├── img/            # 画像を管理するためのコンポーネントやリソースを格納するディレクトリ
│   │   ├── markdown/       # Markdown関連のコンポーネントを格納するディレクトリ
│   │   ├── com_article.vue # 記事の表示や管理に関連するコンポーネント
│   │   ├── com_footer.vue  # アプリケーション全体のフッター部分を管理するコンポーネント
│   │   ├── com_header.vue  # アプリケーション全体のヘッダー部分を管理するコンポーネント
│   │   ├── com_navigation.vue # ナビゲーションバーを管理するコンポーネント
│   │   └── profile_card.vue # プロファイル情報を表示するカード型コンポーネント
│   ├── pages/              # 各ページに対応するVueコンポーネントを格納するディレクトリ
│   │   ├── job_article_list/        # 仕事関連の記事一覧に関連するページコンポーネントを格納するディレクトリ
│   │   ├── private_article_list/    # 趣味関連の記事一覧に関連するページコンポーネントを格納するディレクトリ
│   │   ├── error_page.vue           # エラーページを表示するVueコンポーネント
│   │   ├── home_page.vue            # ホームページを表示するVueコンポーネント
│   │   ├── job_article_list.vue     # 仕事関連の記事のリストページコンポーネント
│   │   ├── my_profile.vue           # プロフィールを表示するVueコンポーネント
│   │   ├── my_resume.vue            # 職務経歴ページを表示するVueコンポーネント
│   │   ├── private_article_list.vue # 趣味関連の記事のリストページコンポーネント
│   │   ├── request_page.vue         # お問い合わせページを表示するVueコンポーネント
│   │   └── service_page.vue         # 事業内容ページを表示するVueコンポーネント
│   ├── store/              # 状態管理ライブラリPiniaのストアを格納するディレクトリ
│   ├── App.vue             # アプリケーションのルートコンポーネント
│   ├── router.js           # Vue Routerの設定を行うファイル
│   ├── vuetify.js          # Vuetifyの設定を行うファイル
│   └── main.js             # アプリケーションのエントリーポイント
├── .eslintrc.json          # ESLintの設定ファイル
├── .gitignore              # Gitで追跡しないファイルやディレクトリを指定するファイル
├── .prettierrc             # Prettierの設定ファイル
├── .stylelintrc.json       # Stylelintの設定ファイル
├── README.md               # プロジェクトの概要や説明を記載したファイル
├── index.html              # アプリケーションのメインHTMLファイル
├── package-lock.json       # npmの依存関係を固定するためのファイル
├── package.json            # プロジェクトのメタデータや依存関係を定義するファイル
└── vite.config.js          # Viteの設定ファイル
```

# 環境構築手順
## 動作確認
下記コマンドで必要なパッケージをインストール。
```Bash
npm install
```
  
下記で閲覧。
```Bash
npm run dev
```

## 各種フォーマット
```Bash
npx eslint --fix "src/**/*.vue"
npx eslint --fix "src/**/*.js"
npx stylelint --fix  "src/**/*.css"
```
## GitHub Pagesへのプッシュ手順
  
1. 下記コマンドを実行。  
```Bash
npm run build
```
2. docsディレクトリをプッシュする。

3. しばらくすると下記URLに変更内容が反映される。  
https://dbd-fish.github.io/Vue_sample/#/home_page


