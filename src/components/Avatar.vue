<template>
  <v-container fill-height class="d-flex justify-center align-center">
    <h2>
      Здравствуйте! Меня зовут <i><b>Валерий Рассолов</b></i>
    </h2>
    <h3>Мне {{ age }} лет. Обо мне и моих интересах вы узнаете здесь</h3>
    <v-card>
      <v-img class="avatar" :src="imgsrc"></v-img>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    imgsrc: require("../assets/img/Avatar_RW.jpg"),
  }),
  computed: {
    age() {
      return "47";
    },
  },
};
</script>

<style lang="sass">


.v-sheet.v-card:not(.v-sheet--outlined)
	border: none
	box-shadow: none
</style>
