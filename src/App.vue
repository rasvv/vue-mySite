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

.row
  justify-content: space-around

.buttons
  display: flex
  justify-content: space-between
  margin-bottom: 10px  

.cardlink 
  display: block
  height: 100%
  text-decoration: none
  background-color: #eee

.v-card
  transition: 0.4s
  margin: 10px 0
  padding: 5px

  &:hover
    transform: scale(1.03)
    transition: 0.4s

.backgrounding
  background-color: #ddd
  
.v-image__image
  // background-color: #ddd
  border: 1px solid #ddd

.full-picture
   position: fixed
   width: 100vw
   height: 100vh
   left: 0
   top: 0
   z-index: 999
   background-color: #fff


</style>
