<!-- 
  TODO: コンポーネントを作成したが未実装
 -->
<template>
  <v-app-bar color="teal-darken-4" :image="misima">
    <template v-slot:image>
      <v-img
        gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
      ></v-img>
    </template>
    <template v-slot:prepend>
      <v-app-bar-nav-icon
        @click="drawer = true"
        class="d-flex d-sm-none"
      ></v-app-bar-nav-icon>
      <v-btn :to="{ name: 'home_page' }" style="text-transform: none">
        dbd-fishのブログ
      </v-btn>
    </template>
    <v-spacer></v-spacer>
    <v-btns v-model="tab" align-tabs="title" class="d-none d-sm-flex">
      <v-btn
        v-for="tab in StoreMain.tab_list"
        :key="tab.tab_name"
        :value="tab.tab_name"
        :to="{ name: tab.tab_path }"
      >
        {{ tab.tab_name }}
      </v-btn>
    </v-btns>
  </v-app-bar>
</template>

<script setup>
import misima from "@/components/img/misima.jpg";
import { useStoreMain } from "@/stores/store_main";

const StoreMain = useStoreMain();
StoreMain.update_now_page("仕事関連の記事");
</script>

<script>
export default {
  data() {
    return {
      drawer: false,
    };
  },
};
</script>
