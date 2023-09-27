<template>
  <v-card id="profile-card" max-width="400">
    <v-img
      class="mx-auto"
      height="150"
      width="150"
      id="card-img"
      :src="profile_img"
      cover
    >
    </v-img>
    <v-card-title>執筆者:dbd-fish</v-card-title>
    <v-card-text>
      <div>愛知県在住のエンジニア。</div>
      <div>
        webバックエンド業務をメインとして活動中。<br />
        画面の修正やインフラ周りの仕様確認などもやったりします。<br />
        Javaのサブ講師など開発業務以外でも活動しています。<br />
      </div>
    </v-card-text>

    <v-card-actions>
      <v-btn color="orange" :to="{ name: 'my_profile' }">
        プロフィール詳細
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import profile_img from "@/components/img/profile.png";
</script>
