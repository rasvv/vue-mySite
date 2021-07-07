<template>
  <div id="app">
		<Header />
    <MainPage />
  </div>
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
