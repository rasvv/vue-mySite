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

<style>
.main__avatar {
	max-height: 100%;
	max-width: 100%;
	object-fit: contain;
}

</style>