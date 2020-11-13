  
import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'
import createPersistedState from "vuex-persistedstate";

import { getLocalUser } from '../config'

const user = getLocalUser();

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
	status : '',
	token: localStorage.getItem('token') || '',
	currentUser: user,
	isLoggedIn:!!user,
  },

  getters: {
	//isLoggedIn: state => !!state.token,
	isLoggedIn(state){
		return state.isLoggedIn;
	},
	authStatus: state => state.status,
	currentUser(state){
		return state.currentUser;
	}
  },

  mutations: {
	auth_request(state) {
		state.status = 'loading'
	  },
	  auth_success(state, token, user) {
		state.status = 'success'
		state.token = token
		state.currentUser = user
		state.isLoggedIn = true;
	  },
	  auth_error(state) {
		state.status = 'error'
	  },
	  logout(state){
		state.message = "You have been Logged out...";
  		localStorage.removeItem("user");
  		localStorage.removeItem("token");
		state.isLoggedIn = false;
		state.currentUser = null;
	},
  },

  actions: {
	  REGISTER: ({ commit }, payload) => {
		return new Promise((resolve, reject) => {
			//const url = 'register'
			axios.post("register", payload)
			.then(({data, status}) => {
				if(status === 200){
					resolve(true);
				}
			})
			.catch(error => {
				reject(error);
			})
		})
	  },
	  LOGIN: ({ commit }, user) => {
		return new Promise((resolve, reject) => {
			commit('auth_request')
			axios.post("login", user)
			.then(resp => {
				const token = JSON.stringify(resp.data.access_token)
				const user = JSON.stringify(resp.data.user)
				localStorage.setItem("token", token);
				localStorage.setItem("user", user);
				axios.defaults.headers.common['Authorization'] = token;
				commit('auth_success', user, token)
				resolve(resp);
			})
			.catch(err => {
				commit('auth_error')
				localStorage.removeItem('token')
				reject(err);
			});
		})
		},
		logout({ commit }) {
			return new Promise((resolve, reject) => {
			  commit('logout')
			  localStorage.removeItem('token')
			  delete axios.defaults.headers.common['Authorization']
			  resolve()
			})
		  }
	}
});