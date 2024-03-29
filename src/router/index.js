import { createRouter, createWebHistory } from 'vue-router';
// import { isConnected } from "../../api.config";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/AboutDisconnectedView.vue"),
    meta: {
      requiredAuth: false,
    },
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/views/AboutConnectedView.vue"),
    meta: {
      requiredAuth: true,
    },
  },
  {
    path: "/connection",
    name: "connection",
    component: () => import("@/views/ConnectionView.vue"),
    meta: {
      requiredAuth: false,
    },
  },
  {
    path: "/profil",
    name: "profil",
    component: () => import("@/views/ProfilView.vue"),
    meta: {
      requiredAuth: true,
    },
  },
  {
    path: "/plants/:data?",
    name: "plants",
    component: () => import("@/views/PlantsView.vue"),
    props: true,
    meta: {
      requiredAuth: true,
    },
  },
  {
    /** Ajouter une plante */
    path: "/plants/add-a-new-plant",
    name: "addnewplants",
    component: () => import("@/views/AddNewPlantsView.vue"),
    meta: {
      requiredAuth: true,
    },
  },
  {
    /** Suivi du gardien */
    path: "/plants/guardian-tracking",
    name: "addnewguardiantracking",
    component: () => import("@/views/GuardianTrackingView.vue"),
    meta: {
      requiredAuth: true,
    },
  },
  {
    /** Demander un creneau de garde */
    path: "/plants/request-guard-slot",
    name: "requestguardslot",
    component: () => import("@/views/RequestGuardSlotView.vue"),
    meta: {
      requiredAuth: true,
    },
  },
  {
    /** Consulter les creneaux de garde */
    path: "/plants/user-slots",
    name: "userslots",
    component: () => import("@/views/UserSlotsView.vue"),
    meta: {
      requiredAuth: true,
    },
  },
  {
    path: "/camera",
    name: "camera",
    component: () => import("@/views/CameraView.vue"),
    meta: {
      requiredAuth: true,
    },
  },
  {
    path: "/botanist",
    name: "botanist",
    component: () => import("@/views/BotanistView.vue"),
    meta: {
      requiredAuth: true,
    },
  },
  {
    path: "/keeper",
    name: "keeper",
    component: () => import("@/views/KeeperView.vue"),
    meta: {
      requiredAuth: true,
    },
  },
  {
    path: '/keeper/PlantsKeep',
    name: 'PlantsKeep',
    component: () => import('@/views/PlantsKeep.vue'),
    meta: {
      requiredAuth: true
    }
  },
  {
    path: "/keeper/map",
    name: "map",
    component: () => import("@/views/MapView.vue"),
    meta: {
      requiredAuth: true,
    },
  },
  {
    path: "/register",
    name: "register",
    component: () => import("@/views/RegisterView.vue"),
    meta: {
      requiredAuth: false,
    },
  },
  {
    path: "/rgpd",
    name: "rgpd",
    component: () => import("@/views/RGPDView.vue"),
    meta: {
      requiredAuth: false,
    },
  },
  {
    path: "/legals",
    name: "legals",
    component: () => import("@/views/LegalsView.vue"),
    meta: {
      requiredAuth: true,
    },
  },
  {
    path: "/admin",
    name: "admin",
    component: () => import("@/views/AdminView.vue"),
    meta: {
      requiredAuth: true,
    },
  },
  {
    path: "/chatMessaging",
    name: "chatMessaging",
    component: () => import("@/views/ChatMessagingView.vue"),
    meta: {
      requiredAuth: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

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
