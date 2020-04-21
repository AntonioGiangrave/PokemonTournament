import Vue from "vue";
import Vuex from "vuex";
import http from "../http-common";
Vue.use(Vuex);
export default {
  state: {
    teams: []
  },
  getters: {
    getTeams(state) {
      return state.teams;
    },
    getVouchers(state) {
      return state.vouchers;
    },
    getCurrentCompany(state) {
      return state.currentCompany;
    }
  },

  actions: {
    getTeams(context) {
      const uri = "/team/list";
      http
        .get(uri)
        .then(response => {
          context.commit("teams", response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }
    // getCompanyVouchers(context, companyId) {
    //   context.commit("vouchers", []);

    //   const uri = `/vouchers/${companyId}`;

    //   http
    //     .get(uri)
    //     .then(response => {
    //       context.commit("vouchers", response.data.vouchers);
    //       context.commit("currentCompany", response.data.ragioneSociale);
    //     })
    //     .catch(error => {
    //       console.log(error);
    //     });
    // },
    // getVouchers(context) {
    //   context.commit("vouchers", []);
    //   const uri = `/vouchers`;

    //   http
    //     .get(uri)
    //     .then(response => {
    //       context.commit("vouchers", response.data);
    //     })
    //     .catch(error => {
    //       console.log(error);
    //     });
    // }
  },

  mutations: {
    teams(state, data) {
      return (state.teams = data);
    }
  }
};
