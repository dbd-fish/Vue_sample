
<template>
  <v-app>
    <v-app-bar color="teal-darken-4" image="src\components\img\みしまおこぜ.jpg">
      <template v-slot:image>
        <v-img gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"></v-img>
      </template>
      <template v-slot:prepend>

        <v-btn :to="{ name: 'home' }" style="text-transform: none">
          dbd-fishのブログ
        </v-btn>

      </template>
      <v-app-bar-title>{{ StoreMain.now_page }}</v-app-bar-title>
      <v-spacer></v-spacer>
      <template v-slot:extension>
        <v-btns v-model="tab" align-tabs="title">
          <v-btn v-for="tab in StoreMain.tab_list" :key="tab.tab_name" :value="tab.tab_name" :to="{ name: tab.tab_path }">
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
        <h1>事業内容</h1>
        <h2>フリーランス業務(SES)</h2>
        <ul>
          <li>PHPやPythonなどを用いたweb系バックエンド開発</li>
          <li>Javaなど用いたIT講師</li>
        </ul>

        <h2>プロダクト</h2>
        <ul>
          <li>本ブログ</li>
        </ul>

        <h2>その他</h2>
        <ul>
          <li>太陽光を用いたマイニング</li>
          <li>本ブログの広告収入（目標）</li>
        </ul>

      </div>
    </v-main>
  </v-app>
</template>

<script setup>
import { useStoreMain } from '@/stores/store_main';

const StoreMain = useStoreMain();
StoreMain.update_now_page("事業内容");

</script>

<script>
import profile_card from "@/components/profile_card.vue";
import adsense_card from "@/components/adsense_card.vue";

export default {
  components: {
    profile_card,
    adsense_card,
  },
}

</script>
