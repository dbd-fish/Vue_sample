
<template>
  <v-layout>
    <v-app-bar color="teal-darken-4" image="https://picsum.photos/1920/1080?random">
      <template v-slot:image>
        <v-img gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"></v-img>
      </template>
      <template v-slot:prepend>

        <v-btn :to="{ path: 'home' }" style="text-transform: none">
          dbd-fishのブログ
        </v-btn>

      </template>
      <v-app-bar-title>{{StoreMain.now_page}}</v-app-bar-title>
      <v-spacer></v-spacer>
      <template v-slot:extension>
        <v-btns v-model="tab" align-tabs="title">
          <v-btn v-for="tab in StoreMain.tab_list" :key="tab.tab_name" :value="tab.tab_name" :to="{ path: tab.tab_path }">
            {{ tab.tab_name }}
          </v-btn>
        </v-btns>
      </template>
    </v-app-bar>
    <v-main>
      <div>
        <resume_md class="md" />
      </div>
    </v-main>
    <v-main>
      <profile_card />
      <v-card max-width="400" color="#f5f5f5">
        <v-card-title>test</v-card-title>
      </v-card>
    </v-main>

  </v-layout>
</template>

<script setup>
import { useStoreMain } from '@/stores/store_main';

const StoreMain = useStoreMain();
StoreMain.update_now_page("職務経歴");

</script>

<script>
import resume_md from "@/components/markdown/resume.md";
import profile_card from "@/components/profile_card.vue";

export default {
  components: {
    resume_md,
    profile_card
  },
}
</script>

<style ></style>