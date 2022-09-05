<template>
	<v-container>
		<v-card>
			<v-img class="avatar" :src='imgsrc'></v-img>
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


.v-sheet.v-card:not(.v-sheet--outlined)
	border: none
	box-shadow: none

</style>