<template>
  <div class="card-plant">
    <div class="group-plant">
      <div class="photo-part">
        <div class="viewPhotos">
          <img class="photo-view" src="../../assets/Plante/orchidee.jpeg" />
          <img class="photo-view" src="../../assets/Plante/orchidee.jpeg" />
          <img class="photo-view" src="../../assets/Plante/orchidee.jpeg" />
          <img class="photo-view" src="../../assets/Plante/orchidee.jpeg" />
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
              <img class="logo-img-plant" src="@/assets/Logo/Ombre.png">
              <select class="logo-field-plant" id="lightSelect" v-model="sunlight" disabled>
                <option value="fullShadow">Ombre</option>
                <option value="sun">Soleil</option>
                <option value="midShadow">Mi-Ombre</option>
              </select>
            </div>
            <div class="logo-field">
              <img class="logo-img-plant" src="@/assets/Logo/quantite-eau.png">
              <input type="text" class="waterQuantity" disabled />
            </div>

            <div class="row2-2">
              <div class="logo-field">
                <img class="logo-img-plant" src="@/assets/Logo/TemperatureBasse.png">
                <input type="text" class="minTemp" disabled />
              </div>
              <div class="logo-field">
                <img class="logo-img-plant" src="@/assets/Logo/TemperatureHaute.png">
                <input type="text" class="maxTemp" disabled />
              </div>
            </div>

            <div class="row2-3">
              <div class="logo-field">
                <img class="logo-img-plant" src="@/assets/Logo/quantite-eau.png">
                <input type="text" class="waterFrequency" disabled />
              </div>
              <div class="logo-field">
                <img class="logo-img-plant" src="@/assets/Logo/arrosage.png">
                <input type="text" class="waterType" disabled />
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
    </div>
    <div class="button-group">
      <input class="btn-validate" type="submit" value="Modifier" />
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
  }
}
</script>

<style scoped>
h2 {
  color: var(--main-title-h2);
}

.card-plant {
  display: flex;
  flex-direction: column;
}

.group-plant {
  display: flex;
  flex-direction: row;
}

.photo-part {
  display: flex;
  flex: 3;
}

.photo-view {
  width: 200px;
  height: auto;

}

.info-part {
  display: flex;
  flex-direction: column;
  flex: 7;
}

.logo-img-plant {
  height: 50px;
}

.row1 {
  display: flex;
  flex-direction: row;
}

.row2 {
  display: flex;
  flex-direction: column;
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
