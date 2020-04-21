// window.Vue = require("vue");
import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueRouter from "vue-router";
import Vuex from "vuex";

import storeData from "./store/index";

import TeamList from "./components/TeamList";
import TeamEdit from "./components/TeamEdit";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const store = new Vuex.Store(storeData);

const routes = [
  {
    name: "index",
    path: "/",
    component: TeamList
  },
  {
    name: "list",
    path: "/list",
    component: TeamList
  },
  {
    name: "create",
    path: "/create",
    component: TeamEdit
  }
];

const router = new VueRouter({ mode: "history", routes });

new Vue({ vuetify, router, store, render: h => h(App) }).$mount("#app");
// new Vue(Vue.util.extend({ vuetify, router, store }, App)).$mount("#app");
