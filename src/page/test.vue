
<template>
  <v-app class="main">
    <v-app-bar color="primary">
      <v-app-bar-title>
        Application
      </v-app-bar-title>
    </v-app-bar>
    <v-navigation-drawer location="left">
      <v-list>
        <adsense_card />
      </v-list>
    </v-navigation-drawer>
    <v-navigation-drawer location="right">
      <v-list>
        <profile_card />
      </v-list>
    </v-navigation-drawer>
    <v-main heidht="50em">
      <v-container>
        <v-sheet min-height="20em">
          Main Contents
          <br>
          <br>
          <br><br>v<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
        </v-sheet>
      </v-container>
    </v-main>

    <v-footer dark color="teal-lighten-2" class="com_fotter" height="50px" min-width="10000px">
      <!-- <div class="flex-grow-1"></div> -->
      <div>&copy; 2023 - {{ new Date().getFullYear() }} dbd-fishのブログ</div>
    </v-footer>
  </v-app>
</template>

<script>
import resume_md from "@/components/markdown/resume.md";
import profile_card from "@/components/profile_card.vue";
import adsense_card from "@/components/adsense_card.vue";
import com_footer from "@/components/footer.vue";


export default {
  components: {
    resume_md,
    profile_card,
    adsense_card,
    com_footer,
  },
}
</script>

<style scoped>
:deep(.md) {
  color: red;
}

footer {
  padding: 0;
  background-color: black;
}

.main {
  color: black;
  background-color: black;
  width: 10000000000000px;
  padding: -10000px;
  margin: 0px;

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