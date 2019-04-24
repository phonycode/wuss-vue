import Vue from 'vue'
import App from './App.vue'
import wuss from './../packages/index'
Vue.use(wuss)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
