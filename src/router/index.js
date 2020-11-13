import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import store from '../store/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: function () {
		return import(/* webpackChunkName: "about" */ '../views/Register.vue')
	  }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: function () {
		return import(/* webpackChunkName: "about" */ '../views/Profile.vue')
	  },
	  meta: {
        requiresAuth: true
      }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  }
]




const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
	if (to.matched.some(record => record.meta.requiresAuth)) {
	  if (store.getters.isLoggedIn) {
		next()
		return
	  }
	  next('/')
	} else {
	  next()
	}
  })

export default router
