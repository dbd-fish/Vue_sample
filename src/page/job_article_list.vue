
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
      <v-app-bar-title>{{StoreMain.now_page}}</v-app-bar-title>
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
        仕事関連の記事
      </div>
    </v-main>
  </v-layout>
</template>

<script setup>
import { useStoreMain } from '@/stores/store_main';

const StoreMain = useStoreMain();
StoreMain.update_now_page("仕事関連の記事");

</script>
<script>
import profile_card from "@/components/profile_card.vue";

export default {
  components: {
    profile_card
  },
}

</script>
