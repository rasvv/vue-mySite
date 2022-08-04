<template>
  <v-container
    fluid
    class="d-flex justify-space-around "
  >
    <template >
      <v-hover
        v-slot="{ hover }"
        open-delay="200"
        v-for="card in cards"
        :key="card.title"
      >		
        <v-card
          :elevation="hover ? 16 : 2"
          height="400px"
          max-width="300px"
          :href="card.link"
          :class="{ 'on-hover': hover }"
          target="blank"
        >
          <v-card-title v-text="card.title" class="text-h5"></v-card-title>	
          <v-img
            :src="require(`@/${card.src}`)"
            position="center center"
            height="250px"
            alt="logo"
            class="bg"
            contain
          >
          </v-img>
          <v-card-text v-text="card.description"></v-card-text>
        </v-card>
      </v-hover>
    </template>
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