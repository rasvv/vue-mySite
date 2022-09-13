<template>
  <v-app height="100vh" class="d-flex justify-center">
    <Header />
    <v-main>
      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
// import MainPage from './components/MainPage.vue'

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="sass">
#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  overflow: auto
  text-align: center
  color: #2c3e50

  /* margin-top: 60px; */

.v-application--wrap
  min-height: 78vh

.avatar
  height: 50vh
  width: 20vw
  object-fit: contain
  text-align: center

.imgintext
  display: flex
  justify-content: space-around
  margin-bottom: 20px
  flex-wrap: wrap
  gap: 10px

.v-main
  // min-height: calc(100vh - 110px)
  align-items: center

.row
  justify-content: space-around

.buttons
  display: flex
  justify-content: space-between
  margin-bottom: 10px

.v-card
  overflow: hidden
  transition: .2s ease-in-out

.backgrounding
  background-color: #ddd

.bg
  background-color: #ddd
  border: 1px solid #ddd

.v-image
  transition: .2s ease-in-out
  &:hover
    transform: scale(1.05)

.full-picture
   position: fixed
   width: 100vw
   height: 100vh
   left: 0
   top: 0
   z-index: 999
   background-color: #fff

.text-h5
  background-color: rgba(#FFF, 0.4)
</style>
