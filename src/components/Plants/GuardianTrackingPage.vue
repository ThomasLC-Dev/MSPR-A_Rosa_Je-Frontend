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
      <label for="">Plante 1 : {{ plants.name }}</label>
      <button class="addPlant" @click="goToView(routePhotoPage)">
        Prendre une photo
      </button>
      <label for="">Plante 2 : </label>
      <button class="addPlant" @click="goToView(routePhotoPage)">
        Prendre une photo
      </button>
      <label for="">Plante 3 : </label>
      <button class="addPlant" @click="goToView(routePhotoPage)">
        Prendre une photo
      </button>
    </form>
  </div>
</template>

<script>
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
    // const token = localStorage.getItem('token');
    fetch("https://a-rosa-je.herokuapp.com:443/api/plants?user=",{
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
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