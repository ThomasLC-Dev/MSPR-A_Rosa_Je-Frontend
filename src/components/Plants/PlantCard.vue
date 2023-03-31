<template>
  <div class="card-plant">
    <!-- PARTIE TITRE PLANTE -->
    <div class="row1">
      <p type="text" class="plant-subtitle">{{ plantName }}</p>
      <div class="delete-button" onClick="">
        <img src="@/assets/Logo/delete-button.png" alt="Supprimer une plante" />
      </div>
    </div>
    <!-- FIN PARTIE TITRE PLANTE -->

    <!-- PARTIE PHOTO + CARACTERISTIQUES -->
    <div class="group-plant">
      <!-- PARTIE PHOTO SLIDE -->
      <div class="photo-part">
        <CarousselPlant :slides="slides" :interval="6000" controls indicators />
      </div>
      <!-- FIN PARTIE PHOTO SLIDE -->


      <!-- PARTIE INFO TECHNIQUE -->
      <div class="info-part">
        <div class="row2">
          <div class="row2-1">
            <div class="logo-field">
              <div class="logo-img-plant">
                <img src="@/assets/Logo/Ombre.png">
              </div>
              <select class="logo-field-plant" id="lightSelect" v-model="plant.sunlight"
                :disabled="modificationAllowed == 1">
                <option value="fullShadow">Ombre</option>
                <option value="sun">Soleil</option>
                <option value="midShadow">Mi-Ombre</option>
              </select>
            </div>
            <div class="logo-field">
              <div class="logo-img-plant">
                <img src="@/assets/Logo/quantite-eau.png">
              </div>
              <input type="text" v-model="plant.wateringQuantity" class="waterQuantity logo-field-plant"
                :disabled="modificationAllowed == 1" />
            </div>
          </div>
          <div class="row2-2">
            <div class="logo-field">
              <div class="logo-img-plant">
                <img src="@/assets/Logo/TemperatureBasse.png">
              </div>
              <input type="text" v-model="plant.lowerTemp" class="minTemp logo-field-plant"
                :disabled="modificationAllowed == 1" />
            </div>
            <div class="logo-field">
              <div class="logo-img-plant">
                <img src="@/assets/Logo/TemperatureHaute.png">
              </div>
              <input type="text" v-model="higherTemp" class="maxTemp logo-field-plant"
                :disabled="modificationAllowed == 1" />
            </div>
          </div>

          <div class="row2-3">
            <div class="logo-field">
              <div class="logo-img-plant">
                <img src="@/assets/Logo/watering-frequency.png">
              </div>
              <input type="text" v-model="plant.wateringFrequency" class="waterFrequency logo-field-plant"
                :disabled="modificationAllowed == 1" />
            </div>
            <div class="logo-field">
              <div class="logo-img-plant">
                <img src="@/assets/Logo/arrosage.png">
              </div>
              <input type="text" v-model="plant.wateringContainer" class="waterType logo-field-plant"
                :disabled="modificationAllowed == 1" />
            </div>
          </div>
        </div>
      </div>
      <!--FIN PARTIE INFO TECHNIQUE -->

    </div>
    <!-- FIN PARTIE PHOTO + CARACTERISTIQUES -->

    <!-- PARTIE CONSEILS -->
    <div class="advices-part">
      <div class="form-field">
        <p type="text" class="plant-advice-subtitle">Consignes d'entretien : </p>
        <input type="text" class="maintenanceInstructions" v-model="plant.customerAdvice"
          :disabled="modificationAllowed == 1" />
      </div>
      <div class="form-field">
        <p type="text" class="plant-advice-subtitle">Conseil d'un Botaniste :</p>
        <input type="text" class="botanistAdvice" v-model="plant.botanistAdvice" :disabled="modificationAllowed == 1" />
      </div>
    </div>
    <!-- FIN PARTIE CONSEILS -->

    <div class="button-group">
      <input class="btn-reset" type="reset" value="Annuler" />
      <input class="btn-validate" type="submit" value="Modifier" />
      <input class="btn-reset" type="reset" value="Annuler" v-show="modificationAllowed == 0" />
      <input class="btn-validate" type="submit" value="Modifier" @click="ModificationAllowed"
        v-show="modificationAllowed == 1" />
      <input class="btn-validate" type="submit" value="Enregistrer" @click="ModificationFinish"
        v-show="modificationAllowed == 0" />
    </div>
  </div>
</template>

<script>
import CarousselPlant from './Carousel/CarousselPlant.vue';

export default {
  name: 'PlantCard',
  components: {
    CarousselPlant
  },
  props: {
    plantNameProp: String,
    customerAdviceProp: String,
    botanistAdviceProp: String,
    slidesProp: []
  },
  data: () => ({

    plantName: '',
    customerAdvice: '',
    botanistAdvice: '',
    latinOrVerna: '',
    sunlight: '',
    lowerTemp: '',
    higherTemp: '',
    wateringQuantity: '',
    wateringFrequency: '',
    wateringContainer: '',
    slides: [],
  }),
  created() {
    this.plantName = this.plantNameProp;
    this.customerAdvice = this.customerAdviceProp;
    this.botanistAdvice = this.botanistAdviceProp;
    this.slides = this.slidesProp;
  },
  methods: {
    ModificationAllowed() {
      this.modificationAllowed = 0

    },
    ModificationFinish() {
      this.modificationAllowed = 1
      let plantData = {
        "plantName": this.plantNameProp,
        "customerAdvice": this.customerAdviceProp,
        "botanistAdvice": this.botanistAdviceProp,
        "slides": this.slidesProp
      }

      fetch(config.apiBase + config.endpoints.plantsPath + '/' + getCurrentPlantId(), {
        method: 'PUT',
        headers: {
          Authorization: 'Bearer ' + getToken(),
          "Content-Type": "application/json"
        },
        body: JSON.stringify(plantData)
      })
    },
  }
}
</script>

<style scoped>
.card-plant {
  display: flex;
  flex-direction: column;
}

.group-plant {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
}

.plant-subtitle {
  color: var(--main-title-h2);
  text-align: center;
  width: 100%;
  font-size: xx-large;
  font-weight: bold;
}

.photo-part {
  width: 35%;
}

.info-part {
  display: flex;
  flex-direction: column;
  width: 65%;
}

.row1 {
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
}

.row1>.delete-button {
  width: 10%;
}

.delete-button>img {
  display: flex;
  right: 0px;
  position: relative;
  width: 50px;
  height: auto;
  right: 0px;
}

.row2 {
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
}

.row2-1,
.row2-2,
.row2-3 {
  display: flex;
  flex-direction: row;
  margin: 2px 5px 2px 5px;
  gap: 10px;
}

.logo-field {
  display: flex;
  flex-direction: row;
  width: 50%;
  gap: 5px;
}

.logo-img-plant {
  text-align: center;
  height: 55px;
  width: 80px;
  border: 1px solid var(--btn-reset-border-color);
}

.logo-img-plant>img {
  height: 50px;
}

.logo-field-plant {
  width: 80%
}

.advices-part {
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-content: space-between;
}

.plant-advice-subtitle {
  color: var(--main-title-h2);
  left: 0px;
  width: 90%;
  font-size: x-large;
  font-weight: bold;
}

.maintenanceInstructions,
.botanistAdvice {
  width: 450px;
  height: 300px;
}

@media (max-width: 1000px) {
  .card-plant {
    display: flex;
    flex-direction: column;
  }

  .group-plant {
    flex-direction: column;
  }

  .row1 {
    width: 80%;
    display: inline-flex;
    margin-left: 20px;
  }

  .plant-subtitle {
    font-size: x-large;
    margin-bottom: 0px;
  }

  .delete-button>img {
    position: relative;
  }

  .photo-part {
    width: 100%;
  }

  .info-part {
    width: 100%;
  }

  .row2 {
    flex-direction: column;
  }

  .advices-part {
    flex-direction: column;
    justify-content: center;
    width: 90%;
  }

  .logo-field {
    margin-top: 5px;
    width: 80%;
  }

  .row2-1,
  .row2-2,
  .row2-3 {
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
  }

  .form-field {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .logo-field-plant {
    width: 90%
  }

  .maintenanceInstructions,
  .botanistAdvice {
    width: 100%;
  }

}
</style>
