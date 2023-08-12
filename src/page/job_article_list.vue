
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
        仕事関連の記事
      </div>
      <v-card v-for="job_article_card in StoreMain.job_article_card_list" :key="job_article_card.card_name"
        :value="job_article_card.card_name" :to="{ name: job_article_card.card_path }" class="article_list">
        {{ job_article_card.card_name }}
      </v-card>
    </v-main>
  </v-app>
</template>

<script setup>
import { useStoreMain } from '@/stores/store_main';

const StoreMain = useStoreMain();
StoreMain.update_now_page("仕事関連の記事");

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

<style>
.article_list {
  width: 500px;
  height: 300px;
  margin: 2rem;
  background-color: #f5f5f5;
}
</style>
