import { createRouter, createWebHistory } from "vue-router";
// import { isConnected } from "../../api.config";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/AboutDisconnectedView.vue"),
    meta: {
      requiredAuth: false
    }
  },
	{
		path: "/about",
		name: "about",
		component: () => import("@/views/AboutConnectedView.vue"),
		meta: {
			requiredAuth: true
		}
	},
  {
    path: "/profil",
    name: "profil",
    component: () => import("@/views/ProfilView.vue"),
    meta: {
      requiredAuth: true
    }
  },
  {
    path: "/plants",
    name: "plants",
    component: () => import("@/views/PlantsView.vue"),
    meta: {
      requiredAuth: true
    }
  },
  {
    path: "/botanist",
    name: "botanist",
    component: () => import("@/views/BotanistView.vue"),
    meta: {
      requiredAuth: true
    }
  },
  {
    path: "/keeper",
    name: "keeper",
    component: () => import("@/views/KeeperView.vue"),
    meta: {
      requiredAuth: true
    }
  },
  {
    path: "/connection",
    name: "connection",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ConnectionView.vue"),
    meta: {
      requiredAuth: false
    }
  },
  {
    path: "/register",
    name: "register",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/RegisterView.vue"),
    meta: {
      requiredAuth: false
    }
  },
  {
    path: "/rgpd",
    name: "rgpd",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/RGPDView.vue"),
    meta: {
      requiredAuth: false
    }
  },
  {
    path: "/legals",
    name: "legals",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/LegalsView.vue"),
    meta: {
      requiredAuth: true
    }
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// router.beforeEach((to, from, next) => {
//   if(to.matched.some((route) => route.meta.requiredAuth) && !isConnected()){
//     next({
//        path: '/connection'
//     })
//   }
//   else{
//     next()
//   }
// })

export default router;