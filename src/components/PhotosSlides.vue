<template>
  <div>
    <div class="buttons">
      <v-btn @click="onSetView('grid')" class="primary">Назад</v-btn>
    </div>
    <v-carousel

      height="78vh"
    >
      <v-carousel-item
        v-for="n in photosCount"
        :key="n"
        :src="require(`../assets/img/${path}/${n}.${extension}`)"
        reverse-transition="fade-transition"
        transition="fade-transition"
        width="95vw"
        max-height="72vh"
        contain
      ></v-carousel-item>       
    </v-carousel>

  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  data: () => ({
    photosCount: 0,
    cols: 'auto',
    path: '',
    extension: 'jpg',
  }),
  computed: {
		...mapGetters([
			// 'getView'
			'getPhotoCurrentPage'
		])
	},
  methods: {
    onSetView (view) {
      this.$emit('onSetView', view)
    },
    onGetPhotoCurrentPage () {
      console.log(this.getPhotoCurrentPage);
      this.photosCount = this.getPhotoCurrentPage.count
      this.path = this.getPhotoCurrentPage.link
      // this.extension = this.getPhotoCurrentPage.extension
    }
  },
  mounted() {
    this.onGetPhotoCurrentPage()
  }
}
</script>

<style lang='sass'>
  // .v-main__wrap
  //   max-width: 90vw

</style>