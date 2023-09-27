<template>
  <v-app>
    <v-app-bar color="teal-darken-4" :image="misima">
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
          id="main-col"
          class="justify-center align-start"
        >
          <div class="md-header">
            <h1 style="border-bottom: None">お問い合わせ</h1>
          </div>
          <div class="md-main">
            <p>dbd.fish0805@gmail.com</p>
          </div>
        </v-col>
        <v-col
          cols="12"
          sm="12"
          md="12"
          lg="2"
          xl="2"
          id="side-col"
          class="justify-center align-start"
        >
          <v-row justify="center" align-content-sm="center">
            <v-col
              cols="12"
              id="side-col-components"
              class="justify-center align-start"
            >
              <profile_card />
            </v-col>
            <v-col
              cols="12"
              id="side-col-components"
              class="justify-center align-start"
            >
            </v-col>
            <v-col
              cols="12"
              id="side-col-components"
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
import misima from "@/components/img/misima.jpg";
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
