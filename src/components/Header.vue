<template>
  <v-app
    class="d-flex justify-center"
  >
    <v-header class="header">
      <div class="container">
        <v-app-bar
          app
          flat
          class="d-flex justify-center"
        >
          <v-btn class="header__item" plain :ripple="false" to="index.html">Главная</v-btn>
          <v-btn class="header__item" plain :ripple="false" to="sites.html">Мои разработки</v-btn>
          <v-btn class="header__item" plain :ripple="false" to="photo-albums.html">Фотографии</v-btn>
          <v-btn class="header__item" plain :ripple="false" to="contacts.html">Контакты</v-btn>		
        </v-app-bar>
      </div>
    </v-header>	

  </v-app>

</template>

<script>
export default {

}
</script>

<style>

</style>