<template>
  <v-card class="profile_card" max-width="400" color="#f5f5f5">
    <v-img class="mx-auto" height="150" width="150" id="card-img" src="src\components\img\pforile.png" cover>
    </v-img>
    <v-card-title>執筆者:dbd-fish</v-card-title>
    <v-card-text>
      <div>愛知県在住のエンジニア。</div>
      <div>webバックエンド業務をメインだが、フロントを担当したりインフラの資格があったりする。</div>
    </v-card-text>

    <v-card-actions>
      <v-btn color="orange" :to="{ path: 'profile' }">
        プロフィール詳細
      </v-btn>

    </v-card-actions>
  </v-card>
</template>

<style>
#card-img {
  height: 100px;
  border-radius: 50%;
  background-image: url("image.jpg");
  background-position: 54% 36%;
  margin: 1rem;
}

.profile_card {
  /* padding: 1rem; */
  margin-right: 1rem;
  margin-left: 1rem;
  margin-bottom: 1rem;
  margin-top: none;
}
</style>