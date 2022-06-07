import Vue from 'vue';
import utils from './conmon';
import axios from "./axios/axios"
import api from "./axios/index"

Vue.prototype.$utils = utils;
Vue.prototype.$axios = axios;
Vue.prototype.$api = api;
