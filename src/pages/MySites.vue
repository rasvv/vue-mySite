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
				:to="card.link"
				height="500px"
			>
				<v-title v-text="card.title"></v-title>	
				<img
					:lazy-src="card.src"
					position="center center"
					height="250px"
					width="350px"
					alt="logo"
					contain
				>
				<v-img
					lazy-src="../assets/img/sites/ikso-logo.png"
					position="center center"
					height="250px"
					width="350px"
					alt="logo"
					contain
				> </v-img>
				<v-card-text v-text="card.description"></v-card-text>
			</v-card>
		</v-col>
	</v-row>
	<v-card
		class="mx-auto"
	>

	</v-card>
		<div class="main-body">
			MySites
		</div>
    
  </v-container>
</template>

<script>
export default {
	data: () => ({
		cards: [
			{
				title: 'Полиграфия "ИКСО"', 
				src: '../assets/img/sites/ikso-logo.png', 
				description: 'Одностраничный сайт. Написан на html, css и JavaScript.', 
				link: './https://ikso.info/',
				flex: 3
			},
			{
				title: 'Подсчет расходов', 
				src: './img/Sites/calculator.png', 
				description: 'Двухстраничный сайт - результат изучения Vue JS. Предназначен для фиксирования ежедневных расходов.', 
				link: 'https://rasvv.github.io/vue-dashboard/',
				flex: 3
			},
			{
				title: 'Tesla', 
				src: './img/Sites/tesla-logo.png', 
				description: 'Одностраничный сайт. Написан на html, css и JavaScript.', 
				link: 'https://rasvv.github.io/Tesla/index.html',
				flex: 3
			},
			{
				title: 'Спорттовары', 
				src: './img/Sites/logo-logo.png', 
				description: 'Шаблон сайта спортивного интернет-магазина. Написан на html, css и JavaScript.', 
				link: 'https://rasvv.github.io/Logo-SASS/',
				flex: 3
			}

		]
	})

}
</script>

<style>

</style>