<template>
  <v-container>
    <v-row dense>
      <v-col cols="12">
        <v-card color="#385F73" dark>
          <v-card-title class="text-center">
            Программирование
          </v-card-title>

          <v-card-subtitle>
            Программированием увлекаюсь со школы, знаю несколько языков
            программирования. Приходилось писать на Delphi, Basic, Pascal и даже
            на AutoLisp. Много работал с базами данных. В арсенале опыт работы с
            MS Access, Firebird, Oracle, MSSQL, MySQL. Дополнительно закончил
            обучение на факультете "Frontend-разработки" в образовательном
            центре
            <a target="blank" href="https://geekbrains.ru">GeekBrains</a>.
            Изучил язык разметки HTML и язык таблиц стилей CSS. Интенсивно
            изучаю JavaScript. Освоил фреймворки: VueJS и ReactJS. Осуществлял
            верстку интерфейса, разрабатываемого на Angular. С моими проектами
            можно ознакомиться на этом сайте.
            <v-card-actions class="d-flex justify-center align-end">
              <v-btn to="/mysites">
                <!-- <router-link to="/mysites">здесь</router-link>                 -->
                Проекты
              </v-btn>
            </v-card-actions>
          </v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
    <v-row dense>
      <v-col cols="12">
        <v-card color="#116062" dark>
          <v-card-title>
            Фотография
          </v-card-title>

          <v-card-subtitle>
            Я очень люблю фотографировать. На творческие успехи меня всегда
            вхохновляли мои дочери. Их фотографии и еще кое-что вы также найдете
            на этом сайте .
            <v-card-actions class="d-flex justify-center">
              <v-btn @click="onSetAlbum(getPhotosLinks)" to="/photos">
                <!-- <router-link to="/mysites">здесь</router-link>                 -->
                Фотографии
              </v-btn>
            </v-card-actions>
          </v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
    <v-row dense>
      <v-col cols="12">
        <v-card color="#425169" dark>
          <v-card-title>
            Поделки
          </v-card-title>
          В свободное время люблю мастерить что-либо из металла или дерева.
          Сварил несколько печей для бань или гаражей. Также делаю монгалы. На
          фотографиях этапы изготовления.
          <v-card-subtitle class="d-flex justify-center mt-1">
            <v-card-actions>
              <v-btn @click="onSetAlbum(getHandmadeLinks)" to="/handmade">
                <!-- <router-link to="/mysites">здесь</router-link>                 -->
                Поделки
              </v-btn>
            </v-card-actions>
          </v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
    <v-row dense>
      <v-col cols="12">
        <v-card color="#3b444b" dark>
          <v-card-title>
            Спорт
          </v-card-title>

          <v-card-subtitle>
            Еще я увлекаюсь <a @click="onChangePage">хоккеем</a> - игрой,
            которая, по моему мнению является самой командной. "В хоккей играют
            настоящие мужчины - трус не играет в хоккей!" В этих строках звучит
            главный посыл к игрокам и эта песня не зря стала гимном
            замечательной игры.
            <v-card-actions class="d-flex justify-center">
              <v-btn @click="onSetAlbum(getHobbyLinks)" to="/hobby">
                <!-- <router-link to="/mysites">здесь</router-link>                 -->
                Спорт
              </v-btn>
            </v-card-actions>
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
    onChangePage() {
      this.updateView("grid");
      this.$router.push("/photos");
    },
    onSetAlbum(album) {
      this.updateAlbum(album);
      this.updateView("links");
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
