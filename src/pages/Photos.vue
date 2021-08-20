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
					<v-title v-text="card.title"  class="text-h5"></v-title>	
					<v-img
						:src="card.src"
						position="center center"
						height="350px"
						alt="logo"
						contain
					> </v-img>
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
		album: '',
		
		cols: 'auto',
		cards: [
			{
				title: 'Даша', 
				src: require('../assets/img/Dasha/1.jpg'), 
				link: 'https://ikso.info/'
			},
			{
				title: 'Вика', 
				src: require('../assets/img/Tory/Tory1/1.jpg'), 
				link: 'https://rasvv.github.io/vue-dashboard/'
			},
			{
				title: 'Вика в студии', 
				src: require('../assets/img/Tory/Tory2/1.jpg'), 
				link: 'https://rasvv.github.io/Tesla/index.html'
			},
			{
				title: 'Разное', 
				src: require('../assets/img/Other/6.jpg'), 
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
	// background-color: #eee

.v-card
	transition: 0.4s
	margin: 10px 0
	padding: 5px


	&:hover
		transform: scale(1.025)


.v-image__image
	// background-color: #ddd

</style>