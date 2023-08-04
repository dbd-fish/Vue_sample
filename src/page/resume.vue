
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
      <v-app-bar-title>職務経歴</v-app-bar-title>
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
        <resume_md />
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

<script>
import resume_md from "@/components/markdown/resume.md";
import profile_card from "@/components/profile_card.vue";

export default {
  components: {
    resume_md,
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

<style >
table,
td,
th {
  border: 3px #0f1419 solid;
  border-collapse: collapse;
  /* color: red; */
  padding: 0.5rem;
}

table {
  margin: 2rem 0em 20px;
  table-layout: fixed;
}

th {
  background-color: #dcdcdc;
  font-weight: bold;
}

ul {
  padding-left: 20px;
}

h1 {
  border-bottom: solid;
  padding-top: 1rem;
  padding-bottom: 0.2rem;
}

h2,
h3,
h4,
h5,
h6 {
  border-bottom: solid;
  border-bottom-width: 0.1rem;
  padding-top: 1rem;
  padding-bottom: 0.2rem;
}
</style>