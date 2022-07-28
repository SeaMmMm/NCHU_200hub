import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import * as NetlifyIdentityWidget from "netlify-identity-widget";
import GoTrue from "gotrue-js";

Vue.config.productionTip = false;

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

NetlifyIdentityWidget.init();

export const auth = new GoTrue({
  APIUrl: " https://nchu200hub.netlify.app/.netlify/identity",
  setCookie: true,
});

Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
