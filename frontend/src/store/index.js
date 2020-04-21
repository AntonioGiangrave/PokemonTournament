import Vue from "vue";
import Vuex from "vuex";
import http from "../http-common";
import router from "@/router.js";

Vue.use(Vuex);

export default {
  state: {
    teams: []
  },
  getters: {
    getTeams(state) {
      return state.teams;
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
    },
    postTeam(context, team) {
      const uri = "/team/create";

      http
        .post(uri, team)
        .then(() => {
          router.push("/");
        })
        .catch(error => {
          console.log(error, context);
        });
    },
    updateTeam(context, team) {
      const uri = `/team/${team._id}/edit`;

      http
        .put(uri, team)
        .then(() => {
          router.push("/");
        })
        .catch(error => {
          console.log(error, context);
        });
    }
  },

  mutations: {
    teams(state, data) {
      return (state.teams = data);
    }
  }
};
