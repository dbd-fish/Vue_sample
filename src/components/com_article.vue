<template>
  <div class="main_container">
    <section class="md_header">
      <p class="article-title">{{ articl_info["article_title"] }}</p>
      <p>記事作成日 {{ articl_info["create_date"] }}</p>
      <p>記事更新日 {{ articl_info["update_date"] }}</p>
      <br />
      <p>
        タグ：
        <v-btn v-for="tag in articl_info['tags']" :key="tag" id="articl-tag">
          {{ tag }}
        </v-btn>
      </p>
    </section>
    <section class="md-main">
      <div>
        <slot name="article_data"></slot>
        {{ articl_info["articl_data"] }}
      </div>
    </section>
  </div>
</template>

<script setup></script>

<script>
export default {
  props: ["articl_info"],
};
</script>
