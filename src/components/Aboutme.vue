<template>
	<v-container>
		<p>
			Здравствуйте! Меня зовут <i><b>Валерий Рассолов</b></i>.
		</p>
		<p>
			Я программист со стажем, знаю несколько языков программирования. Приходилось писать на
			Delphi, Basic, Pascal и даже на AutoLisp. Много работал с базами данных. В арсенале опыт работы
			с MS Access, Firebird, Oracle, MSSQL, MySQL.
		</p>
		<p>
			Cовсем недавно я решил стать web-разработчиком. Для этого пошел учиться в образовательный центр
			<a target="blank" href="https://geekbrains.ru">GeekBrains</a>. Изучил
			язык разметки HTML и язык таблиц стилей CSS. Интенсивно изучаю JavaScript. Писал на фреймворках: Vue и React.
			С моими проектами можно ознакомиться <a href="/mysites">здесь</a>. 
		</p>
		<p>
			Я очень люблю фотографировать. На творческие успехи меня всегда вхохновляли мои дочери. Их <a
				href="/photos">фотографии</a> и еще кое-что вы найдете на этом сайте .
		</p>
		<p>
			Еще я увлекаюсь <a @click="onChangePage" >хоккеем</a> - игрой, которая, по моему
			мнению является самой командной. "В хоккей играют настоящие мужчины - трус не играет в хоккей!"
			В этих строках звучит главный посыл к игрокам и эта песня не зря стала гимном замечательной
			игры.
		</p>
	</v-container>
</template>



<script>
import {mapActions} from 'vuex'

export default {

	methods: {
		...mapActions([
			'updatePhotoCurrentPage',
			'updateAlbum'
		]),
		onChangePage() {
			this.updateAlbum('grid')
			this.updatePhotoCurrentPage(
				{
					title: "Хоккей}", 
					src: require(`../assets/img/Hockey/1.jpg`), 
					link: "Hockey",
					count: 3
				}
			)
			this.$router.push('/photos')
			// window.location.href = "/photos"
		}
	}

}
</script>

<style lang='sass'>
	a
		text-decoration: underline
</style>