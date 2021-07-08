import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const router = new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			redirect: '/vue-mysite'
		},
		{
      path: '/vue-mysite',
      name: 'main',
      component: () => import('../pages/MainForm.vue')
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
		}
	]
})

export default router