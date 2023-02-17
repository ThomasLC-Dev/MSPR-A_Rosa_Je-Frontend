<template>
	<div class=".container-column">
		<img :src="require(`@/assets/` + imgLink)" alt="" class="img-column">
		<div class="explanation-column">
			<div class="title-column">
				<h1>{{ titre }}</h1>
			</div>
			<div class="textInside-column">
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
}
.explanation-column{
	display: flex;
	flex-direction: column;
	align-items: flex-start;
}
.img-column{
	width: 10rem;
    margin: 5%;
}
</style>