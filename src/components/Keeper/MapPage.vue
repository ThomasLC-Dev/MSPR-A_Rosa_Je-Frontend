<template>
    <div class="main-container">
        <div class="ButtonReturn">
            <input class="btn-validate" type="submit" value="Retour" @click="ReturnToKeeperPage">
        </div>
        <div class="mapContainer">
            <div id="map" style="width: 100%;"></div>
        </div>
    </div>
</template>
<script>
import L from 'leaflet'

export default {
    name: 'MapPage',
    data() {
   return{
     center: [37,7749, -122,4194]
   }}, 
   mounted(){
    const map = L.map('map').setView([51.505, -0.09], 13);

	const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 19,
		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
	}).addTo(map);

	const marker = L.marker([51.5, -0.09]).addTo(map)
		.bindPopup('<b>Hello world!</b><br />I am a popup.').openPopup();

	const circle = L.circle([51.508, -0.11], {
		color: 'red',
		fillColor: '#f03',
		fillOpacity: 0.5,
		radius: 500
	}).addTo(map).bindPopup('I am a circle.');

	const polygon = L.polygon([
		[51.509, -0.08],
		[51.503, -0.06],
		[51.51, -0.047]
	]).addTo(map).bindPopup('I am a polygon.');


	const popup = L.popup()
		.setLatLng([51.513, -0.09])
		.setContent('I am a standalone popup.')
		.openOn(map);

	function onMapClick(e) {
		popup
			.setLatLng(e.latlng)
			.setContent(`You clicked the map at ${e.latlng.toString()}`)
			.openOn(map);
	}

	map.on('click', onMapClick);
    
   }
}
  
   


</script>
<style scoped>
#mapContainer {
 width: 80vw;
 height: 100vh;
}
.ButtonReturn {
    left: 350px;
    position: fixed;
}

.map {
    border: 2px solid green;
    border-radius: 20%;
    width: 100vh;
    height: 90vh;
}
</style>
