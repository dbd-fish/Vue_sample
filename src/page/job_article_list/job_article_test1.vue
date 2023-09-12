
<template>
  <v-app>
    <v-app-bar color="teal-darken-4" image="..\src\components\img\みしまおこぜ.jpg">
    <template v-slot:image>
      <v-img gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"></v-img>
    </template>
    <template v-slot:prepend>
      <v-app-bar-nav-icon @click="drawer = true" class="d-flex d-sm-none"></v-app-bar-nav-icon>
      <v-btn :to="{ name: 'home' }" style="text-transform: none">
        dbd-fishのブログ
      </v-btn>
    </template>
    <v-spacer></v-spacer>
    <v-btns v-model="tab" align-tabs="title" class="d-none d-sm-flex">
      <v-btn v-for="tab in StoreMain.tab_list" :key="tab.tab_name" :value="tab.tab_name" :to="{ name: tab.tab_path }">
        {{ tab.tab_name }}
      </v-btn>
    </v-btns>
  </v-app-bar>
      <v-main>
      <v-navigation-drawer v-model="drawer" absolute temporary>
        <v-list-item v-for="tab in StoreMain.tab_list" :key="tab.tab_name" :value="tab.tab_name"
          :to="{ name: tab.tab_path }">
          <v-list-item-title> {{ tab.tab_name }}</v-list-item-title>
        </v-list-item>
      </v-navigation-drawer>
      <v-row justify="center" align-content-sm="center">
        <v-col cols="12" sm="12" md="12" lg="6" xl="6" id="main_col" class="justify-center align-start">
          <com_article :articl_info=articl_info />
        </v-col>

        <v-col cols="12" sm="12" md="12" lg="2" xl="2" id="side_col" class="justify-center align-start">
          <v-row justify="center" align-content-sm="center">
            <v-col cols="12" id="side_col_components" class="justify-center align-start">
              <profile_card />
            </v-col>
            <v-col cols="12" id="side_col_components" class="justify-center align-start">
              <adsense_card />
            </v-col>
            <v-col cols="12" id="side_col_components" class="justify-center align-start">
              <adsense_card />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-main>
    <com_footer />
  </v-app>
</template>

<script setup>
import { useStoreMain } from '@/stores/store_main';
import { useRoute } from "vue-router";


const StoreMain = useStoreMain();
StoreMain.update_now_page("仕事関連の記事1");

const router = useRoute()
const article_title = router.meta.title
const create_date = router.meta.create_date
const update_date = router.meta.update_date
const tags = router.meta.tags

var articl_info = {
  article_title: article_title,
  create_date: create_date,
  update_date: update_date,
  tags: tags,
  age: 28
}

</script>

<script>
import profile_card from "@/components/profile_card.vue";
import adsense_card from "@/components/adsense_card.vue";
import com_footer from "@/components/com_footer.vue";
// TODO: ヘッダーをコンポーネント化するとナビゲーションドロワーが機能しなくなるためコンポーネント化は保留
// import com_header from "@/components/com_header.vue";
// import com_navigation from "@/components/com_navigation.vue";
import com_article from "@/components/com_article.vue";

export default {
  components: {
    profile_card,
    adsense_card,
    com_footer,
    com_article,
  },
  data() {
    return {
      drawer: false,
    }
  }
}
</script>

