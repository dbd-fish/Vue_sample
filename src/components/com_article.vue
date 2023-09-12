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

</script>

<script>
import job_article_test1 from "@/components/markdown/job_article_list/job_article_test1.md";


export default {
  components: {
    job_article_test1,
  },
  props: ['articl_info'],
}
</script>