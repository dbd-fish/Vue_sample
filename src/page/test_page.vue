<template>
  <v-row justify="center" align-content="center">
    <v-col>
      <v-container class="main_container">
        <p>vvvvvvvvvv</p>
      </v-container>
    </v-col>

    <v-col>
      <v-container class="side_container">
        <p>aaaaaaaaa</p>
      </v-container>
    </v-col>
  </v-row>
</template>

<script setup>
import { useStoreMain } from "@/stores/store_main";

const StoreMain = useStoreMain();
StoreMain.update_now_page("仕事関連の記事");
</script>

<script>
export default {
  data() {
    return {
      drawer: false,
      tab: null,
    };
  },
};
</script>
