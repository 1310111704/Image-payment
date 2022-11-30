import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
import axios from "axios";
Vue.prototype.$axios = axios

import api from './api/index.js';
Vue.prototype.$api = api
import 'element-ui/lib/theme-chalk/index.css';
import {
  MessageBox,
  Message,
  Notification,
  Icon
} from 'element-ui';
Vue.use(Icon);
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;
import loadingViewerVue from 'loading-view-vue'
Vue.use(loadingViewerVue)

import VueLazyload from "vue-lazyload";

Vue.use(VueLazyload);

//或者自定义配置插件
// let liadingimg = require("@/assets/image/loading.gif")
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: require("./assets/image/loading.gif"),
  loading: require("./assets/image/loading.gif"),
  attempt: 1
})
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
