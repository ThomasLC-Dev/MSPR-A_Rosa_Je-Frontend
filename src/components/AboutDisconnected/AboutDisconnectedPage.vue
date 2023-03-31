<template>
	<div class="main-container">
		<div class="explanationContent">
			<h1>A’Rosa-je, c’est quoi ?</h1>

			<section class="section">
				<div class="leftImage">
					<img src="@/assets/Plante/Plante_8.webp" alt="" class="imgPlantExplanation">
				</div>

				<p class="sectionContent">
					L’entreprise “A’rosa-je” aide les particuliers à prendre soin de leurs plantes.
					Fondée en 1984 elle a tout d’abord été composée d’une petite équipe de botanistes dans une
					seule
					ville et est maintenant composée de plus de 1500 botanistes répartis sur toute la France qui
					rendent service aux propriétaires de plantes de deux façons :
					<br>
					• En allant garder leurs plantes lorsque les propriétaires sont absents
					<br>
					• En prodiguant des conseils d’entretien afin que les propriétaires s’occupent de mieux en
					mieux
					de leurs plantes.
				</p>

				<div class="rightImage">
					<img src="@/assets/Plante/Plante_9.jpg" alt="" class="imgPlantExplanation_2">
				</div>
			</section>
		</div>

		<div class="steps">
			<div>
				<img src="@/assets/Plante/Plante_3.jpeg" alt="" class="imgPlantExplanation_3">
			</div>
			<div>
				<ul class="stepList">
					<textImg :number="1" :textStep="textStep1"> </textImg>
					<textImg :number="2" :textStep="textStep2"> </textImg>
					<textImg :number="3" :textStep="textStep3"> </textImg>
					<textImg :number="4" :textStep="textStep4"> </textImg>
					<textImg :number="5" :textStep="textStep5"> </textImg>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import textImg from "./DetailStep.vue";
export default {
	name: 'AboutDisconnectedPage',
	components: {
		textImg,
	},
	data() {
		return {
			textStep1: "Inscrivez-vous !",
			textStep2: "Renseignez vos informations !",
			textStep3: "Enregistrez votre plante. (N’oubliez pas de décrire ses besoins ou problèmes !)",
			textStep4: "Renseignez vos créneaux de disponibilités !",
			textStep5: "Plus qu’à attendre !(Un gardien se portera volontaire en fonction de vos créneaux.)",
		}
	}
}
</script>

<style>
.main-container {
	align-self: center;
	background-color: var(--menu-button-pipe);
	height: fit-content;
	display: flex;
	flex-direction: column;
	height: 100vh;
}

.Title {
	margin-top: -50px;
	align-items: center;
}

section {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin-top: 60px;
	box-sizing: border-box;
	width: 100%;
	float: left;
}

.sectionContent {
	text-align: justify;
	margin: 10px;
	font-size: x-large;
}

.leftImage,
.rightImage {
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 5px auto;
}

.explanationContent {
	display: block;
}

.imgPlantExplanation {
	display: block;
	width: 200px;
	height: 200px;
	padding: 10px;
	margin: 10px;
	top: 0px;
	right: 0px;
	bottom: 0px;
	left: 0px;
	margin: 0 0 0 15px;
}

.imgPlantExplanation_2 {
	width: 250px;
	align-self: center;
	margin: 10px;
}

.steps {
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	gap: 50px;
	margin-top: 50px;
}

.imgPlantExplanation_3 {
	display: flex;
	width: 400px;
}

.stepList {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding-top: 10px;
	border-radius: 50px;
	border: 2px solid green;
	width: 400;
	height: 320px;
	margin-left: auto;
	margin-right: auto;
	background-color: var(--main-bg-color);
	box-shadow: 10px 5px 5px darkolivegreen;
}

@media (max-width : 1000px) {
	.Title {
		margin: auto;
		padding: auto;
		align-self: center;
	}

	section {
		flex-direction: column;
	}


	.imgPlantExplanation_2 {
		display: none;
	}

	.imgPlantExplanation_3 {
		width: 300px;
	}

	.steps {
		flex-direction: column;
	}

	.stepList {
		height: 380px;
	}

	.explanationContent {
		display: flex;
		flex-direction: column;
		margin-top: 10%;
	}
}
</style>