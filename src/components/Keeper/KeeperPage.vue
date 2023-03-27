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
        <img src="../../assets/Logo/Map.png" alt="" srcset="" class="imgButton">
      </div>
    </div>

    <div class="ListPlants">
      <div class="group-checkbox">
        <input type="radio" id="one" value="true" v-model="picked" @click="filterList()">
        <label for="one">Plante Gardées</label>
        <br>
        <input type="radio" id="two" value="false" v-model="picked" @click="filterList()">
        <label for="two">Demande de gardiennage</label>
        <br>
        <span>Picked: {{ picked }}</span>
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
          <tr v-if="items.length === 0">
            <td>Vide</td>
            <td>Vide</td>
            <td>Vide</td>
            <td>Vide</td>
            <td>
              <div class="buttonsList">
                <img src="../../assets/Logo/EyesOK.png" alt="Voir" class="SeeImg">
                <img src="../../assets/Logo/OK.png" alt="Accepter" class="OKImg">
                <img src="../../assets/Logo/No.png" alt="Refuser" class="NoImg">
              </div>
            </td>

          </tr>
          <tr v-else v-for="item in items">

            <td>{{ item.user.firstName }}</td>
            <td>{{ item.user.address.city }}</td>
            <td>{{ item.startDate }}</td>
            <td>{{ item.endDate }}</td>
            <td>
              <div class="buttonsList">
                <img src="../../assets/Logo/EyesOK.png" alt="Voir" class="SeeImg">
                <img src="../../assets/Logo/OK.png" alt="Accepter" class="OKImg">
                <img src="../../assets/Logo/No.png" alt="Refuser" class="NoImg">
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { getToken, } from '../../../api.config'
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
      slots: [],
      showkeepedPlants: false,
      showPlantsToKeep: true, 
      picked : "default" 

    }
  },
  methods: {
    KeepPlant() {
      this.$router.push('/keeper/PlantsKeep');
    },
    GetUsers() {
      fetch("https://a-rosa-je.herokuapp.com/api/slots/", {
        headers: {
          Authorization: 'Bearer ' + getToken(),
        }
      })
        .then((res) => res.json())
        .then(
          (data) => (this.items = data,
            this.filterList())
        )

    },
    filterList() {
      if (this.picked = "true") {

        this.items = this.items.filter(Element => {
          return Element.keeper === null;
        });
        console.log(this.items)
      }
      else if (this.picked ="false") {

        this.items = this.items.filter(Element => {
          return Element.keeper === this.user;
        });
        console.log(this.items)
      }
    }
  },

  filterListKeepedPlants() {


  },
  beforeMount() {
    this.GetUsers()

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
  width: 20%;
  margin: 0%;
  padding: 0%;
}

.OKImg {
  width: 15%;
  height: 10%;
  margin: 0%;
  padding: 0%;

}

.NoImg {
  width: 15%;
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
