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
      <h2>Propositions de gardes</h2>
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

            <td>{{ item.name }}</td>
            <td>{{ item.city }}</td>
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
    <div class="ButtonPlanteGardee">
      <input class="btn-validate" type="submit" value="Plantes gardées" @click="KeepPlant" />
    </div>
  </div>
</template>

<script>
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
      items: [{ name: 'Jack', city: 'Rennes', startDate: '12/03/2023', endDate: '30/04/2023' },
      { name: 'Mathis', city: 'Challans', startDate: '15/07/2023', endDate: '30/07/2023' },
      { name: 'Clément', city: 'Lyon', startDate: '20/02/2023', endDate: '30/05/2023' }]

    }
  },
  methods: {
    ShowMap() {
      this.$router.push('/map');
    },
    KeepPlant() {
      this.$router.push('/keeper/PlantsKeep');
    }
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


}</style>
