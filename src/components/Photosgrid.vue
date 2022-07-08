
<template>
  <div >
    <div class="buttons">
      <v-btn @click="onSetAlbum('links')" class="primary">Назад</v-btn>
      <v-btn @click="onSetAlbum('slides')" class="primary">Слайды</v-btn>
    </div>
    <v-img
      v-if="src !== ''"
      :src="src"
      :lazy-src="src"
      class="full-picture"
			max-height="74vh"
      contain
      @click="onClose"
    ></v-img>
    <v-row
      v-if="src === ''"
    >
      <v-col
        v-for="n in photosCount"
        :key="n"
        class="d-flex child-flex"
        cols="auto"
      >
        <v-img
          :src="require(`../assets/img/${path}/${n}.${extension}`)"
          :lazy-src="`${path}/${n}.${extension}`"
          class="lighten-2"
          height="371"
          width="371"
          contain
          @click="onClickPicture(require(`../assets/img/${path}/${n}.${extension}`))"
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
    counterClick: 0,
    src: ''
  }),
  computed: {
		...mapGetters([
			'getPhotoCurrentPage'
		])
	},
  methods: {
    onSetAlbum (album) {
      this.$emit('onSetAlbum', album)
      console.log(album);
      // if (this.path === 'Hockey') {
      //   this.$router.push('/vue-mysite')
      // } 
    },
    onGetPhotoCurrentPage () {
      console.log(this.getPhotoCurrentPage);
      this.photosCount = this.getPhotoCurrentPage.count
      this.path = this.getPhotoCurrentPage.link
    },
    onClickPicture(src) {
      this.src = src
    },
    onClose() {
      this.src = ''
    }
  },
  mounted() {
    this.onGetPhotoCurrentPage()
  }
}
</script>

<style lang='sass'>
// .buttons
//   display: flex
//   justify-content: space-between
//   margin-bottom: 10px

// .slides
//   //  position: absolute

// .full-picture
//    position: fixed
//    width: 100vw
//    height: 100vh
//    left: 0
//    top: 0
//    z-index: 999
//    background-color: #fff
</style>