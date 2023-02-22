<template>
  <div >
      <div class="form-field">
        <label for="plantName">Nom de plante : </label>
        <input type="text" v-model="latinOrVerna" disabled/>
      </div>

      <div class="form-field">
        <label for="plantLight">Ensoleillement : </label>
        <select id="lightSelect" v-model="sunlight" disabled>
          <option value="">Choix</option>
          <option value="sun">Soleil</option>
          <option value="midShadow">Mi-Ombre</option>
          <option value="fullShadow">Ombre</option>
        </select>
      </div>

      <div class="form-field">
        <label for="plantMinTemp">T°C minimale : </label>
        <input type="number" class="minTemp" v-model="lowerTemp" disabled/>
      </div>

      <div class="form-field">
        <label for="plantMaxTemp">T°C maximale : </label>
        <input type="number" class="maxTemp" v-model="higherTemp" disabled/>
      </div>

      <div class="form-field">
        <label for="plantWaterQuantity">Quantité d'eau : </label>
        <input type="number" v-model="wateringQuantity" disabled/>
      </div>

      <div class="form-field">
        <label for="plantWateringFrequency">Fréquence arrosage : </label>
        <input type="number" v-model="wateringFrequency" disabled/>
      </div>

      <div class="form-field">
        <label for="plantWateringType">Type arrosage : </label>
        <input type="text" v-model="wateringContainer" disabled/>
      </div>

      <div class="form-field">
        <!-- TODO : faire un v-for de photo a afficher. Prevoir un component viewPhoto.vue -->
        <div class="viewPhotos">
          <img src="../../assets/Plante/Plante_2.jpg" />
          <img src="../../assets/Plante/Plante_3.jpeg" />
          <img src="../../assets/Plante/Plante_4.png" />
          <img src="../../assets/Plante/Plante_5.png" />

        </div>
      </div>

    <div class="group-advice">
      <div class="form-field">
        <label for="plantLight">Consignes d'entretien : </label>
        <input type="text" class="maintenanceInstructions" v-model="customerAdvice" disabled/>
      </div>
      <div class="form-field">
        <label for="plantLight">Conseil d'un Botaniste : </label>
        <input type="text" class="botanistAdvice" v-model="botanistAdvice" disabled/>
      </div>
    </div>

    <div class="button-group">
      <input class="btn-reset" type="reset" value="Supprimer">
      <input class="btn-validate" type="submit" value="Modifier">
    </div> 
  </div>
</template>

<script>
export default {
  name: 'PlantCard',
  data() {
      return {
          latinOrVerna: '',
          sunlight: '',
          lowerTemp: '',
          higherTemp: '',
          wateringQuantity: '',
          wateringFrequency: '',
          wateringContainer: '',
          customerAdvice: '',
          botanistAdvice: '',
          plantsPhoto: []
      }
  },
}
</script>

<style scoped>
@import "https://fonts.googleapis.com/icon?family=Material+Icons";

.main-container {
  align-items: start;
}

h2 {
  color: var(--main-title-h2);
}

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

input[type="file"] {
  display: flex;
  width: 50px;
  height: 90px;
}

img {
  display: flex;
  width: 20px;
  height: 20px;
}

.viewPhotos {
  display: flex;
  flex-direction: row;
}

#formAddPlant {
  display: flex;
  flex-direction: column;
  align-items: start;
  margin: 10px;
}

.minTemp,
.maxTemp {
  width: 40px;
}

.group-advice{
  display: flex;
  flex-direction: row;
  align-content: space-between;
}

.maintenanceInstructions, .botanistAdvice {
  width: 200px;
  height: 150px;
}
</style>