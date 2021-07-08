<template>
  <v-app>
    <MainForm v-if="mainform"/>
    <MySites v-if="currentpage==='MainForm'" />
    <Photos v-if="photos" />
    <Contacts v-if="contacts" />    
  </v-app>
</template>

<script>
import MainForm from '../pages/MainForm.vue'
import MySites from '../pages/MySites.vue'
import Photos from '../pages/Photos.vue'
import Contacts from '../pages/Contacts.vue'
export default {
  name: 'Rasvv',
  components: {
    MainForm,
    MySites,
    Photos,
    Contacts
  },
  data () {
    return {
      currentpage: 'MainForm',
      mainform: true,
      mysites: false,
      photos: false,
      contacts: false
    }
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
