import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from './store'
import Vuelidate from 'vuelidate';


 



require("@/assets/styles.css");

//Vue.prototype.$http = axios;

axios.defaults.baseURL = 'http://localhost:8000/api/'

Vue.use(Vuelidate);
//Vue.use(VeeValidate);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')


