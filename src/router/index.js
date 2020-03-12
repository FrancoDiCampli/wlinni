import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Header from "../views/Header.vue";
import Navbar from "../views/Navbar.vue";
import Splash from "../views/Splash.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/header",
    name: "Header",
    component: Header
  },
  {
    path: "/nav",
    name: "Navbar",
    component: Navbar
  },
  {
    path: "/splash",
    name: "Splash",
    component: Splash
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
