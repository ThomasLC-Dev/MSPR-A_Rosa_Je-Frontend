<template>
    <div class="main-container">
        <div class="ButtonReturn">
            <input class="btn-validate" type="submit" value="Retour" @click="ReturnToKeeperPage">
        </div>
        <div class="mapContainer">
            <div id="map"></div>
        </div>
    </div>
</template>
<script>
import L from 'leaflet'
import { config, getToken, getCurrentUserId } from '../../../api.config'

export default {
    name: 'MapPage',
    data() {
   return{
     center: [37,7749, -122,4194],
	 user: {
                "address": {
                    "additionalAddress": "string",
                    "city": "string",
                    "id": 0,
                    "latitude": 0,
                    "longitude": 0,
                    "postalCode": "string",
                    "road": "string",
                    "roadNumber": 0,
                    "roadType": "string"
                },
                "email": "string",
                "firstName": "string",
                "id": 0,
                "imageUrl": "string",
                "lastName": "string",
                "phone": "string",
                "status": true,
                "userRoles": [
                    {
                        "id": 0,
                        "role": {
                            "id": 0,
                            "name": "string"
                        }
                    }
                ]
            },
			latitude : 0, 
			longitude : 0
   }}, 
   methods:{

	GetUser() {
      fetch("https://a-rosa-je.herokuapp.com/api/users/" + getCurrentUserId(), {
        headers: {
          Authorization: 'Bearer ' + getToken(),
        }
      })
        .then((res) => res.json())
        .then((data) => {
          this.user = data;
		  console.log(this.user);
		  this.SetValues();
        })


    },

	SetValues(){
		this.latitude = this.user.address.latitude;
		this.longitude = this.user.address.longitude;

	}

   },
   beforeMount(){
	this.GetUser();
   },
   mounted(){

	console.log(this.latitude, this.longitude); 
	const map = L.map('map').setView([48.117266, -1.6777926], 10);

	const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 19,
		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
	}).addTo(map);

	const marker = L.marker([48.117266, -1.6777926]).addTo(map)
		.bindPopup('<b>Hello world!</b><br />I am a popup.').openPopup();

	// const circle = L.circle([51.508, -0.11], {
	// 	color: 'red',
	// 	fillColor: '#f03',
	// 	fillOpacity: 0.5,
	// 	radius: 500
	// }).addTo(map).bindPopup('I am a circle.');

	// const polygon = L.polygon([
	// 	[51.509, -0.08],
	// 	[51.503, -0.06],
	// 	[51.51, -0.047]
	// ]).addTo(map).bindPopup('I am a polygon.');


	// const popup = L.popup()
	// 	.setLatLng([51.513, -0.09])
	// 	.setContent('I am a standalone popup.')
	// 	.openOn(map);

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
.main-container{
	width: 100%;
}
#mapContainer {
 width: 80vw;
 height: 100vh;
}
.ButtonReturn {
    left: 350px;
    position: fixed;
}

#map {
    border: 2px solid green;
    border-radius: 20%;
    width: 100vh;
    height: 90vh;
	margin: auto;
}
</style>
