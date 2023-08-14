
<template>
  <v-app class="main">
    <v-app-bar color="primary">
      <v-app-bar-title>
        Application
      </v-app-bar-title>
    </v-app-bar>
    <!-- <v-navigation-drawer location="left" absolute>
      <v-list>
        <adsense_card />
      </v-list>
    </v-navigation-drawer>
    <v-navigation-drawer location="right" absolute>
      <v-list>
        <profile_card />
      </v-list>
    </v-navigation-drawer> -->
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
    <com_footer />
    <v-footer dark color="teal-lighten-2" class="com_fotter" height="50px" padless>
      <!-- <div class="flex-grow-1"></div> -->
      <div>&copy; 2023 - {{ new Date().getFullYear() }} dbd-fishのブログ</div>
    </v-footer>

  </v-app>
  <footer>aaa</footer>
</template>

<script>
import resume_md from "@/components/markdown/resume.md";
import profile_card from "@/components/profile_card.vue";
import adsense_card from "@/components/adsense_card.vue";
import com_footer from "@/components/com_footer.vue";


export default {
  components: {
    resume_md,
    profile_card,
    adsense_card,
    com_footer, com_footer,
  },
}
</script>

<style scoped>
:deep(.md) {
  color: red;
}

footer {
  background-color: black;
  min-width: 100000px;
  position: absolute;
  bottom: 0;

}

width: 960px;
margin: 0 auto;

.main {
  color: red;
  background-color: blue;
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