
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
      <v-app-bar-title>{{ StoreMain.now_page }}</v-app-bar-title>
      <v-spacer></v-spacer>

      <!-- <template v-slot:extension > -->
      <v-btns v-model="tab" align-tabs="title" class="d-none d-sm-flex">
        <v-btn v-for="tab in StoreMain.tab_list" :key="tab.tab_name" :value="tab.tab_name" :to="{ name: tab.tab_path }">
          {{ tab.tab_name }}
        </v-btn>
      </v-btns>
      <!-- </template> -->


    </v-app-bar>


    <v-main>
      <v-navigation-drawer v-model="drawer" absolute temporary>
        <v-list-item v-for="tab in StoreMain.tab_list" :key="tab.tab_name" :value="tab.tab_name"
          :to="{ name: tab.tab_path }">
          <v-list-item-title> {{ tab.tab_name }}</v-list-item-title>
        </v-list-item>
      </v-navigation-drawer>
      <!-- <v-navigation-drawer location="left">
        <adsense_card />
      </v-navigation-drawer>
      <v-navigation-drawer location="right">
        <profile_card />
      </v-navigation-drawer>  -->

      <!-- <v-container class="main_container">
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
          <div id="md">
            <job_article_test1 />
          </div>
        </section>
      </v-container>
      <v-container class="side_container">
        <p>vvvvvvvvvv</p>
      </v-container> -->
      <v-row justify="center" align-content-sm="center">
        <v-col cols="12" sm="12" md="2" lg="2" xl="2" class="side_col">
          <adsense_card />
        </v-col>
        <v-col cols="12" sm="12" md="6" lg="6" xl="6" align-self="center" class="main_col">
          <div class="main_container">
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
              <div id="md">
                <job_article_test1 />
              </div>
            </section>
          </div>
        </v-col>

        <v-col cols="12" sm="12" md="2" lg="2" xl="2" class="side_col">
          <profile_card />
        </v-col>
      </v-row>



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
StoreMain.update_now_page("仕事関連の記事");

</script>

<script>
import profile_card from "@/components/profile_card.vue";
import adsense_card from "@/components/adsense_card.vue";
import com_footer from "@/components/com_footer.vue";
import job_article_test1 from "@/components/markdown/job_article_list/job_article_test1.md";


export default {
  components: {
    profile_card,
    adsense_card,
    com_footer,
    job_article_test1,

  },
  data() {
    return {
      drawer: false,
      tab: null,
    }
  }
}
</script>

<style>
.V_main_style {
  margin: 0rem;
  padding: 10rem;
}
</style>