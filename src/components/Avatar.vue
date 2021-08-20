<template>
	<v-container>
		<v-card>
			<v-img :src='imgsrc'></v-img>
		</v-card>
	</v-container>
</template>

<script>
export default {
	data: () => ({
		imgsrc: require('../assets/img/Avatar.jpg')
	})

}
</script>

<style lang='sass'>
.v-image 
	max-height: 75vh
	max-width: 38vw
	object-fit: contain
	text-align: center

.v-sheet.v-card:not(.v-sheet--outlined)
	border: none
	box-shadow: none

</style>