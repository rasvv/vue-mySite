<template>
  <v-app-bar app flat class="d-flex justify-center dark primary white--text">
    <v-btn color="primary" depressed :ripple="false" to="/vue-mysite"
      >Обо мне</v-btn
    >
    <v-btn
      color="primary"
      depressed
      @click="onSetAlbum('mySitesLinks')"
      :ripple="false"
      to="/mysites"
      >проекты</v-btn
    >
    <v-btn
      color="primary"
      depressed
      @click="onSetAlbum(getPhotosLinks)"
      :ripple="false"
      to="/photos"
      >Фотографии</v-btn
    >
    <v-btn
      color="primary"
      depressed
      @click="onSetAlbum(getHobbyLinks)"
      :ripple="false"
      to="/hobby"
      >Увлечения</v-btn
    >
    <v-btn
      color="primary"
      depressed
      @click="onSetAlbum(getHandmadeLinks)"
      :ripple="false"
      to="/handmade"
      >Поделки</v-btn
    >
    <v-btn color="primary" depressed :ripple="false" to="/dysnai">Диснай</v-btn>
    <!-- <v-btn color="primary" depressed :ripple="false" to="/contacts">Контакты</v-btn> -->
  </v-app-bar>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getHobbyLinks", "getHandmadeLinks", "getPhotosLinks"]),
  },
  methods: {
    ...mapActions(["updateAlbum", "updateView"]),
    onSetAlbum(album) {
      this.updateAlbum(album);
      this.updateView("links");
    },
  },
};
</script>

<style></style>
