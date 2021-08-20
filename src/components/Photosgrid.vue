
<template>
  <v-row>
    <v-col
      v-for="n in photosCount"
      :key="n"
      class="d-flex child-flex"
      cols="3"
    >
      <v-img
        :src="require(`../assets/img/${path}/${n}.${extension}`)"
        :lazy-src="`${path}/${n}.${extension}`"
        aspect-ratio="1"
        class="grey lighten-2"
				height="371"
				width="371"
      >
        <template v-slot:placeholder>
          <v-row
            class="fill-height ma-0"
            align="center"
            justify="center"
          >
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </v-col>
  </v-row>
</template>

<script>
export default {
	data: () => ({
		photosCount: 15,
		path: 'Dasha',
		extension: 'jpg',
		cards: [
			{
				title: 'Полиграфия "ИКСО"', 
				src: require('../assets/img/sites/ikso-logo.png'), 
				description: 'Одностраничный сайт. Написан на html, css и JavaScript.', 
				link: 'https://ikso.info/'
			},
			{
				title: 'Подсчет расходов', 
				src: require('../assets/img/sites/calculator.png'), 
				description: 'Двухстраничный сайт - результат изучения Vue JS. Предназначен для фиксирования ежедневных расходов.', 
				link: 'https://rasvv.github.io/vue-dashboard/'
			},
			{
				title: 'Tesla', 
				src: require('../assets/img/sites/tesla-logo.png'), 
				description: 'Одностраничный сайт. Написан на html, css и JavaScript.', 
				link: 'https://rasvv.github.io/Tesla/index.html'
			},
			{
				title: 'Спорттовары', 
				src: require('../assets/img/sites/logo-logo.png'), 
				description: 'Шаблон сайта спортивного интернет-магазина. Написан на html, css и JavaScript.', 
				link: 'https://rasvv.github.io/Logo-SASS/'
			}
		]
	})
}
</script>

<style lang='sass'>

</style>