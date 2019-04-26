import Vue from 'vue'
import App from './App.vue'
import wuss from './../packages/index'
import router from './router';
Vue.use(wuss)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
