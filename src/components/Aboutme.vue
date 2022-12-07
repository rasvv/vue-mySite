<template>
  <v-container>
    <v-row v-for="card in aboutmeJson" :key="card.title" dense>
      <v-col cols="12">
        <v-card
          :color="card.color"
          dark
          @click="setAlbum(card.getter, card.link)"
        >
          <v-card-title class="d-flex justify-center">
            {{ card.title }}
          </v-card-title>

          <v-card-subtitle v-for="sub in card.subtitle" :key="sub.id">
            {{ sub.text }}
          </v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
    <!-- <v-row dense>
      <v-col cols="12">
        <v-card color="#385F73" dark to="/mysites">
          <v-card-title class="d-flex justify-center">
            Программирование
          </v-card-title>

          <v-card-subtitle>
            Программированием увлекаюсь со школы, знаю несколько языков.
            Приходилось писать на Delphi, Basic, Pascal, C#, Python и даже на
            AutoLisp. Много работал с базами данных. В арсенале опыт работы с MS
            Access, Firebird, Oracle, MSSQL, MySQL, Postgree. Дополнительно
            закончил обучение на факультете "Frontend-разработки" в
            образовательном центре GeekBrains. Изучил язык разметки HTML и язык
            таблиц стилей CSS. Интенсивно изучаю JavaScript. Освоил фреймворки:
            VueJS и ReactJS. Осуществлял верстку интерфейса, разрабатываемого на
            Angular. С моими проектами можно ознакомиться на этом сайте.
          </v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
    <v-row dense>
      <v-col cols="12">
        <v-card
          color="#116062"
          dark
          @click="setAlbum(getPhotosLinks, '/photos')"
        >
          <v-card-title class="d-flex justify-center">
            Фотография
          </v-card-title>

          <v-card-subtitle>
            Я очень люблю фотографировать. На творческие успехи меня всегда
            вхохновляли мои дочери. Их фотографии и еще кое-что вы также найдете
            на этом сайте .
          </v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
    <v-row dense>
      <v-col cols="12">
        <v-card
          color="#425169"
          dark
          @click="setAlbum(getHandmadeLinks, '/handmade')"
        >
          <v-card-title class="d-flex justify-center">
            Поделки
          </v-card-title>

          <v-card-subtitle class="d-flex justify-center mt-1">
            В свободное время люблю мастерить что-либо из металла или дерева.
            Сварил несколько печей для бань или гаражей. Также делаю монгалы. На
            фотографиях этапы изготовления.
          </v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
    <v-row dense>
      <v-col cols="12">
        <v-card color="#3b444b" dark @click="setAlbum(getHobbyLinks, '/hobby')">
          <v-card-title class="d-flex justify-center">
            Увлечения
          </v-card-title>

          <v-card-subtitle>
            <v-card-subtitle dark>
              Еще я увлекаюсь хоккеем - игрой, которая, по моему мнению является
              самой командной. "В хоккей играют настоящие мужчины - трус не
              играет в хоккей!" В этих строках звучит главный посыл к игрокам и
              эта песня не зря стала гимном замечательной игры.
            </v-card-subtitle>
            <v-card-subtitle>
              В 2021 году я впервые понырял с аквалангом - это были незабываемые
              впечатления
            </v-card-subtitle>
            <v-card-subtitle>
              Я пять раз был на фестивалях молодых атомщиков, как в России, так
              и в Литве. О моих впечатлениях о поездке на Диснай-2005 можно
              прочитать здесь
            </v-card-subtitle>
          </v-card-subtitle>
        </v-card>
      </v-col>
    </v-row> -->
  </v-container>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";

export default {
  data: () => ({
    basic: require("@/assets/icon/Basic.jpg"),
    birthday: "26.07.1975",
  }),

  methods: {
    ...mapActions(["updateAlbum", "updateView"]),
    setAlbum(album, page) {
      // this.updateAlbum(this.setGetter(album));
      this.updateAlbum(this.setGetter(album));
      // this.updateAlbum(this.getPhotosLinks);
      this.updateView("links");
      // this.setPath("/photos");
      this.setPath(page);
    },
    setPath(page) {
      this.$router.push(page);
    },
    setGetter(getter) {
      let album = {};
      switch (getter) {
        case "getPhotosLinks":
          album = this.getPhotosLinks;
          break;
        case "getHandmadeLinks":
          album = this.getHandmadeLinks;
          break;
        case "getHobbyLinks":
          album = this.getHobbyLinks;
          break;
      }
      return album;
    },
  },
  computed: {
    age() {
      return "47";
    },
    ...mapGetters(["getHobbyLinks", "getHandmadeLinks", "getPhotosLinks"]),
    ...mapState(["aboutmeJson"]),
  },
};
</script>

<style lang="sass">
.icon
  max-height: 20px
  max-width: 20px
  object-fit: contain
  text-align: center
</style>
