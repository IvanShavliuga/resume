import Vue from 'vue'
import store from './store'
//import Axios from 'axios'
import App from './App.vue'
import './assets/css/style.less'
import './assets/css/tablet.css'
import './assets/css/mobile.css'
import './assets/css/print.css'
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
  mounted() {
    this.$store.dispatch('initData')
  }
}).$mount('#app')
