<!-- 
  TODO: コンポーネントを作成したが未実装
 -->

<template>
  <v-navigation-drawer v-model="drawer" absolute temporary>
    <v-list-item v-for="tab in StoreMain.tab_list" :key="tab.tab_name" :value="tab.tab_name" :to="{ name: tab.tab_path }">
      <v-list-item-title> {{ tab.tab_name }}</v-list-item-title>
    </v-list-item>
  </v-navigation-drawer>
</template>

<script setup>
import { useStoreMain } from '@/stores/store_main';
import { useRoute } from "vue-router";


const router = useRoute()

const StoreMain = useStoreMain();
StoreMain.update_now_page("仕事関連の記事");

</script>

<script>
export default {
  data() {
    return {
      tab: null,
      drawer: false,
    }
  },
  props: {
    value: {
      type: Boolean,
      default: false
    }
  }

}
</script>