<template>
	<div class="container">
		<img :src="require(`@/assets/` + imgLink)" alt="" class="img">
		<div class="explanation">
			<div class="title">
				<h2>{{ titre }}</h2>
			</div>
			<div class="textInside">
				{{ text }}
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "TextAndImg",
	props: {
		imgLink: String,
		text: String,
		titre: String
	}
}
</script>

<style>
.container {
	display: flex;
	flex-direction: row;
	align-items: center;
	word-wrap: break-word;
	flex: 1;
}

h2 {
	color: var(--main-title-h1);
}

.explanation {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
}

.textInside {
	text-align: justify;
	font-size: large;
}

.img {
	width: 10rem;
}

@media (max-width : 1000px) {
	.container {
		display: flex;
		flex-direction: column;
	}
}
</style>