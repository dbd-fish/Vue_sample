
<template>
  <someMarkdown resume_md />
</template>

<script>
import someMarkdown from "@/components/markdown/resume.md";

export default {
  components: {
    someMarkdown,
  },
  data() {
    return {
      tab: null,
      tab_list: [
        { tab_name: 'プロフィール', tab_path: 'profile' },
        { tab_name: '職務経歴', tab_path: 'resume' },
        { tab_name: `事業内容`, tab_path: 'service' },
        { tab_name: '仕事関連の記事', tab_path: 'job_article_list' },
        { tab_name: '趣味の記事', tab_path: 'private_article_list' },
        { tab_name: 'お問い合わせ', tab_path: 'request' },
      ],
    }
  },
}


</script>

<style scoped>
:deep(.md) {
  color: red;
}
</style>


<style >
/* table,
td,
th {
  border: 2px #000000 solid;
  border-collapse: collapse;
}

ul {
  padding-left: 20px;
} */
</style>