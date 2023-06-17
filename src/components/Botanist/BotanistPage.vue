<template>
  <div class="main-container">
    <div class="header">
      <div class="imgProfilContainer">
        <img :src="require(`@/assets/` + imgPath)" class="imgProfil" alt="">
      </div>

      <div class="nameProfil" label="Name Profil">
        <h1 id="firstname">{{ user.firstName }}</h1>
        <h1 id="lastname">{{ user.lastName }}</h1>
      </div>
    </div>

    <div class="ListPlants">
      <div class="group-checkbox">
        <!-- <input type="radio" name="PlantKeep" value="KeepPlant" id="PlantKeep" @change="filterListKeepedPlants()"
          v-model="picked" />
        <label for="PlantKeep">Conseils donnés</label>
        <br>
        <input type="radio" name="PlantAskKeep" value="AskKeepPlant" id="AskKeepPlant" @change="filterList()"
          v-model="picked" />
        <label for="AskKeepPlant">Demande de conseils</label>
        <br> -->
      </div>
      <table>
        <thead>
          <tr>
            <th v-for="header in headers">
              {{ header }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="tempItems.length === 0">
            <td>Vide</td>
            <td>Vide</td>
            <td>Vide</td>
            <td>
              <div class="buttonsList">
                <img src="../../assets/Logo/Message.png" alt="Voir" class="SeeImg">
                <img src="../../assets/Logo/No.png" alt="Refuser" class="NoImg">
              </div>
            </td>

          </tr>
          <tr v-else v-for="(item, index) in tempItems">

            <td>{{ item.user.firstName }}</td>
            <td>{{ item.user.address.city }}</td>
            <td>{{ item.startDate }}</td>
            <td>
              <div class="buttonsList">
                <img src="../../assets/Logo/Eye_Black.png" alt="Voir" class="SeeImg" @click="routerPushToPlants(item.user.id)">
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { getCurrentUserId, getToken } from '../../../api.config';
export default {
  name: 'KeeperPage',
  data() {
    return {
      imgPath: "PeopleTalking/profile.jpg",
      firstname: 'Jane',
      lastname: 'Doe',
      headers: [
        "Client", "Ville", 'Date Début'
      ],
      items: [],
      tempItems: [],
      showkeepedPlants: false,
      showPlantsToKeep: true,
      picked: "KeepPlant",

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

      index: 0,
      ShowAddPlant: false
    }
  },
  methods: {
    KeepPlant() {
      this.$router.push('/keeper/PlantsKeep');
    },
    filterList() {
      this.ShowAddPlant = true;
      this.tempItems = this.items.filter(Element => {
        return Element.advises === "";
      });
    },
    filterListKeepedPlants() {
      this.ShowAddPlant = false;
      this.tempItems = this.items.filter(Element => {
        return Element.advises != "";
      });
    },
    GetUser() {
      fetch("https://a-rosa-je.herokuapp.com/api/users/" + getCurrentUserId(), {
        headers: {
          Authorization: 'Bearer ' + getToken(),
        }
      })
        .then((res) => res.json())
        .then((data) => {
          this.user = data;
        })
    },
    GetSlots() {
      fetch("https://a-rosa-je.herokuapp.com/api/slots/", {
        headers: {
          Authorization: 'Bearer ' + getToken(),
        }
      })
        .then((res) => res.json())
        .then(
          (data) => {
            let listData = [...data];
            listData.forEach(slot => {
              let findItem = this.items.filter(item => item.user.id == slot.user.id);
              if (findItem.length == 0) {
                this.items.push(slot);
              }
              else {
                let findSlot = findItem[0];
                console.log(slot);
                console.log(findSlot);
                if (Date.parse(findSlot.startDate) < Date.parse(slot.startDate)) {
                  if (Date.parse(findSlot.startDate) < Date.now()) {
                    let indexFindSlot = this.items.indexOf(findSlot);
                    this.items.splice(indexFindSlot, 1);
                    this.items.push(slot);
                  }
                }
                else {
                  if (Date.parse(slot.startDate) > Date.now()) {
                    let indexFindSlot = this.items.indexOf(findSlot);
                    this.items.splice(indexFindSlot, 1);
                    this.items.push(slot);
                  }
                }
              }
            });
            if (this.picked == "AskKeepPlant") {
              this.filterList();
            }
            else {
              this.filterListKeepedPlants()
            }
          }
        )
    }, 
    routerPushToPlants(id) {
      
      console.log(id);  
      this.$router.push({ name: "plants", 
        params: { data : id }
      })
    }
  },
  beforeMount() {
    this.GetUser();
    this.GetSlots();
  },
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

td {
  padding: 20px;
  width: 20%;
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

.nameProfil {
  display: flex;
  flex-direction: row;
  margin-left: 30px;
  gap: 10px;
  border-bottom: 5px solid var(--main-text);
}

.ListPlants {
  width: 100%;
}

.buttonsList {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.SeeImg {
  width: 30%;
  margin: 0%;
  padding: 0%;
}

.NoImg {
  width: 30%;
  height: 10%;
  margin: 0%;
  padding: 0%;
}

.group-checkbox {
  display: flex;
  flex-direction: row;
  gap: 10px;
}

@media(max-width: 1000px) {
  .header {
    flex-direction: column;
  }

  .nameProfil {
    margin-left: 0%;
  }
}
</style>
