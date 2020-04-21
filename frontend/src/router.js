import Vue from "vue";
import VueRouter from "vue-router";

import TeamList from "./components/TeamList";
import TeamEdit from "./components/TeamEdit";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  linkExactActiveClass: "active",
  routes: [
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
    },
    {
      name: "edit",
      path: "/edit/:id",
      component: TeamEdit
    }
  ]
});

router.beforeEach(async (to, from, next) => {
  next();
});

export default router;
