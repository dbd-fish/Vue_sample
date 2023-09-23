<template>
  <v-app>
    <v-app-bar
      color="teal-darken-4"
      image="..\src\components\img\みしまおこぜ.jpg"
    >
      <template v-slot:image>
        <v-img
          gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
        ></v-img>
      </template>
      <template v-slot:prepend>
        <v-app-bar-nav-icon
          @click="drawer = true"
          class="d-flex d-lg-none"
        ></v-app-bar-nav-icon>
        <v-btn :to="{ name: 'home_page' }" style="text-transform: none">
          dbd-fishのブログ
        </v-btn>
      </template>
      <v-spacer></v-spacer>
      <v-btn
        v-for="tab in StoreMain.tab_list"
        :key="tab.tab_name"
        :value="tab.tab_name"
        :to="{ name: tab.tab_path }"
        class="d-none d-sm-none d-md-none d-lg-flex"
      >
        {{ tab.tab_name }}
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-navigation-drawer v-model="drawer" absolute temporary>
        <v-list-item
          v-for="tab in StoreMain.tab_list"
          :key="tab.tab_name"
          :value="tab.tab_name"
          :to="{ name: tab.tab_path }"
        >
          <v-list-item-title> {{ tab.tab_name }}</v-list-item-title>
        </v-list-item>
      </v-navigation-drawer>
      <v-row justify="center" align-content-sm="center">
        <v-col
          cols="12"
          sm="12"
          md="12"
          lg="6"
          xl="6"
          id="main_col"
          class="justify-center align-start"
        >
          <div class="md_header">
            <h1 style="border-bottom: None">自己紹介</h1>
          </div>
          <div class="md_main">
            <v-img
              class="main_img"
              src="src\components\img\pforile.png"
              alt="自己紹介"
            ></v-img>
            <p>
              愛知県内在住のWebエンジニア兼IT講師。<br />
              Webバックエンドがメインだが、画面を作ったり環境構築もできる。<br />
              IT講師ではJavaなどを教えている。<br />
            </p>
            <h2>資格</h2>
            <ul>
              <li>AWS Certified Cloud Practitioner (CLF)</li>
              <li>AWS Certified Solutions Architect – Associate</li>
              <li>Python 3 エンジニア認定データ分析</li>
            </ul>

            <h2>アカウント</h2>
            <ul>
              <li>
                <a href="https://github.com/dbd-fish" target="_blank">GitHub</a>
              </li>
              <li>
                <a href="https://qiita.com/dbd_fish" target="_blank">Qiita</a>
              </li>
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
            工学系の大学卒業<br />
            ↓<br />
            大学院を数か月で中退<br />
            ↓<br />
            組み込み系SIerに就職<br />
            ↓<br />
            Web系SESに就職<br />
            ↓<br />
            フリーランス<br />
            <br />
            職務経歴は
            <router-link to="/my_resume"> こちら </router-link>
            をご覧ください。
            <h1>趣味</h1>
            魚を調理すること<br />
            たまにゲームをすること<br />
          </div>
        </v-col>
        <v-col
          cols="12"
          sm="12"
          md="12"
          lg="2"
          xl="2"
          id="side_col"
          class="justify-center align-start"
        >
          <v-row justify="center" align-content-sm="center">
            <v-col
              cols="12"
              id="side_col_components"
              class="justify-center align-start"
            >
              <profile_card />
            </v-col>
            <v-col
              cols="12"
              id="side_col_components"
              class="justify-center align-start"
            >
            </v-col>
            <v-col
              cols="12"
              id="side_col_components"
              class="justify-center align-start"
            >
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-main>
    <com_footer />
  </v-app>
</template>

<script setup>
import { useStoreMain } from "@/stores/store_main";
import profile_card from "@/components/profile_card.vue";
import com_footer from "@/components/com_footer.vue";
// TODO: ヘッダーをコンポーネント化するとナビゲーションドロワーが機能しなくなるためコンポーネント化は保留
// import com_header from "@/components/com_header.vue";
// import com_navigation from "@/components/com_navigation.vue";

const StoreMain = useStoreMain();
</script>

<script>
export default {
  data() {
    return {
      drawer: false,
      tab: "",
    };
  },
};
</script>
