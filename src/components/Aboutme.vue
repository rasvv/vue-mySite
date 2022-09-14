<template>
  <v-container>
    <v-row dense>
      <v-col cols="12">
        <v-card color="#385F73" dark to="/mysites">
          <v-card-title class="d-flex justify-center">
            Программирование
          </v-card-title>

          <v-card-subtitle>
            <p>
              Программированием увлекаюсь со школы, знаю несколько языков.
              Приходилось писать на Delphi, Basic, Pascal, C#, Python и даже на
              AutoLisp. Много работал с базами данных. В арсенале опыт работы с
              MS Access, Firebird, Oracle, MSSQL, MySQL, Postgree. Дополнительно
              закончил обучение на факультете "Frontend-разработки" в
              образовательном центре GeekBrains. Изучил язык разметки HTML и
              язык таблиц стилей CSS. Интенсивно изучаю JavaScript. Освоил
              фреймворки: VueJS и ReactJS. Осуществлял верстку интерфейса,
              разрабатываемого на Angular. С моими проектами можно ознакомиться
              на этом сайте.
            </p>
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
              <v-btn icon to="/dysnai"
                ><v-icon>mdi-hand-pointing-right</v-icon></v-btn
              >
            </v-card-subtitle>
          </v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data: () => ({
    basic: require("@/assets/icon/Basic.jpg"),
    birthday: "26.07.1975",
  }),

  methods: {
    ...mapActions(["updateAlbum", "updateView"]),
    setAlbum(album, page) {
      this.updateAlbum(album);
      this.updateView("links");
      this.setPath(page);
    },
    setPath(page) {
      this.$router.push(page);
    },
  },
  computed: {
    age() {
      return "47";
    },
    ...mapGetters(["getHobbyLinks", "getHandmadeLinks", "getPhotosLinks"]),
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
