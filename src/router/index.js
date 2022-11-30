import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../pages/HomeView.vue";
import login from "../pages/login";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: login,
  },
];

const router = new VueRouter({
  mode: "history",
  // mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

export default router;
