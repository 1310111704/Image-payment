import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../pages/HomeView.vue";
import login from "../pages/login";
import privacyPolicy from "../pages/privacyPolicy"
import serviceTerms from "../pages/serviceTerms"
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
  {
    path: "/privacyPolicy",
    name: "privacyPolicy",
    component: privacyPolicy,
  },
  {
    path: "/serviceTerms",
    name: "serviceTerms",
    component: serviceTerms,
  },
];

const router = new VueRouter({
  // mode: "history",
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

export default router;
