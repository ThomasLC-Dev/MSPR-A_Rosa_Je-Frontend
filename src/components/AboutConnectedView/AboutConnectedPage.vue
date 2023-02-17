<template>
	<div class="main-container">
		<div class="title">
			<img src="@/assets/Logo/Logo_1.png" alt="" class="imgLogo">
			<h1> Comment ça marche ? </h1>
		</div>
		<ul>
			<TextAndImg :img-link="lingImg_1"  class="firstSection"/>
			<TextAndImgReverse class="secondSection" />
		</ul>
	</div>
</template>

<script>
import TextAndImg from "./TextAndImg.vue"
import TextAndImgReverse from "./TextAndImgReverse.vue"
export default {
	name: "AboutConnectedPage",
	components: {
		TextAndImg,
		TextAndImgReverse

	},
	data: () => ({
		lingImg_1 : "Plante/Plante_4.png", 
		lingImg_2 : "Plante/plante_6.jpg", 
		lingImg_3 : "", 
	}),
}
</script>

<style>
.main-container{
	display: flex;
}
.imgLogo{
	width: 60px;
}
.title{

	margin-left: -60%;
	margin-top: 5%;
	text-decoration: underline;
	text-decoration-color: green;
}
.firstSection{
	margin-left: 40%;
	margin-top: -15%;
	width: 110%;
}

.secondSection{
	margin-left: 65%;
	margin-top: 0%;
	width: 110%;
}
</style>