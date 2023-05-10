<template>
    <div class="main-container">
        <div class="header">
            <div class="imgProfilContainer">
                <img :src="require(`@/assets/` + imgPath)" class="imgProfil" alt="">
            </div>

            <div class="nameProfil" label="Name Profil">
                <h1 id="lastname">{{ user.lastName }}</h1>
                <h1 id="firstname">{{ user.firstName }}</h1>
            </div>
            <div class="button">
                <img src="../../assets/Logo/Map.png" alt="" srcset="" class="imgButton">
            </div>
        </div>
        <div class="ListPlants">
            <h2>Plantes gardées</h2>
            <table>
                <thead>
                    <tr>
                        <th v-for="header in headers">
                            {{ header }}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-if="items.length === 0">
                        <td>No data</td>
                    </tr>
                    <tr v-else v-for="item in items">

                        <td>{{ item.user.firstName }}</td>
                        <td>{{ item.user.address.city }}</td>
                        <td>{{ item.startDate }}</td>
                        <td>{{ item.endDate }}</td>
                        <td>
                            <div class="buttonsList">
                                <img src="../../assets/Logo/EyesOK.png" alt="Voir" class="SeeImg">
                                <img src="../../assets/Logo/No.png" alt="Refuser" class="NoImg">
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="ButtonPlanteGardee">
            <input class="btn-validate" type="submit" value="Retour" @click="Return" />
        </div>
    </div>
</template>
  
<script>
import { getToken, } from '../../../api.config'
export default {
    name: 'PlantsKeeper',
    data() {
        return {
            imgPath: "PeopleTalking/profile.jpg",
            firstname: 'Jane',
            lastname: 'Doe',
            headers: [
                "Nom Client", "Ville Client", 'Date début', 'Date fin'
            ],
            items: [],
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
            }

        }
    },
    methods: {
        ShowMap() {
            this.$router.push('/map');
        },
        Return() {
            this.$router.push('/keeper');
        },
        GetSlots() {
            fetch("https://a-rosa-je.herokuapp.com/api/slots/", {
                headers: {
                    Authorization: 'Bearer ' + getToken(),
                }
            })
                .then((res) => res.json())
                .then(
                    (data) => (this.items = data,
                        console.log(data),
                        this.filterList())
                )

        },
        filterList() {
            this.items = this.items.filter(Element => {
                return Element.keeper === this.user;
            });
            console.log(this.items)
        },
        GetUser() {
            fetch("https://a-rosa-je.herokuapp.com/api/users/" + getus, {
                headers: {
                    Authorization: 'Bearer ' + getToken(),
                }
            })
                .then((res) => res.json())
                .then((data) => (this.user = data))


        },


    },

    beforeMount() {
        this.GetSlots()
    }
}
</script>
  
<style scoped>
.header {
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    width: 100vh;
    align-items: center;
    padding-bottom: 2%;



}

h2 {
    margin: 10px;
    margin-bottom: 20px;
    color: var(--main-text);
    text-decoration: underline;
}

.map {
    width: 80%;
}

.imgMap {
    width: 100%;
}

.button {
    top: 0%;
    right: 0%;
    width: 150px;
    margin-right: 0%;
    margin-left: 300px;
}


td {
    padding: 20px;
}

table {
    width: 100%;
}

table,
th,
td {
    border: 1px solid black;
    border-collapse: collapse;

    background-color: white;
}

.imgProfilContainer {
    width: 150px;
}

.imgProfil {
    width: 100%;
    border-radius: 50%;
}

.imgButton {
    width: 100%;
}

.nameProfil {
    display: flex;
    flex-direction: row;
    margin-left: 30px;
    gap: 10px;
    border-bottom: 5px solid var(--main-text);

}

.keepPlant {
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 10px;
}

.ListPlants {
    width: 100%;
}

.ButtonPlanteGardee {
    width: max-content
}


.btn-validate {
    width: fit-content;
}

.buttonsList {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
}

.SeeImg {
    width: 20%;
    margin: 0%;
    padding: 0%;
}

.NoImg {
    width: 15%;
    height: 10%;
    margin: 0%;
    padding: 0%;
}

@media(max-width: 1000px) {
    .header {
        flex-direction: column;
    }


    .button {
        margin-top: 10%;
        margin-left: 0%;
    }

    .nameProfil {
        margin-left: 0%;

    }

    .map {
        width: 110%;
    }

    .imgMap {
        width: 100%;
    }


}
</style>
  