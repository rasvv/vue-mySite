<template>
  <div>
    <a class="header__item" href="index.html">Главная</a>
    <a class="header__item" href="sites.html">Мои разработки</a>
    <a class="header__item" href="photo-albums.html">Фотографии</a>
    <a class="header__item" href="contacts.html">Контакты</a>		
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
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
