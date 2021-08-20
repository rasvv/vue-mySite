<template>
  <v-app
    class="d-flex justify-center"
  >
    <v-app-bar
      app
      flat
      class="d-flex justify-center dark primary white--text"
    >
      <v-btn color="primary" depressed :ripple="false" to="/vue-mysite">Главная</v-btn>
      <v-btn color="primary" depressed :ripple="false" to="/mysites">Мои разработки</v-btn>
      <v-btn color="primary" depressed :ripple="false" to="/photos">Фотографии</v-btn>
      <v-btn color="primary" depressed :ripple="false" to="/contacts">Контакты</v-btn>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
    <v-footer
      dark
      padless
    >
      <v-row
        justify="center"
        no-gutters
      >
        <v-btn
          v-for="link in links"
          :key="link"
          color="white"
          text
          rounded
          class="my-2"
        >
          {{ link }}
        </v-btn>
        <v-col
          class="primary py-4 text-center white--text"
          cols="12"
        >
          {{ new Date().getFullYear() }} — <strong>RasVV</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>

</template>

<script>
// import Header from './components/Header.vue'
// import MainPage from './components/MainPage.vue'

export default {
  name: 'App',
  components: {
    // MainPage
  }
}
</script>

<style >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

.v-application--wrap {
  min-height: 80vh;
}
.v-main {
  min-height: calc(100vh - 116px)
}
  
</style>
