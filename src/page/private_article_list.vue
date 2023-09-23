<template>
  <v-app>
    <v-app-bar
      color="teal-darken-4"
      image="..\src\components\img\みしまおこぜ.jpg"
    >
      <template v-slot:image>
        <v-img
          gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
        ></v-img>
      </template>
      <template v-slot:prepend>
        <v-app-bar-nav-icon
          @click="drawer = true"
          class="d-flex d-lg-none"
        ></v-app-bar-nav-icon>
        <v-btn :to="{ name: 'home_page' }" style="text-transform: none">
          dbd-fishのブログ
        </v-btn>
      </template>
      <v-spacer></v-spacer>
      <v-btn
        v-for="tab in StoreMain.tab_list"
        :key="tab.tab_name"
        :value="tab.tab_name"
        :to="{ name: tab.tab_path }"
        class="d-none d-sm-none d-md-none d-lg-flex"
      >
        {{ tab.tab_name }}
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-navigation-drawer v-model="drawer" absolute temporary>
        <v-list-item
          v-for="tab in StoreMain.tab_list"
          :key="tab.tab_name"
          :value="tab.tab_name"
          :to="{ name: tab.tab_path }"
        >
          <v-list-item-title> {{ tab.tab_name }}</v-list-item-title>
        </v-list-item>
      </v-navigation-drawer>
      <v-row justify="center" align-content-sm="center">
        <v-col
          cols="12"
          sm="12"
          md="12"
          lg="6"
          xl="6"
          id="main_col"
          class="justify-center align-start"
        >
          <div class="md_header">
            <h1 style="border-bottom: None">趣味関連の記事</h1>
          </div>
          <v-card
            v-for="private_article_card in StoreMain.private_article_card_list"
            :key="private_article_card.card_name"
            :value="private_article_card.card_name"
            :to="{ name: private_article_card.card_path }"
            class="mx-auto"
            max-width="344"
          >
            <v-img
              cover
              height="250"
              :src="private_article_card.card_img"
            ></v-img>
            <v-card-text>
              <v-card-title>
                {{ private_article_card.card_name }}
              </v-card-title>
              <div class="text--primary">
                {{ private_article_card.card_text }}
              </div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col
          cols="12"
          sm="12"
          md="12"
          lg="2"
          xl="2"
          id="side_col"
          class="justify-center align-start"
        >
          <v-row justify="center" align-content-sm="center">
            <v-col
              cols="12"
              id="side_col_components"
              class="justify-center align-start"
            >
              <profile_card />
            </v-col>
            <v-col
              cols="12"
              id="side_col_components"
              class="justify-center align-start"
            >
            </v-col>
            <v-col
              cols="12"
              id="side_col_components"
              class="justify-center align-start"
            >
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-main>
    <com_footer />
  </v-app>
</template>

<script setup>
import { useStoreMain } from "@/stores/store_main";
import profile_card from "@/components/profile_card.vue";
import com_footer from "@/components/com_footer.vue";
// TODO: ヘッダーをコンポーネント化するとナビゲーションドロワーが機能しなくなるためコンポーネント化は保留
// import com_header from "@/components/com_header.vue";
// import com_navigation from "@/components/com_navigation.vue";

const StoreMain = useStoreMain();
</script>

<script>
export default {
  data() {
    return {
      drawer: false,
      tab: "",
    };
  },
};
</script>
<style>
.article_list {
  width: 500px;
  height: 300px;
  margin: 2rem;
  background-color: white;
}
</style>
