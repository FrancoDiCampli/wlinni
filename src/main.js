import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Styles
import "@/assets/css/tailwind.css";
import HeaderNav from './components/HeaderNav'
import Footer from './components/Footer'
Vue.component('header-nav', HeaderNav);
Vue.component('footer-all', Footer);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
