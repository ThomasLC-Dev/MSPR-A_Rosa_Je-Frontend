import { createRouter, createWebHistory } from 'vue-router'
import SidebarMenu from '../components/Menu/SidebarMenu.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    //component: HomeView
    component : SidebarMenu
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutConnectedView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutDisconnectedView.vue')
  },
  {
    path: '/botanist',
    name: 'botanist',
    component: () => import(/* webpackChunkName: "about" */ '../views/BotanistView.vue')
  },
  {
    path: '/connection',
    name: 'connection',
    component: () => import(/* webpackChunkName: "about" */ '../views/ConnectionView.vue')
  },
  {
    path: '/keeper',
    name: 'keeper',
    component: () => import(/* webpackChunkName: "about" */ '../views/KeeperView.vue')
  },
  {
    path: '/plants',
    name: 'plants',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/PlantsView.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProfilView.vue')
  },
  {
    path: '/register',
    name: 'register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/RegisterView.vue')
  },
  {
    path: '/rgpd',
    name: 'rgpd',
    component: () => import(/* webpackChunkName: "about" */ '../views/RGPDView.vue')
  },
  {
    path: '/users',
    name: 'users',
    component: () => import(/* webpackChunkName: "about" */ '../views/UsersView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
