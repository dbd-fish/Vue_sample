
<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar class="main_bar" color="teal-darken-4" image="https://picsum.photos/1920/1080?random">
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

    <v-navigation-drawer>
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
      パンくずリスト
      <div class="md">
        <!-- 本番用書き換え -->
        お問い合わせ
        <p><a href="mailto:info&#64;example.com">info&#64;example.com</a></p>
      </div>
    </v-main>
  </v-layout>
</template>

<script setup>
import { useStoreMain } from '@/stores/store_main';

const StoreMain = useStoreMain();
StoreMain.update_now_page("お問い合わせ");

</script>

<script>
import profile_card from "@/components/profile_card.vue";
import adsense_card from "@/components/adsense_card.vue";

export default {
  components: {
    profile_card,
    adsense_card
  },
}
</script>

<style>
.V_main_style {
  margin: 0rem;
  padding: 10rem;
}
</style>