<template>
	<div class="contentSpeechRight">

		<div class="speechRight">
			<img src="@/assets/PeopleTalking/Speech-Bubble-Right.png" alt="" class="speechBubbleRight">
			<div class="textSpeechRight">
				{{ text }}
			</div>
		</div>
		<div class="imgPeopleRight">
			<img src="@/assets/PeopleTalking/people-talking-illustration-vector-Right.png" alt="Une personne qui parle"
				class="imgRightPeople">
		</div>
	</div>
</template>

<script>
export default {
	name: "RightPeople",
	data: () => ({}),
	props: {
		text: String,
	}
}
</script>

<style>
.contentSpeechRight {
	margin: 5%;
	margin-top: -5%;
	display: flex;
	flex-direction: row;
}

.speechRight {
	position: relative;

}

.imgRightPeople {
	width: 150px;
}

.speechBubbleRight {
	width: 100%;
	display: flex;
	top: 0;
	left: 0;
	position: relative;

}

.textSpeechRight {
	display: flex;
	;
	justify-content: space-around;
	z-index: 9;
	margin: 10px;
	margin-left: 10%;
	margin-top: -12%;
	font-size: small;

}

@media (max-width : 1000px) {
	.imgRightPeople {
		width: 100px
	}

	.speechBubbleRight {
		display: none;

	}

	.textSpeechRight {
		display: flex;
		justify-content: space-around;
		z-index: 9;
		margin: 15px;
		margin-left: 15%;
		font-size: small;
		border: 2px solid green;
		padding: 10%;

	}


}
</style>