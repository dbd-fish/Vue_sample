
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
    <v-main>
      <div class="md">
        <h1>事業内容</h1>
        <h2>フリーランス業務(SES)</h2>
        <ul>
          <li>PHPやPythonなどを用いたweb系バックエンド開発</li>
          <li>Javaなど用いたIT講師</li>
          <li>プログラミングスクールのコーチ</li>
        </ul>

        <h2>プロダクト</h2>
        <ul>
          <li>本ブログ</li>
        </ul>

        <h2>その他</h2>
        <ul>
          <li>太陽光を用いたマイニング</li>
          <li>本ブログのアフィリエイト</li>
        </ul>

      </div>
    </v-main>
    <v-main>
      <profile_card />
    </v-main>
  </v-layout>
</template>

<script setup>
import { useStoreMain } from '@/stores/store_main';

const StoreMain = useStoreMain();
StoreMain.update_now_page("事業内容");

</script>

<script>
import profile_card from "@/components/profile_card.vue";

export default {
  components: {
    profile_card
  },
}

</script>
