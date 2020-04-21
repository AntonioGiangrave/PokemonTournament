import Vue from "vue";
import VueRouter from "vue-router";

import TeamList from "./components/TeamList";
import TeamEdit from "./components/TeamEdit";

// Lazy loading (lazy-loaded when the route is visited)
// const Page404 = () => import(/* webpackChunkName: "Page404" */ '@/components/pages/404)
// const Page503 = () => import(/* webpackChunkName: "Page503" */ '@/components/pages/503)

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  linkExactActiveClass: "active",
  routes: [
    // {
    //   path: '*',
    //   name: 'Page404',
    //   component: Page404
    // },

    // {
    //   path: '*',
    //   name: 'Page503',
    //   component: Page503
    // },

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
  ]
});

router.beforeEach(async (to, from, next) => {
  next();
});

export default router;
