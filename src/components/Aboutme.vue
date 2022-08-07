<template>
  <v-container>
    <h2>Здравствуйте! Меня зовут <i><b>Валерий Рассолов</b></i></h2>
    <v-row dense>
      <v-col cols="12">	
          <v-card
            color="#385F73"
            dark
          >
            <v-card-title class="text-h5">
              Опыт
            </v-card-title>

            <v-card-subtitle>
              Я программист со стажем, знаю несколько языков программирования.
              Приходилось писать на 
              <v-img src='@/assets/icon/Basic.jpg'></v-img> Delphi, 
              Basic, Pascal и даже на AutoLisp. Много
              работал с базами данных. В арсенале опыт работы с MS Access, Firebird,
              Oracle, MSSQL, MySQL.
            </v-card-subtitle>
          </v-card>
      </v-col>
    </v-row>	
    <v-row dense>
      <v-col cols="12">	
          <v-card
            color="#425169"
            dark
          >
            <v-card-title class="text-h5">
              Образование
            </v-card-title>

            <v-card-subtitle>
      Имею три высших образования: два технических и одно экономическое. 				
      Дополнительно закончил обучение на факультете "Frontend-разработки" в образовательном
      центре
      <a target="blank" href="https://geekbrains.ru">GeekBrains</a>. Изучил язык
      разметки HTML и язык таблиц стилей CSS. Интенсивно изучаю JavaScript.
      Освоил фреймворки: VueJS и ReactJS. Осуществлял верстку интерфейса,
      разрабатываемого на Angular. С моими проектами можно ознакомиться на этом сайте.
                  <v-card-actions>
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
          <v-card
            color="#116062"
            dark
          >
            <v-card-title class="text-h5">
              Увлечения
            </v-card-title>

            <v-card-subtitle>
      Я очень люблю фотографировать. На творческие успехи меня всегда
      вхохновляли мои дочери. Их фотографии и еще кое-что вы также 
      найдете на этом сайте .
                  <v-card-actions>
              <v-btn to="/photos">
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
          <v-card
            color="#3b444b"
            dark
          >
            <v-card-title class="text-h5">
              Спорт
            </v-card-title>

            <v-card-subtitle>
      Еще я увлекаюсь <a @click="onChangePage">хоккеем</a> - игрой, которая, по
      моему мнению является самой командной. "В хоккей играют настоящие мужчины
      - трус не играет в хоккей!" В этих строках звучит главный посыл к игрокам
      и эта песня не зря стала гимном замечательной игры.
                  <v-card-actions>
              <v-btn @click="onChangePage">
                <!-- <router-link to="/mysites">здесь</router-link>                 -->
                Хоккей
              </v-btn>
							
            </v-card-actions>
            </v-card-subtitle>
          </v-card>
      </v-col>
    </v-row>	    
  </v-container>
</template>



<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["updatePhotoCurrentPage", "updateView"]),
    onChangePage() {
      this.updateView("grid");
      // this.updatePhotoCurrentPage({
      //   title: "Хоккей}",
      //   src: require(`../assets/img/Hockey/1.jpg`),
      //   link: "Hockey",
      //   count: 3,
      // });
      this.$router.push("/photos");
      // window.location.href = "/photos"
    },
  },
};
</script>

<style lang='sass'>

</style>