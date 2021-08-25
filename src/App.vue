<template>
  <v-app
    class="d-flex justify-center"
  >
    <Header />
    <v-main>
      <router-view />
    </v-main>
    <Footer />
  </v-app>

</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
// import MainPage from './components/MainPage.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang='sass'>
#app 
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  /* margin-top: 60px; */

.v-application--wrap 
  min-height: 80vh

.v-main 
  min-height: calc(100vh - 116px)
  align-items: center
  
</style>
