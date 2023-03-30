<template>
  <div class="main-content">
    <nav class="main-nav">
      <div class="logo"></div>
      <Burger :isOpen="SideBarOpen" @click="toggleBar()"></Burger>
      <Sidebar :key="$route.fullPath" :isPanelOpen="SideBarOpen || width > 1000"></Sidebar>
    </nav>
    <router-view class="page"></router-view>
  </div>
</template>
 
<script>
import Burger from './components/Menu/Burger.vue';
import Sidebar from './components/Menu/SidebarMenu.vue';

export default {
  name: 'app',
  components: {
    Burger,
    Sidebar
  },
  data() {
    return {
      SideBarOpen: false,
      width: window.innerWidth
    }
  },
  methods: {
    toggleBar() {
      this.SideBarOpen = !this.SideBarOpen
    }
  },
  created() {
    window.addEventListener("resize", () => { this.width = window.innerWidth })
  },
  destroyed() {
    window.removeEventListener("resize", () => { this.width = window.innerWidth })
  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

.logo {
  align-self: center;
  color: #fff;
  font-weight: bold;
  font-family: 'Lato'
}

ul.sidebar-panel-nav {
  list-style-type: none;
}

ul.sidebar-panel-nav>li>a {
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
  display: block;
  padding-bottom: 0.5em;
}

.main-content {
  display: flex;
  flex-direction: row;
}

.page {
  background-color: var(--main-bg-color);
  width: calc(100% - 250px);
  height: 100vh;
  margin-left: 250px;
  overflow-x: hidden;
  padding: 20px;
}

.background-plant {
  background-image: url("@/assets/Plante/background-plant.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}

@media(max-width: 1000px) {
  .page {
    width: 100%;
    margin-left: 0px;
  }
}
</style>
