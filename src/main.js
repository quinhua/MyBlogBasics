import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'font-awesome/css/font-awesome.css';
import "../node_modules/@mdi/font/css/materialdesignicons.min.css"
import "./assets/basics/animate"
import "./assets/iconfont/iconfont.css"
import axios from 'axios'
import utils from "./utils/index"
import VueAxios from 'vue-axios'
import config from './assets/basics/config.js'

Vue.prototype.$config = config;
Vue.use(VueAxios, axios);
axios.defaults.baseURL = config.HOST;

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
