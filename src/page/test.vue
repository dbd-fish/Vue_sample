<template>
  <v-app app>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = true" class="d-flex d-sm-none"></v-app-bar-nav-icon>
      <v-toolbar-title>Your Dashboard</v-toolbar-title>
      <v-spacer></v-spacer>

      <template v-slot:extension>
        <v-tabs v-model="tab" align-with-title class="d-none d-sm-flex">

          <v-btns v-model="tab" align-tabs="title">
            <v-btn v-for="tab in StoreMain.tab_list" :key="tab.tab_name" :value="tab.tab_name"
              :to="{ name: tab.tab_path }">
              {{ tab.tab_name }}
            </v-btn>
          </v-btns>
        </v-tabs>
      </template>
    </v-app-bar>
    <!-- Add a navigation bar -->
    <v-navigation-drawer v-model="drawer" fix temporary>
      <v-btns v-model="tab" align-tabs="title">
        <v-list v-for="tab in StoreMain.tab_list" :key="tab.tab_name" :value="tab.tab_name" :to="{ name: tab.tab_path }">
          {{ tab.tab_name }}
        </v-list>
      </v-btns>
    </v-navigation-drawer>
    <!-- Navigation bar ends -->
    <v-content class="ma-5">
      <v-tabs-items v-model="tab" class="d-flex flex-column align-center">
        <v-tab-item v-for="item in items" :key="item">
          You are on {{ item }}
        </v-tab-item>
      </v-tabs-items>
    </v-content>
  </v-app>
</template>


<script setup>
import { useStoreMain } from '@/stores/store_main';
import { useRoute } from "vue-router";


const router = useRoute()
const article_title = router.meta.title
const create_date = router.meta.create_date
const update_date = router.meta.update_date
const tags = router.meta.tags

const StoreMain = useStoreMain();
StoreMain.update_now_page("仕事関連の記事");

</script>

<script>
export default {
  data() {
    return {
      drawer: false,
      tab: null,
    }
  }
}
</script>