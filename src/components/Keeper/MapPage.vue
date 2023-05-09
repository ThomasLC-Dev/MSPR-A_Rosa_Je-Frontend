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
        return {
            center: [37, 7749, -122, 4194],
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
            plants: []
        }
    },
    methods: {

        GetUser() {
            return fetch("https://a-rosa-je.herokuapp.com/api/users/" + getCurrentUserId(), {
                headers: {
                    Authorization: 'Bearer ' + getToken(),
                }
            });

        },
        GetPlants() {
            return fetch("https://a-rosa-je.herokuapp.com/api/slots/", {
                headers: {
                    Authorization: 'Bearer ' + getToken(),
                }
            });
        }

    },
    mounted() {

        this.GetUser().then((res) => res.json())
            .then(
                (userData) => {

                    this.GetPlants().then((res) => res.json())
                        .then(
                            (plantData) => {
                                this.plants = plantData,
                                    console.log(this.plants);
                                this.user = userData;


                                let latitude = this.user.address.latitude;
                                let longitude = this.user.address.longitude;

                                const map = L.map('map').setView([latitude, longitude], 10);

                                const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                                    maxZoom: 19,
                                    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                                }).addTo(map);

                                const markerUser = L.marker([latitude, longitude]).addTo(map)
                                    .bindPopup("<b> C'est toi ! </b>").openPopup();

                                for (let index = 0; index < this.plants.length; index++) {

                                    if (this.plants[index].user.id != this.user.id) {

                                        let strName = "Plante de : " + this.plants[index].user.firstName; 
                                        console.log(this.plants[index].user);
                                        const marker = L.marker([this.plants[index].user.address.latitude, this.plants[index].user.address.longitude]).addTo(map)
                                            .bindPopup(strName);

                                    }

                                }


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
                        )

                }

            )
    }
}



</script>
<style scoped>
.main-container {
    width: 100%;
}

#mapContainer {
    width: 80vw;
    height: 100vh;
}

.ButtonReturn {
    left: 250px;
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
