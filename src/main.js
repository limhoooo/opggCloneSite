import Vue from 'vue'
import store from './store/index.js';
import App from './App.vue'

Vue.config.productionTip = false
Vue.filter("makeComma", val => {
  return String(val).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
})
new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
