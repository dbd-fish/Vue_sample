
<template>
  <v-app class="rounded rounded-md">
    <v-app-bar color="teal-darken-4" image="..\src\components\img\みしまおこぜ.jpg">
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

    <v-main>
      <v-navigation-drawer location="left" absolute>
        <adsense_card />
      </v-navigation-drawer>
      <v-navigation-drawer location="right" absolute>
        <profile_card />
      </v-navigation-drawer>
      <div id="md">
        <section class="md_header">
          <p class="article_title">{{ article_title }}</p>
          <p>記事作成日 {{ create_date }}</p>
          <p>記事更新日 {{ update_date }}</p>
          <br>
          <p>タグ：
            <v-btn v-for="tag in tags" :key="tag" id="articl_tag">
              {{ tag }}
            </v-btn>
          </p>
        </section>
        <section>
          <private_article_test2 />
        </section>
      </div>
    </v-main>
    <com_footer />
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
StoreMain.update_now_page("趣味関連の記事");

</script>

<script>
import profile_card from "@/components/profile_card.vue";
import adsense_card from "@/components/adsense_card.vue";
import com_footer from "@/components/com_footer.vue";
import private_article_test2 from "@/components/markdown/private_article_list/private_article_test1.md";

export default {
  components: {
    profile_card,
    adsense_card,
    com_footer, private_article_test2
  },
}
</script>

<style>
.V_main_style {
  margin: 0rem;
  padding: 10rem;
}
</style>