<template>
<v-container
	fluid
  class="d-flex justify-center"
>
	<v-row dense>
		
		<v-col
			v-for="card in cards"
			:key="card.title"
			:cols="cols"
		>
			<v-card
				height="400px"
				max-width="300px"
			>
				<a 
					class="cardlink"
					:href="card.link"
				>
					<v-title v-text="card.title" key="card.title" class="text-h5"></v-title>	
					<v-img
						:src="card.src"
						position="center center"
						height="250px"
						alt="logo"
						contain
					> </v-img>
					<v-card-text v-text="card.description"></v-card-text>
				</a>
			</v-card>
		</v-col>
	</v-row>
	<v-card
		class="mx-auto"
	>

	</v-card>
  
  </v-container>
</template>

<script>
export default {
	data: () => ({
		cols: 'auto',
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

.row
	justify-content: space-around


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
		transform: scale(1.025)


.v-image__image
	background-color: #ddd

</style>