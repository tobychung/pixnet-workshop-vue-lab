// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Meta from 'vue-meta'
import echarts from 'echarts'

import App from './App'
import store from './store/index'
import router from './router'
import BootstrapVue from 'bootstrap-vue'

// bootstrap
window.$ = window.jQuery = require('jquery')
window.Tether = require('tether')
require('bootstrap')
require('@/assets/css/bootstrap.min.css')
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// font-awesome
require('@/assets/css/font-awesome.min.css')


Vue.config.productionTip = false
Vue.prototype.$echarts = echarts


Vue.use(BootstrapVue);
Vue.use(Meta)

new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
