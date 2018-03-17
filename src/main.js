// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResouce from '../node_modules/vue-resource'
import VueRouter from 'vue-router';

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(VueResouce)
new Vue({
  el: '#app',
  router,
  VueResouce,
  components: { App },
  template: '<App/>'
})
