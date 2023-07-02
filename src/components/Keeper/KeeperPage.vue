<template>
  <div class="main-container">
    <div class="header">
      <div class="imgProfilContainer">
        <img :src="require(`@/assets/` + imgPath)" class="imgProfil" alt="">
      </div>

      <div class="nameProfil" label="Name Profil">
        <h1 id="lastname">{{ firstname }}</h1>
        <h1 id="firstname">{{ lastname }}</h1>
      </div>
      <div class="button">
        <img src="../../assets/Logo/Map.png" alt="" srcset="" class="imgButton" @click="GoToMap">
      </div>
    </div>

    <div class="ListPlants">
      <div class="group-checkbox">
        <input type="radio" name="PlantKeep" value="KeepPlant" id="PlantKeep" @change="filterListKeepedPlants()"
          v-model="picked" />
        <label for="PlantKeep">Plante gardée</label>
        <br>
        <input type="radio" name="PlantAskKeep" value="AskKeepPlant" id="AskKeepPlant" @change="filterList()"
          v-model="picked" />
        <label for="AskKeepPlant">Demande de Gardiennage</label>
        <br>
      </div>
      <table>
        <thead>
          <tr>
            <th v-for="header in headers" :key="header">
              {{ header }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="tempItems.length === 0">
            <td>Vide</td>
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
          <tr v-else v-for="(item, index) in tempItems" :key="index">
            <td>{{ item.user.firstName }}</td>
            <td>{{ item.user.address.city }}</td>
            <td>{{ item.startDate }}</td>
            <td>{{ item.endDate }}</td>
            <td>
              <div class="buttonsList">
                <img src="../../assets/Logo/Message.png" alt="Voir" class="SeeImg">
                <img src="../../assets/Logo/OK.png" alt="Accepter" class="OKImg" @click="AddPlantToKeep(index)"
                  v-show="ShowAddPlant">
                <img src="../../assets/Logo/No.png" alt="Refuser" class="NoImg" @click="RemovePlantToKeep(index)"
                  v-show="!ShowAddPlant">
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { vShow } from 'vue';
import { getToken, getCurrentUserId, config } from '../../../api.config'
export default {
  name: 'KeeperPage',
  data() {
    return {
      imgPath: "PeopleTalking/profile.jpg",
      firstname: 'Jane',
      lastname: 'Doe',
      headers: [
        "Nom Client", "Ville Client", 'Date début', 'Date fin'
      ],
      items: [],
      tempItems: [],
      slots: [],
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
      slot: [
        {
          "endDate": "2023-04-21",
          "keeperId": 0,
          "startDate": "2023-04-21",
          "userId": 0
        }
      ],
      index: 0,
      ShowAddPlant: false
    }
  },
  methods: {
    KeepPlant() {
      this.$router.push('/keeper/PlantsKeep');
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
            this.items = data;
            if (this.picked == "AskKeepPlant") {
              this.filterList();
            }
            else {
              this.filterListKeepedPlants()
            }
          }
        )
    },
    filterList() {
      this.ShowAddPlant = true;
      this.tempItems = this.items.filter(Element => {
        return Element.keeper === null;
      });
    },
    filterListKeepedPlants() {
      this.ShowAddPlant = false;
      this.tempItems = this.items.filter(Element => {
        if (Element.keeper != null) {
          return Element.keeper.id === this.user.id;
        }
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
          this.firstname = this.user.firstName;
          this.lastname = this.user.lastName;
          this.GetSlots();
        })
    },
    AddPlantToKeep(index) {
      let keeperObject = {
        keeperId: this.user.id
      };
      fetch(config.apiBase + config.endpoints.slotsPath + '/' + this.tempItems[index].id, {
        method: 'PUT',
        headers: {
          Authorization: 'Bearer ' + getToken(),
          "Content-Type": "application/json"
        },
        body: JSON.stringify(keeperObject)
      })
        .then(() => this.GetSlots());
    },
    RemovePlantToKeep(index) {
      let keeperObject = {
        keeperId: null
      };
      fetch(config.apiBase + config.endpoints.slotsPath + '/' + this.tempItems[index].id, {
        method: 'PUT',
        headers: {
          Authorization: 'Bearer ' + getToken(),
          "Content-Type": "application/json"
        },
        body: JSON.stringify(keeperObject)
      })
        .then(() => this.GetSlots());
    },
    GoToMap() {
      this.$router.push({ name: "map" })
    }
  },
  beforeMount() {
    this.GetUser();
  },
}
</script>

<style scoped>
.main-container {
  width: 100%;
  height: 100vh;
}

.header {
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  width: 100vh;
  align-items: center;
  padding-bottom: 2%;
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

.ListPlants {
  width: 100%;
}

.buttonsList {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.SeeImg {
  width: 30%;
  margin: 0%;
  padding: 0%;
}

.OKImg {
  width: 35%;
  height: 10%;
  margin: 0%;
  padding: 0%;

}

.NoImg {
  width: 30%;
  height: 10%;
  margin: 0%;
  padding: 0%;
}

.form-checkbox {
  display: flex;
  flex-direction: row;
  padding-top: 10px;
  align-items: center;
}

.checkbox-position {
  padding: 0;
  margin: 0;
  vertical-align: baseline;
  position: relative;
  top: -1px;
}

.register-checkbox {
  margin-left: 10px;
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
