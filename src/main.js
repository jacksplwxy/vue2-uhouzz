import Vue from 'vue'
import VueResource from 'vue-resource'
import router from './router/router.js'
import App from './App.vue'
import store from './store' //省略index.js
import echarts from 'echarts'

Vue.prototype.$echarts = echarts; 
Vue.use(VueResource);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})