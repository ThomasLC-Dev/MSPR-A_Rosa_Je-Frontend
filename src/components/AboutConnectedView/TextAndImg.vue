<template>
	<div class="main_container">
		<img :src="require(`@/assets/` + imgLink)" alt="" class="img">
		<div class="text">
			<p>Ceci est un test</p>
		</div>
	</div>
</template>

<script>
export default {
	name: "TextAndImg",
	data: () => ({}),
	props:{ 
		imgLink:String, 
		text:String
	}
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