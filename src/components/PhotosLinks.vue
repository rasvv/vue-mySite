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
          width="300px"
          @click="onSetAlbum(card)"
        >
          <a 
            class="cardlink"
          >
            <v-card-title v-text="card.title"  class="text-h5"></v-card-title>	
            <v-img
              :src="require(`@/${card.src}`)"
              position="center center"
              height="320px"
              alt="logo"
              contain
            > </v-img>
          </a>
        </v-card>
      </v-col>
    </v-row>
    </v-container>
</template>


<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  props: {
    album: {
      type: String,
      default: ''
    }
  },
  data: () => ({

    // album: '',
    cols: 'auto',
    cards: []
  }),
  computed: {
    ...mapGetters([
      'getAlbum',
      // 'getPhotoCurrentPage',
      'getPhotosLinks',
      'getSitesLinks'
    ])
  },
  methods: {
    ...mapActions([
      'updatePhotoCurrentPage',
      'updateAlbum'
    ]),
    onGetAlbum () {
      this.album = this.getAlbum
    },
    onGetPhotosLinks () {
      this.cards = this.getPhotosLinks
      console.log(this.cards);
    },
    onSetAlbum (card) {
      this.$emit('onSetAlbum', 'grid')
      this.updatePhotoCurrentPage(card)
      // this.updateAlbum('grid')
      // props.album = 'grid'
    }		
  },
  mounted () {
    this.onGetPhotosLinks()
  }

}
</script>

<style lang='sass'>

</style>