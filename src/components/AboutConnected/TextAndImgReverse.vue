<template>
	<div class="container-reverse">
		<div class="textReverse">
			<div class="titleReverse">
				<h1>{{ titre }}</h1>
			</div>
			<div class="textInsideReverse">
				{{ text }}
			</div>

		</div>
		<img src="@/assets/Plante/Plante_6.jpg" alt="" class="imgReverse">


	</div>
</template>

<script>
export default {
	name: "TextAndImg",
	props: {
		imgLink: String,
		text: String,
		titre: String
	},
	data: () => ({}),

}
</script>

<style>
.container-reverse {
	display: flex;
	flex-direction: row;
	align-items: center;
	flex: 1;

}

.imgReverse {
	width: 15rem;
}

.textReverse {
	margin-right: 10px;
	flex: 1;

}

@media (max-width : 1000px) {
	.container-reverse {
		display: flex;
		flex-direction: column;
	}
}
</style>