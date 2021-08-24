
<template>
  <div>
    <v-btn @click="onSetAlbum()">Назад</v-btn>
    <v-row>
      <v-col
        v-for="n in photosCount"
        :key="n"
        class="d-flex child-flex"
        cols="auto"
      >
        <v-img
          :src="require(`../assets/img/${path}/${n}.${extension}`)"
          :lazy-src="`${path}/${n}.${extension}`"
          class="grey lighten-2"
          max-height="371"
          max-width="371"
          contain='true'
        >
          <template v-slot:placeholder>
            <v-row
              class="fill-height ma-0"
              align="center"
              justify="center"
            >
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
    </v-row>
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
			// 'getAlbum'
			'getPhotoCurrentPage'
		])
	},
  methods: {
    onSetAlbum () {
      this.$emit('onSetAlbum', 'links')
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

</style>