<template>
	<div class=".container-column">
		<img :src="require(`@/assets/` + imgLink)" alt="" class="img-column">
		<div class="explanation-column">
			<div class="title-column">
				<h2>{{ titre }}</h2>
			</div>
			<div class="textInsideColumn">
				{{ text }}
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "TextAndImgColumn",
	data: () => ({}),
	props: {
		imgLink: String,
		text: String,
		titre: String
	}
}
</script>

<style>
.container-column {
	display: flex;
	flex-direction: column;
	align-items: center;
	word-wrap: break-word;
	flex: 1;
	margin-top: -60%;
}

.explanation-column {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
}

.textInsideColumn {
	text-align: justify;
	font-size: large;
}

.img-column {
	width: 15rem;
	margin: 5%;
}
</style>