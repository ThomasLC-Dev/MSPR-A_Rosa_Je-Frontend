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
					<ButtonMenu :name="About" :imgLink="ImgAbout" @click="goToView(routeHome)"></ButtonMenu>
					<ButtonMenu :name="Profile" :imgLink="ImgProfile"  @click="goToView(routeProfil)"></ButtonMenu>
					<ButtonMenu :name="MyPlants" :imgLink="ImgMyPlants"  @click="goToView(routeMyPlants)"></ButtonMenu>
					<ButtonMenu :name="PlantKeeper" :imgLink="ImgPlantKeeper"  @click="goToView(routePlantKeeper)"></ButtonMenu>
					<ButtonMenu :name="Botanist" :imgLink="ImgBotanist"  @click="goToView(routeBotanist)"></ButtonMenu>
					<ButtonMenu :name="LogOut" :imgLink="ImgLogOut"  @click="goToView(routeHome)"></ButtonMenu>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
import ButtonMenu from "./ButtonMenu.vue";
export default {
	name: 'SidebarMenu',
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
		ImgProfile: "Logo/ConnexionLogo.png",
		ImgMyPlants: "Plante/Plante_7.png",
		ImgPlantKeeper: "Plante/Plante_5.png",
		ImgBotanist: "Logo/advice.png",
		ImgLogOut: "Logo/ConnexionLogout.png",

		routeHome: "home",
		routeProfil:"profil", 
		routeMyPlants:"plants",
		routePlantKeeper:"keeper", 
		routeBotanist:"botanist", 
		routeLogOut:""
	}),
	methods: {
		closeOpenSidebarPanel() {
			this.isPanelOpen = !this.isPanelOpen;
		},
		goToView(path){
			this.$router.push({name:path})

		}
	},
};
</script>

<style>
.sidebar-panel {

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
	overflow-y: auto;
	gap: 5px;
	display: flex;
	flex: 1;
	flex-direction: column;
	justify-content: space-evenly;
	align-content: center;
	color: var(----menu-background);
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
