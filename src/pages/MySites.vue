<template>
<v-container
	fluid
  class="d-flex justify-center"
>
	<v-row dense>
		<v-col
			v-for="card in cards"
			:key="card.title"
			:cols="card.flex"
		>
			<v-card
				height="500px"
			>
				<a 
					:href="card.link"
				>
					<v-title v-text="card.title"></v-title>	
					<v-img
						:src="card.src"
						position="center center"
						height="250px"
						width="350px"
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
		cards: [
			{
				title: 'Полиграфия "ИКСО"', 
				src: require('../assets/img/sites/ikso-logo.png'), 
				description: 'Одностраничный сайт. Написан на html, css и JavaScript.', 
				link: 'https://ikso.info/',
				flex: 3
			},
			{
				title: 'Подсчет расходов', 
				src: require('../assets/img/sites/calculator.png'), 
				description: 'Двухстраничный сайт - результат изучения Vue JS. Предназначен для фиксирования ежедневных расходов.', 
				link: 'https://rasvv.github.io/vue-dashboard/',
				flex: 3
			},
			{
				title: 'Tesla', 
				src: require('../assets/img/sites/tesla-logo.png'), 
				description: 'Одностраничный сайт. Написан на html, css и JavaScript.', 
				link: 'https://rasvv.github.io/Tesla/index.html',
				flex: 3
			},
			{
				title: 'Спорттовары', 
				src: require('../assets/img/sites/logo-logo.png'), 
				description: 'Шаблон сайта спортивного интернет-магазина. Написан на html, css и JavaScript.', 
				link: 'https://rasvv.github.io/Logo-SASS/',
				flex: 3
			}

		]
	})
}
</script>

<style lang='sass'>
a 
	display: block
	height: 100%

.v-card
	transition: 0.4s

	&:hover
		transform: scale(1.025)
</style>