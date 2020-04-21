// window.Vue = require("vue");
import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import Vuex from "vuex";

import router from "./router";

import storeData from "./store/index";

Vue.config.productionTip = false;

const store = new Vuex.Store(storeData);

new Vue({ vuetify, router, store, render: h => h(App) }).$mount("#app");
