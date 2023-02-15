<template>
  <div class="navbar">
    <transition name="slide">
      <div v-if="isPanelOpen" class="sidebar-panel">
        <div class="LogoAccueil">
          <div class="ImgLogo">
            <img src="../../assets/Logo/LOGOAPP.png" alt="" class="imgSideBar" />
          </div>
          <div class="titreLogo">
            <h1>A'rosa'ge</h1>
          </div>
        </div>
        <div class="ButtonsMenu">
          <ButtonMenu :name="About" :imgLink="ImgAbout"></ButtonMenu>
          <ButtonMenu :name="Profile" :imgLink="ImgMyPlants"></ButtonMenu>
          <ButtonMenu :name="MyPlants" :imgLink="ImgAbout"></ButtonMenu>
          <ButtonMenu :name="PlantKeeper" :imgLink="ImgAbout"></ButtonMenu>
          <ButtonMenu :name="Botanist" :imgLink="ImgAbout"></ButtonMenu>
          <ButtonMenu :name="LogOut" :imgLink="ImgAbout"></ButtonMenu>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import ButtonMenu from "./Composants/ButtonMenu.vue"
  components: {
    ButtonMenu,
  },
  props: {
    isPanelOpen: Boolean,
  },
  data: () => ({
    About: "A propos",
    Profile: "Mon profil",
    MyPlants: "Mes plantes",
    PlantKeeper: "Gardien",
    Botanist: "Botaniste",
    LogOut: "Deconnexion",

    ImgAbout: `Logo/Logo_1.png`,

    ImgProfile: "Mon profil",
    ImgMyPlants: "Plante/Plante_7.png",
    ImgPlantKeeper: "Gardien",
    ImgBotanist: "Botaniste",
    ImgLogOut: "Deconnexion",
  }),
  methods: {
    closeOpenSidebarPanel() {
      this.isPanelOpen = !this.isPanelOpen;
    },
  },
};
</script>
<style>
.sidebar-panel {
  overflow-y: auto;
  background-color: var(--menu-background);
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  z-index: 999;
  width: 300px;
  display: flex;
  flex-direction: column;
  padding: 0%;
  margin: 0%;
}

.LogoAccueil {
  display: flex;
  align-items: center;
  margin-bottom: 10%;
  margin: 0;
  padding-top: 5%;
  padding-left: 5%;
  padding-bottom: 10%;
  background-color: var(--menu-logo-background);
}

.imgSideBar {
  max-width: 80%;
  height: auto;
}

.titreLogo {
  color: white;
  text-align: center;
  padding-right: 20%;
}

.ButtonsMenu {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-content: center;
}

/* Transitions menu */
.slide-enter-active {
  transition: transform 0.2s ease;
}

.slide-leave-active {
  transition: transform 0.2s ease;
}

.slide-enter {
  transform: translateX(100%);
}

.slide-leave-to {
  transform: translateX(-100%);
  transition: all 150ms ease-in 0s;
}
</style>
