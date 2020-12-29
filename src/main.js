import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'

// Vue.forceUpdate()

//  Bootstrap
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import LightBootstrap from './light-bootstrap-main'
Vue.use(LightBootstrap)

// Vuex
import store from './store/store'

// Axios
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
Vue.axios.defaults.baseURL = 'http://localhost:8080/SpringIOT'

// Router
import VueRouter from 'vue-router'
import routes from './routes/routes'
Vue.use(VueRouter)
const router = new VueRouter({
  routes,
  linkActiveClass: 'nav-item active',
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash }
    } else {
      return { x: 0, y: 0 }
    }
  }
})

//   vue-apexcharts
import VueApexCharts from 'vue-apexcharts'
Vue.use(VueApexCharts)
Vue.component('apexchart', VueApexCharts)

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
