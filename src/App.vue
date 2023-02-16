<template>
  <div id="app">
    <nav class="main-nav">
      <div class="logo">
       
      </div>
      <Burger :isOpen ="SideBarOpen" @click="toggleBar()"></Burger>

    </nav>
    
  <router-view></router-view>
 
    <Sidebar :isPanelOpen="SideBarOpen"></Sidebar>
  </div>
</template>
 
<script>
import Burger from './components/Menu/Burger.vue';
import Sidebar from './components/Menu/SidebarMenu.vue';
export default {
  name: 'app',
  components: {
    Burger,
    Sidebar,
  }, 
  data() {
    return { 
      SideBarOpen : false
    }
  }, 
  methods: {
    toggleBar() {
      this.SideBarOpen = !this.SideBarOpen
    }
  } 
}
</script>

<style>
html {
    height: 100%;
    overflow:hidden;
} 
 
#app {
  width: 100%;
  height: auto;
  margin: 0 auto;
  background-image: url("assets/Plante/background-plant.jpg"); 
}

.logo {
  align-self: center;
  color: #fff;
  font-weight: bold;
  font-family: 'Lato'
}
 
.main-nav {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0.8rem;
}
 
ul.sidebar-panel-nav {
  list-style-type: none;
}
 
ul.sidebar-panel-nav > li > a {
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
  display: block;
  padding-bottom: 0.5em;
}
 </style>