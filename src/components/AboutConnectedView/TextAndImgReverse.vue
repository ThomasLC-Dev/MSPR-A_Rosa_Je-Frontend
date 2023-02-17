<template>
	<div class="main_container">
		<div class="text">
			<p>Ceci est un test</p>
		</div>
		<img src="@/assets/Plante/Plante_6.jpg" alt="" class="img">
	</div>
</template>

<script>
export default {
	name: "TextAndImg",
	data: () => ({}),
}
</script>

<style>
.main_container {
	display: flex;
	flex-direction: row;
	align-items: center;
	margin: 2%;
	margin-left: -10%;
}
.img{
	width: 20%;
}
.text{
	margin: 5%;
}
</style>