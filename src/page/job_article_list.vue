
<template>
  <v-layout>
    <v-app-bar color="teal-darken-4" image="https://picsum.photos/1920/1080?random">
      <template v-slot:image>
        <v-img gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"></v-img>
      </template>
      <template v-slot:prepend>

        <v-btn :to="{ path: 'home' }">
          私のブログ
        </v-btn>

      </template>
      <v-app-bar-title>仕事関連の記事</v-app-bar-title>
      <v-spacer></v-spacer>
      <template v-slot:extension>
        <v-btns v-model="tab" align-tabs="title">
          <v-btn v-for="tab in tab_list" :key="tab.tab_name" :value="tab.tab_name" :to="{ path: tab.tab_path }">
            {{ tab.tab_name }}
          </v-btn>
        </v-btns>
      </template>
    </v-app-bar>
    <v-main>
      <div class="md">
        仕事関連の記事
      </div>
    </v-main>
    <v-main>
      <profile_card />
    </v-main>
  </v-layout>
</template>

<script>
import profile_card from "@/components/profile_card.vue";


export default {
  components: {
    profile_card
  },
  data() {
    return {
      tab: null,
      tab_list: [
        { tab_name: 'プロフィール', tab_path: 'profile' },
        { tab_name: '経歴', tab_path: 'resume' },
        { tab_name: `事業内容`, tab_path: 'service' },
        { tab_name: '仕事関連の記事', tab_path: 'job_article_list' },
        { tab_name: '趣味の記事', tab_path: 'private_article_list' },
        { tab_name: 'お問い合わせ', tab_path: 'request' },
      ],
    }
  },
}


</script>
