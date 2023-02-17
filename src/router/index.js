import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/AboutDisconnectedView.vue")
  },
  {
    path: "/profil",
    name: "profil",
    component: () => import("@/views/ProfilView.vue")
  },
  {
    path: "/plants",
    name: "plants",
    component: () => import("@/views/PlantsView.vue")
  },
  {
    path: "/botanist",
    name: "botanist",
    component: () => import("@/views/BotanistView.vue")
  },
  {
    path: "/keeper",
    name: "keeper",
    component: () => import("@/views/KeeperView.vue")
  },
  {
    path: "/connection",
    name: "connection",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ConnectionView.vue"),
  },
  {
    path: "/register",
    name: "register",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/RegisterView.vue"),
  },
  {
    path: "/rgpd",
    name: "rgpd",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/RGPDView.vue"),
  },
  {
    path: "/legals",
    name: "legals",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/LegalsView.vue"),
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
