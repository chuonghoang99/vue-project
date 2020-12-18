import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import LightBootstrap from "./light-bootstrap-main";
import routes from "./routes/routes";
import store from "./store/store";
import "./registerServiceWorker";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
Vue.use(VueRouter);

Vue.use(LightBootstrap);

Vue.axios.defaults.baseURL = "http://localhost:8080/SpringIOT";
const router = new VueRouter({
  routes,
  linkActiveClass: "nav-item active",
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});

new Vue({
  el: "#app",
  render: h => h(App),
  router,
  store
});
