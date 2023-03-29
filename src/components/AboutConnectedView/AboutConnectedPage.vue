<template>
	<div class="main-container">
		<div class="header">
			<div class="title">
				<img src="@/assets/Logo/about.png" alt="" class="imgLogo">
				<h1> Comment ça marche ? </h1>
			</div>
			<TextAndImg :img-link="lingImg_1" :titre="titreimg_1" :text="textimg_1" class="firstSection" />
		</div>

		<div class="contentPage">
			<div class="left">
				<ul class="list-articles">
					<li class="headerContent">
						<TextImgColumn :img-link="lingImg_3" :titre="titreimg_3" :text="textimg_3" />

					</li>
					<li class="headerContent">
						<TextImgColumn :img-link="lingImg_4" :titre="titreimg_4" :text="textimg_4" />

					</li>
				</ul>
			</div>

			<div class="right">
				<TextAndImgReverse :img-link="lingImg_2" :titre="titreimg_2" :text="textimg_2" />

				<div class="talkingPeople">
					<ul class="speechContent">
						<peopleRight :text="speechRight_1" />
						<peopleLeft :text="speechLeft_1" :speech-link="speechImg_Big" />
						<peopleRight :text="speechRight_2" />
						<peopleLeft :text="speechLeft_2" :speech-link="speechImg_Bigger" />

					</ul>
				</div>
			</div>

		</div>
	</div>
</template>

<script>
import TextAndImg from "./TextAndImg.vue"
import TextAndImgReverse from "./TextAndImgReverse.vue"
import TextImgColumn from "./TestImgColumn.vue"
import peopleLeft from "./LeftPeople.vue"
import peopleRight from "./RightPeople.vue"
export default {
	name: "AboutConnectedPage",
	components: {
		TextAndImg,
		TextAndImgReverse,
		TextImgColumn,
		peopleLeft,
		peopleRight

	},
	data: () => ({
		lingImg_3: "",

		lingImg_1: "Plante/Plante_4.png",
		titreimg_1: "Enregistre ta plante ! ",
		textimg_1: "Une fois inscrit et connecté, va dans la section “Mes plantes ” et inscris ta première plante ! ",

		lingImg_2: "Plante/Plante_6.jpg",
		titreimg_2: "Trouve ton gardien !",
		textimg_2: "Un gardien viendra te proposer de garder tes plantes, en fonction de ses créneaux disponibles ! Soit patient et attentifs à tes mails, évite de les laisser sans réponses !",

		lingImg_3: "Plante/Plante_1.webp",
		titreimg_3: "Ta plante est malade ?",
		textimg_3: "Pas de soucis ! Des professionnels sont là pour t’aider !  Décris ce que ta plante a dans sa fiche attitrée !",

		lingImg_4: "Plante/Plante_2.jpg",
		titreimg_4: "Deviens un gardien !",
		textimg_4: "Tu souhaites aider en retour ? C’est tout à fait possible ! Va dans la section “Gardien” et proposes ton aide en fonction de tes disponibilités ! ",

		speechRight_1: "Bonjour ! Excusez-moi, je viens d’arriver ici...Je me demandais comment ça se passe ? ",
		speechLeft_1: "Bienvenue chez nous  ! Bien sûr. Pour commencer, vous devez d’abord vous inscrire ! Cliquez sur le bouton inscription, et renseignez les informations demandées ! ",
		speechRight_2: "C’est fait, merci ! Et maintenant ? ",
		speechLeft_2: "Bien joué, merci à toi de ton inscription ! Maintenant tu as accès au site complet ! Si tu es un gardien, tu peux regarder quelles plantes sont à garder dans la section “Gardien”. Sinon, n’hésite pa s à y inscrire tes propres plantes dans la section “Mes plantes” , afin qu’elles puissent trouver un ou une Plant’sitter ! ",

		speechImg_Small: "PeopleTalking/Speech-Bubble-Left.png",
		speechImg_Big: "PeopleTalking/Speech-Bubble-Big.png",
		speechImg_Bigger: "PeopleTalking/Speech-Bubble-Bigger.png"
	}),
}
</script>

<style>
.header {
	display: flex;
	flex-direction: row;
	gap: 150px;

}

.contentPage {
	display: flex;
	flex-direction: row;
	gap: 1rem;
	flex: 1;
	align-self: stretch;

}

.headerContent {
	display: flex;
	flex-direction: column;
}

.right {
	flex: 2;
	display: flex;
	flex-direction: column;
	margin-top: 0%;
	align-items: self-end;
}

.list-articles {
	display: flex;
	flex-direction: column;
	gap: 1rem;
	flex: 1;
}

.left {
	flex: 1;
	margin-top: 5%;
}

.firstSection {
	display: flex;
	flex-direction: row;
}

.imgLogo {
	width: 60px;
}

.title {

	text-decoration: underline;
	text-decoration-color: green;
	display: flex;
	flex-direction: column;
	align-items: center;

}

.talkingPeople {
	margin: 10%;
	width: 600px;
	height: 650px;
	border-radius: 20px;
	border: 2px solid green;
	background-color: aliceblue;
}

.speechContent {
	margin-top: 15%;
}

@media (max-width : 1000px) {
	.main-container {
		display: flex;
		flex-direction: column;
	}

	.header {
		display: flex;
		flex-direction: row;
		gap: 150px;
		flex-direction: column;

	}

	.contentPage {
		display: flex;
		flex-direction: row;
		gap: 1rem;
		flex: 1;
		align-self: stretch;
		flex-direction: column;

	}

	.headerContent {
		display: flex;
		flex-direction: column;
		flex-direction: column;
	}

	.right {
		flex: 2;
		display: flex;
		flex-direction: column;
		margin-top: 0%;
		align-items: self-end;
	}

	.list-articles {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		flex: 1;
	}

	.left {
		flex: 1;
		margin-top: 5%;
		flex-direction: column;
	}

	.firstSection {
		display: flex;
		flex-direction: column;
	}

	.imgLogo {
		width: 60px;
	}

	.talkingPeople {
		width: 100%;
		height: 100%;
		border-radius: 20px;
		border: 2px solid green;
		background-color: aliceblue;
		margin-left: 100%;
		margin-right: 0%;
	}

	.speechContent {
		margin-top: 15%;
	}
}
</style>