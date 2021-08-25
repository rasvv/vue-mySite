import Vue from 'vue'
import Vuex from 'vuex'

// import sitesJson from './sites.json'
// import photosJson from './photos.json'

Vue.use(Vuex)

export default new Vuex.Store({
	data () {

	},
	state: {
		album: 'links',
		photoCurrentPage: [],
		cols: 'auto',
		mySitesJson: [
			{
				title: 'Полиграфия "ИКСО"', 
				src: require('../assets/img/sites/ikso-logo.png'), 
				description: 'Одностраничный сайт. Написан на html, css и JavaScript.', 
				link: 'https://ikso.info/'
			},
			{
				title: 'Подсчет расходов', 
				src: require('../assets/img/sites/calculator.png'), 
				description: 'Двухстраничный сайт - результат изучения Vue JS. Предназначен для фиксирования ежедневных расходов.', 
				link: 'https://rasvv.github.io/vue-dashboard/'
			},
			{
				title: 'Tesla', 
				src: require('../assets/img/sites/tesla-logo.png'), 
				description: 'Одностраничный сайт. Написан на html, css и JavaScript.', 
				link: 'https://rasvv.github.io/Tesla/index.html'
			},
			{
				title: 'Спорттовары', 
				src: require('../assets/img/sites/logo-logo.png'), 
				description: 'Шаблон сайта спортивного интернет-магазина. Написан на html, css и JavaScript.', 
				link: 'https://rasvv.github.io/Logo-SASS/'
			}
		],
		// myPhotosJson: photosJson,


		myPhotosJson: [
			{
				title: "Даша", 
				src: require(`../assets/img/Dasha/1.jpg`), 
				link: "Dasha",
				count: 15
			},
			{
				title: "Вика", 
				src: require("../assets/img/Tory/Tory2/1.jpg"), 
				link: "Tory/Tory2",
				count: 16
			},
			{
				title: "Вика в студии", 
				src: require(`../assets/img/Tory/Tory1/1.jpg`), 
				link: "Tory/Tory1",
				count: 12
			},
			{
				title: "Разное", 
				src: require(`../assets/img/Other/6.jpg`), 
				link: "Other",
				count: 7
			}
		]
	},
	mutations: {
		setAlbum (state, payload) {
			state.album = payload
		},
		setPhotoCurrentPage (state, payload) {
			state.photoCurrentPage = payload
		}
	},
	actions: {
		updatePhotoCurrentPage ({ commit }, page) {
			return commit('setPhotoCurrentPage', page)
		},
		updateAlbum ({ commit }, album) {
			return commit('setAlbum', album)
		}
	},
	getters: {
		getAlbum: state => state.album,
		getPhotoCurrentPage: state => state.photoCurrentPage,
		getPhotosLinks: state => state.myPhotosJson,
		getSitesLinks: state => state.mySitesJson
	}
})