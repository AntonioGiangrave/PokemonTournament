import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueRouter from "vue-router";
import Vuex from "vuex";
import VueAxios from "vue-axios";

import storeData from "./store/index";

import TeamList from "./components/TeamList";

Vue.config.productionTip = false;

Vue.use(VueAxios, VueRouter);

const store = new Vuex.Store(storeData);

const routes = [
  {
    name: "index",
    path: "/",
    component: TeamList
  }
];

const router = new VueRouter({ mode: "history", routes: routes });

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
