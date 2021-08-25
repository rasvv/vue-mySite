<template>
  <v-footer
    dark
    padless
  >
    <v-row
      justify="center"
      no-gutters
    >
      <v-col
        class="primary py-4 text-center white--text"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <v-img
          class="d-inline-block text-center bordered"
          height="26"
          width="100"
          
          contain
          :src="require('../assets/img/Logo.png')"
        ></v-img>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {

}
</script>

<style lang='sass'>
  .bordered .v-image__image
    top: 5px
    margin: 0 auto
    border: none
    background-color: none
</style>