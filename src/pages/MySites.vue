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
					target="blank"
					:href="card.link"
				>
					<v-card-title v-text="card.title" class="text-h5"></v-card-title>	
					<v-img
						class="backgrounding"
						:src="require(`@/${card.src}`)"
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
import {mapGetters} from 'vuex'

export default {
	data: () => ({
		cols: 'auto',
		cards: []
	}),
	computed: {
		...mapGetters([
			'getSitesLinks'
		]),
	},
	methods: {
		onGetSitesLinks () {
			this.cards = this.getSitesLinks
		}
	},
	mounted() {
		this.onGetSitesLinks()
	}
}
</script>

<style lang='sass'>



</style>