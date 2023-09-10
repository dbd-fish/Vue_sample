<template>
  <div class="main_container">
    <section class="md_header">
      <p class="article_title">{{ articl_info['article_title'] }}</p>
      <p>記事作成日 {{ articl_info['create_date'] }}</p>
      <p>記事更新日 {{ articl_info['update_date'] }}</p>
      <br>
      <p>タグ：
        <v-btn v-for="tag in articl_info['tags']" :key="tag" id="articl_tag">
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
</template>

<script setup>
import { useRoute } from "vue-router";

const router = useRoute()
// const article_title = router.meta.title
// const create_date = router.meta.create_date
// const update_date = router.meta.update_date
// const tags = router.meta.tags
</script>

<script>
import job_article_test1 from "@/components/markdown/job_article_list/job_article_test1.md";


export default {
  components: {
    job_article_test1,
  },
  data() {
    return {
      drawer: false,
      tab: null,
    }
  },
  props: ['articl_info'],
}
</script>