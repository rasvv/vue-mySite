<template>
<v-container
	fluid
  class="d-flex justify-center"
>
	<PhotosLinks
		@onSetAlbum = 'onSetAlbum'
		v-if="album === 'links'"
	/>
  <Photosgrid
		@onSetAlbum = 'onSetAlbum'
		v-if="album === 'grid'"
	/>
	<PhotosSlides
		@onSetAlbum = 'onSetAlbum'
		v-if="album === 'slides'"
	/>
	<!-- <v-btn @click="onSetAlbum('links')">Refresh</v-btn> -->
  </v-container>
</template>

<script>
import PhotosLinks from '../components/PhotosLinks.vue'
import Photosgrid from '../components/Photosgrid.vue'
import PhotosSlides from '../components/PhotosSlides.vue'
import {mapGetters, mapActions} from 'vuex'


export default {
	components: {
		PhotosLinks,
		Photosgrid,
		PhotosSlides
	},
	data: () => ({
		album: '',
		cols: 'auto',
		cards: []
	}),
	computed: {
		...mapGetters([
			'getAlbum'
			// 'getPhotoCurrentPage'
		])
	},
	methods: {
		...mapActions([
			// 'updatePhotoCurrentPage',
			'updateAlbum'
		]),
		onSetAlbum (album) {
			this.album = album
			this.updateAlbum(album)
		},
		onGetAlbum () {
			this.album = this.getAlbum
			console.log('onGetAlbum: '+this.album);
		}
	},
	mounted() {
		this.onGetAlbum()
	},
	beforeUpdate() {
		// this.onGetAlbum()
	}
}
</script>

<style lang='sass'>


</style>