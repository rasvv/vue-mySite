<template>
    <v-app-bar
      app
      flat
      class="d-flex justify-center dark primary white--text"
    >
      <v-btn color="primary" depressed :ripple="false" to="/vue-mysite">Главная</v-btn>
      <v-btn color="primary" depressed :ripple="false" to="/mysites">Мои проекты</v-btn>
      <v-btn color="primary" depressed :ripple="false" to="/photos">Фотографии</v-btn>
      <!-- <v-btn color="primary" depressed :ripple="false" to="/contacts">Контакты</v-btn> -->
    </v-app-bar>
</template>

<script>
export default {

}
</script>

<style>

</style>