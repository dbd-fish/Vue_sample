
<template>
  <v-layout>
    <v-app-bar color="teal-darken-4" image="https://picsum.photos/1920/1080?random">
      <template v-slot:image>
        <v-img gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"></v-img>
      </template>
      <template v-slot:prepend>

        <v-btn :to="{ path: 'home' }" style="text-transform: none">
          dbd-fishのブログ
        </v-btn>

      </template>
      <v-app-bar-title>{{ StoreMain.now_page }}</v-app-bar-title>
      <v-spacer></v-spacer>
      <template v-slot:extension>
        <v-btns v-model="tab" align-tabs="title">
          <v-btn v-for="tab in StoreMain.tab_list" :key="tab.tab_name" :value="tab.tab_name" :to="{ path: tab.tab_path }">
            {{ tab.tab_name }}
          </v-btn>
        </v-btns>
      </template>
    </v-app-bar>
    <v-navigation-drawer location="left">
      <v-list>
        <adsense_card />
      </v-list>
    </v-navigation-drawer>
    <v-navigation-drawer location="right">
      <v-list>
        <profile_card />
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <div class="md">
        <h1>自己紹介</h1>
        <img class="main_img" src="src\components\img\pforile.png" alt="自己紹介">
        愛知県内在住のWebエンジニア兼IT講師。<br>
        Webバックエンドがメインだが、画面を作ったり環境構築もできる。<br>
        IT講師ではJavaなどを教えている。<br>

        <h2>資格</h2>
        <ul>
          <li>AWS Certified Cloud Practitioner (CLF)</li>
          <li>AWS Certified Solutions Architect – Associate</li>
          <li>Python 3 エンジニア認定データ分析</li>
        </ul>

        <h2>アカウント</h2>
        <ul>
          <li><a href="https://github.com/dbd-fish" target="_blank">GitHub</a></li>
          <li><a href="https://qiita.com/dbd_fish" target="_blank">Qiita</a></li>
        </ul>

        <h1>スキル</h1>
        <h2>言語</h2>
        PHP、Python、Java、HTML、CSS、JavaScript、C、ASMなど色々やってきました。
        <h2>フレームワーク</h2>
        Larave、Django、Vue.js、FastAPI

        <h2>DB</h2>
        Postgres、DynamoDB、MySQL
        <h2>その他</h2>
        AWS、Azure(VMのみ)

        <h1>経歴</h1>
        工学系の大学卒業<br>
        ↓<br>
        大学院を数か月で中退<br>
        ↓<br>
        組み込み系SIerに就職<br>
        ↓<br>
        Web系SESに就職<br>
        ↓<br>
        フリーランス<br>

        職務経歴は
        <router-link to="/resume">
          こちら
        </router-link>
        をご覧ください。
        <h1>趣味</h1>
        魚を調理すること<br>
        たまにゲームをすること<br>

      </div>
    </v-main>

  </v-layout>
</template>

<script setup>
import { useStoreMain } from '@/stores/store_main';

const StoreMain = useStoreMain();
StoreMain.update_now_page("プロフィール");

</script>

<script>
import profile_card from "@/components/profile_card.vue";
import profile_md from "@/components/markdown/profile.md";

export default {
  components: {
    profile_card,
    profile_md
  },
}
</script>

<style scoped>
:deep(h1) {
  background-color: #cfffff;
  padding-left: 1rem;
}

:deep(img.main_img) {
  padding: 1rem;
  width: 100%;
}
</style>
