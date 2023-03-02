<template>
  <div class="main-container">
    <h1>Suivis</h1>

    <form id="formGuardianTracking">
      <div class="form-field">
        <label for="">Date de début : </label>
        <input type="date" />
      </div>

      <div class="form-field">
        <label for="">Date de fin : </label>
        <input type="date" />
      </div>

      <div class="form-field">
        <label for="">Numéro de contact : </label>
        <input type="text" id="phoneNumberInput" />
      </div>

      <h1 id="day">Jour 1 :</h1>

      <div v-for="plant in plants" :key="plant.id">
        <label for="" >Plante : {{ plant.name }}</label>
        <div class="add-button">
          <label class="takePicture">Prendre une photo : </label>
          <img src="@/assets/Logo/add-button.png" @click="goToView(routePhotoPage)" alt="Ajouter une plante" />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { getToken, getCurrentUserId } from '../../../api.config'
export default {
  name: "GuardianTrackingPage",
  props: ["id"],
  data() {
    return {
      plants: [],
      routePhotoPage: "camera",
    };
  },
  mounted() {
    fetch("https://a-rosa-je.herokuapp.com:443/api/plants?user="+getCurrentUserId(),
    {
      headers: {
        Authorization: "Bearer " + getToken(),
      },
    })
      .then((res) => res.json())
      .then((data) => (this.plants = data));
  },
  methods: {
    goToView(path) {
      this.$router.push({ name: path });
    },
  },
};
</script>

<style scoped>
label {
  font-weight: lighter;
  color: var(--main-title-h1);
}

input {
  font-size: medium;
}

.form-field {
  flex-direction: row;
  margin-bottom: 10px;
}

.form-field label {
  display: inline-block;
  width: 135px;
  text-align: left;
}

.takePicture {
  display: flex;
  position: relative;
  top: 30px;
  font-weight: bold;
}

.add-button>img {
  display: flex;
  position: relative;
  left: 200px;
  bottom: 10px;
  width: 50px;
  height: auto;
  cursor: pointer;
}

#formGuardianTracking {
  display: flex;
  flex-direction: column;
  align-items: start;
  margin: 10px;
}

#phoneNumberInput {
  width: 130px;
}
</style>