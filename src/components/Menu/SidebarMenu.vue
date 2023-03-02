<template>
	<div class="navbar">
		<transition name="slide">
			<div v-if="isPanelOpen" class="sidebar-panel" :style="{ display: isPanelOpen ? 'block' : 'none' }">
				<div class="LogoAccueil">
					<div class="ImgLogo">
						<img src="../../assets/Logo/LOGOAPP.png" alt="" class="imgSideBar" />
					</div>
					<div class="titreLogo">
						<h1>A'rosa'ge</h1>
					</div>
				</div>
				<div class="ButtonsMenu">
					<!-- Disconnected Buttons -->
					<div class="connected" v-if="connected">
						<!-- Connected Buttons -->
						<ButtonMenu :name="AboutCo" :imgLink="ImgAboutCo" @click="goToView(routeHomeCo)"></ButtonMenu>
						<ButtonMenu :name="Profile" :imgLink="ImgProfile" @click="goToView(routeProfil)"></ButtonMenu>
						<ButtonMenu :name="MyPlants" :imgLink="ImgMyPlants" @click="goToView(routeMyPlants)"></ButtonMenu>
						<ButtonMenu :name="PlantKeeper" :imgLink="ImgPlantKeeper" @click="goToView(routePlantKeeper)">
						</ButtonMenu>
						<ButtonMenu :name="Botanist" :imgLink="ImgBotanist" @click="goToView(routeBotanist)"></ButtonMenu>
						<ButtonMenu :name="LogOut" :imgLink="ImgLogOut" @click="goToView(routeHomeDisco)"></ButtonMenu>
						<ButtonMenu :name="Legals" :imgLink="ImgLegals" @click="goToView(routeLegals)"></ButtonMenu>
						<ButtonMenu :name="Rgpd" :imgLink="ImgRgpd" @click="goToView(routeRgpd)"></ButtonMenu>
						<ButtonMenu :name="LogOut" :imgLink="ImgLogOut" @click="disconnect()"></ButtonMenu>
					</div>
					<div class="disconnected" v-else>
						<ButtonMenu :name="AboutDisco" :imgLink="ImgAboutDisco" @click="goToView(routeHomeDisco)">
						</ButtonMenu>
						<ButtonMenu :name="Connection" :imgLink="ImgConnection" @click="goToView(routeConnection)">
						</ButtonMenu>
						<ButtonMenu :name="Register" :imgLink="ImgRegister" @click="goToView(routeRegister)"></ButtonMenu>
					</div>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
import ButtonMenu from './ButtonMenu.vue'
import { isConnected, removeToken } from '../../../api.config'

export default {
	name: 'SidebarMenu',
	components: {
		ButtonMenu
	},
	props: {
		isPanelOpen: Boolean
	},
	data: () => ({
		AboutDisco: 'Accueil',
		Connection: 'Connexion',
		Register: 'Inscription',
		AboutCo: 'A propos',
		Profile: 'Mon profil',
		MyPlants: 'Mes plantes',
		PlantKeeper: 'Gardien',
		Botanist: 'Botaniste',
		Legals: 'Mentions',
		Rgpd: 'RGPD',
		LogOut: 'Deconnexion',

		ImgAboutDisco: 'Logo/about.png',
		ImgConnection: 'Logo/connection.png',
		ImgRegister: 'Logo/register.png',
		ImgAboutCo: 'Logo/about.png',
		ImgProfile: 'Logo/profil.png',
		ImgMyPlants: 'Plante/Plante_7.png',
		ImgPlantKeeper: 'Logo/keeper.png',
		ImgBotanist: 'Logo/botanist.png',
		ImgLegals: 'Logo/about.png',
		ImgRgpd: 'Logo/about.png',
		ImgLogOut: 'Logo/disconnected.png',

		routeHomeDisco: 'home',
		routeConnection: 'connection',
		routeRegister: 'register',
		routeHomeCo: 'about',
		routeProfil: 'profil',
		routeMyPlants: 'plants',
		routePlantKeeper: 'keeper',
		routeBotanist: 'botanist',
		routeLegals: 'legals',
		routeRgpd: 'rgpd',
		routeLogOut: '',

		connected: isConnected
	}),
	methods: {
		closeOpenSidebarPanel() {
			this.isPanelOpen = !this.isPanelOpen
		},
		goToView(path) {
			this.$router.push({ name: path })
		},
        disconnect(){
            removeToken();
            this.connected = false;
            this.goToView(this.routeConnection);
        }
	},
	created() {
		this.connected = isConnected()
	}

}
</script>

<style>
.sidebar-panel {
	display: block;
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
	color: var(--menu-background);
}

/* Transitions menu */
.slide-enter-active {
	transition: transform 0.2s ease;
}

.slide-leave-active {
	transition: transform 0.2s ease;
}

.slide-enter-from {
	transform: translateX(-100%);
}

.slide-leave-to {
	transform: translateX(-100%);
}

@media(max-width: 1000px) {
	.sidebar-panel {
		display: none;
	}
}
</style>
