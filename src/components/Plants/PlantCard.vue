<template>
  <div class="card-plant">
    <div>
      <div class="photo-part">
        <div class="viewPhotos">
          <img src="../../assets/Plante/Plante_2.jpg" />
          <img src="../../assets/Plante/Plante_3.jpeg" />
          <img src="../../assets/Plante/Plante_4.png" />
          <img src="../../assets/Plante/Plante_5.png" />
        </div>
      </div>

      <div class="info-part">
        <div class="row1">
          <p type="text">Orchidée Phalaenopsis</p>
          <img src="@/assets/Logo/delete-button.png">
        </div>

        <div class="row2">
          <div class="row2-1">
            <div class="logo-field">
              <img src="@/assets/Logo/Ombre.png">
              <select id="lightSelect" v-model="sunlight" disabled>
                <option value="fullShadow">Ombre</option>
                <option value="sun">Soleil</option>
                <option value="midShadow">Mi-Ombre</option>
              </select>
            </div>
            <div class="logo-field"></div>
            <img src="@/assets/Logo/Ombre.png">
            <input type="text" class="minTemp" disabled />
          </div>
        </div>

        <div class="row2-2">
          <div class="logo-field"></div>
          <img src="@/assets/Logo/TemperatureBasse.png">
          <input type="text" class="minTemp" disabled />
        </div>
        <div class="logo-field"></div>
        <img src="@/assets/Logo/TemperatureHaute.png">
        <input type="text" class="maxTemp" disabled />
      </div>
    </div>

    <div class="row2-3">
      <div class="logo-field"></div>
      <img src="@/assets/Logo/TemperatureBasse.png">
      <input type="text" class="minTemp" disabled />
    </div>
    <div class="logo-field"></div>
    <img src="@/assets/Logo/TemperatureHaute.png">
    <input type="text" class="maxTemp" disabled />
  </div>
  </div>
  </div>

  <div class="row3">
    <div class="form-field">
      <label for="plantLight">Consignes d'entretien : </label>
      <input type="text" class="maintenanceInstructions" v-model="customerAdvice" disabled />
    </div>
    <div class="form-field">
      <label for="plantLight">Conseil d'un Botaniste : </label>
      <input type="text" class="botanistAdvice" v-model="botanistAdvice" disabled />
    </div>
  </div>
  </div>
  </div>

  <div class="button-group">
    <input class="btn-reset" type="reset" value="Supprimer" />
    <input class="btn-validate" type="submit" value="Modifier" />
  </div>
</div></template>

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
  }
}
</script>

<style scoped>
@import "https://fonts.googleapis.com/icon?family=Material+Icons"

.card-plant {
  display: flex;
  align-items: flex-start;
}

h2 {
  color: var(--main-title-h2);
}

.info-part {
  display: flex;
  flex-direction: row;
}

.row3 {
  display: flex;
  flex-direction: row;
  align-content: space-between;
}

.maintenanceInstructions,
.botanistAdvice {
  width: 200px;
  height: 150px;
}
</style>
