
<template>
  <v-app>
    <com_header />
    <v-main>
      <com_navigation />
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
import com_header from "@/components/com_header.vue";
import com_navigation from "@/components/com_navigation.vue";
import com_article from "@/components/com_article.vue";

export default {
  components: {
    profile_card,
    adsense_card,
    com_footer,
    com_header,
    com_navigation,
    com_article,
  },
  data() {
    return {
      drawer: false,
      tab: null,
    }
  }
}
</script>

