<template>
  <v-app
		class="d-flex justify-center"
	>
    <v-app-bar
			app
			flat
			class="d-flex justify-center"
		>
      <v-btn plain :ripple="false" to="/MainForm">Главная</v-btn>
      <v-btn plain :ripple="false" to="/MySites">Мои разработки</v-btn>
      <v-btn plain :ripple="false" to="/Photos">Фотографии</v-btn>
      <v-btn plain :ripple="false" to="/Contacts">Контакты</v-btn>
      <!-- <v-btn plain :ripple="false" to="/404">404</v-btn> -->
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>

</template>

<script>
import Header from './components/Header.vue'
import MainPage from './components/MainPage.vue'

export default {
  name: 'App',
  components: {
		Header,
    MainPage

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
