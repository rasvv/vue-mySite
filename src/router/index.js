import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const router = new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			redirect: '/vue-mySite'
		},
		{
      path: '/vue-mySite',
      name: 'main',
      // component: () => import('../pages/MainForm.vue')
      component: () => import('../pages/Dysnai.vue')
		},
		{
      path: '/mysites',
      name: 'mysites',
      component: () => import('../pages/MySites.vue')
		},
		{
      path: '/contacts',
      name: 'contacts',
      component: () => import('../pages/Contacts.vue')
		},
		{
      path: '/photos',
      name: 'photos',
      component: () => import('../pages/Photos.vue')
		},
		{
      path: '/hobby',
      name: 'hobby',
      component: () => import('../pages/Photos.vue')
		},
		{
      path: '/handmade',
      name: 'handmade',
      component: () => import('../pages/Photos.vue')
		},
		{
      path: '/dysnai',
      name: 'dysnai',
      component: () => import('../pages/Dysnai.vue')
		},
		{
      path: '/vue-mySite/dysnai',
      name: 'dysnai',
      component: () => import('../pages/Dysnai.vue')
		},
		{
			path: '/vue-mySite/:queryParams(.*)',
			name: 'dysnai',
			component: () => import('../pages/Dysnai.vue'),
			props: true
		}
	]
})

export default router