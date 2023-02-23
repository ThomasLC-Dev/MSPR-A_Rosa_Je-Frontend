<template>
  <div class="main-container">
    <h1>Ajouter une plante</h1>

    <form id="formAddPlant">
      <div class="form-field">
        <label for="plantName">Nom de plante : </label>
        <input v-model="latinOrVerna" type="text" placeholder="Nom vernaculaire ou latin" />
      </div>

      <div class="form-field">
        <label for="plantLight">Ensoleillement : </label>
        <select v-model="sunLight" id="lightSelect">
          <option value="">Choix</option>
          <option value="sun">Soleil</option>
          <option value="midShadow">Mi-Ombre</option>
          <option value="fullShadow">Ombre</option>
        </select>
      </div>

      <div class="form-field">
        <label for="plantMinTemp">T°C minimale : </label>
        <input v-model="lowerTemp" type="number" id="minTemp" placeholder="Valeur" />
      </div>

      <div class="form-field">
        <label for="plantMaxTemp">T°C maximale : </label>
        <input v-model="higherTemp" type="number" id="maxTemp" placeholder="Valeur" />
      </div>

      <div class="form-field">
        <label for="plantWaterQuantity">Quantité d'eau : </label>
        <input v-model="wateringQuantity" type="number" placeholder="Volume d'eau à verser" />
      </div>

      <div class="form-field">
        <label for="plantWateringFrequency">Fréquence arrosage : </label>
        <select v-model="wateringFrequency" id="wateringSelect">
          <option value="">Nombre</option>
        </select>
      </div>

      <div class="form-field">
        <label for="plantWateringType">Type arrosage : </label>
        <input v-model="wateringContainer" type="text" placeholder="Contenant à utiliser" />
      </div>

      <div class="form-field">
        <label for="plantPhoto">Ajouter une photo (maxi 4) : </label>
        <img src="../../assets/Logo/add-button.png" alt="ajouter une plante"/>
        <div class="addPhotos">
          <input v-model="plantsPhoto" type="image"/>
          <div class="delete-button">
            <i class="material-icons">delete</i>
          </div>

          <input v-model="plantsPhoto" type="image"/>
          <div class="delete-button">
            <i class="material-icons">delete</i>
          </div>

          <input v-model="plantsPhoto" type="image"/>
          <div class="delete-button">
            <i class="material-icons">delete</i>
          </div>

          <input v-model="plantsPhoto" type="image"/>
          <div class="delete-button">
            <i class="material-icons">delete</i>
          </div>
        </div>
      </div>

      <div class="form-field">
        <label for="plantLight">Consignes d'entretien : </label>
        <textarea v-model="customerAdvice" type="text" id="maintenanceInstructions"> </textarea>
      </div>

      <div>
        <button class="btn-validate">Enregistrer</button>
      </div>

      <div>
        <button class="btn-reset">Annuler</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddNewPlantsView",
};
</script>

<style scoped>
@import "https://fonts.googleapis.com/icon?family=Material+Icons";

label {
  font-weight: lighter;
  color: var(--main-title-h1);
}

label[for="plantWateringType"], label[for="plantMinTemp"] {
  margin-top: 10px;
}

input,
input::placeholder {
  font-size: small;
}

textarea {
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  border: 1px solid #519069;
  font-size: large;
}

input[type="image"] {
  display: flex;
  padding: 0;
  width: 50px;
  height: 90px;
  margin-left: 10px;
  border-radius: 30px;
}

img {
  display: flex;
  position: relative;
  left: 72%;
  bottom: 22px;
  width: 20px;
  height: 20px;
}

.main-container {
  align-items: start;
}

.addPhotos {
  display: flex;
  position: relative;
  bottom: 10px;
  right: 7px;
  flex-direction: row;
}

.delete-button {
  display: flex;
  position: relative;
  height: 24px;
  top: 90px;
}

#formAddPlant {
  display: flex;
  flex-direction: column;
  align-items: start;
  margin: 10px;
}

#minTemp,
#maxTemp {
  width: 40px;
}

#maintenanceInstructions {
  text-align: left;
  padding: 0.4em;
  padding-bottom: 190px;
  width: 250px;
}

@media screen and (min-width: 1000px) {

  img {
    left: 25%;
  }

  .main-container {
    align-items: center;
  }

  .form-field label {
    display: inline-block;
    width: 200px;
    text-align: left;
  }
}
</style>