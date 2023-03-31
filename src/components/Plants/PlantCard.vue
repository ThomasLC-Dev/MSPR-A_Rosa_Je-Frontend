<template>
  <div class="card-plant">
    <!-- PARTIE TITRE PLANTE -->
    <div class="row1">
      <p type="text" class="plant-subtitle">{{ plantName }}</p>
      <div class="delete-button" onClick="">
        <img src="@/assets/Logo/delete-button.png" alt="Supprimer une plante" title="Supprimer une plante" />
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
              <select class="logo-field-plant" id="lightSelect" :disabled="modificationAllowed == 1" v-model="sunlight">
                <option value="fullShadow">Ombre</option>
                <option value="sun">Soleil</option>
                <option value="midShadow">Mi-Ombre</option>
              </select>
            </div>
            <div class="logo-field">
              <div class="logo-img-plant">
                <img src="@/assets/Logo/quantite-eau.png">
              </div>
              <input type="text" class="waterQuantity logo-field-plant" :disabled="modificationAllowed == 1"
                v-model="wateringQuantity" />
            </div>
          </div>
          <div class="row2-2">
            <div class="logo-field">
              <div class="logo-img-plant">
                <img src="@/assets/Logo/TemperatureBasse.png">
              </div>
              <input type="text" class="minTemp logo-field-plant" :disabled="modificationAllowed == 1"
                v-model="lowerTemp" />
            </div>
            <div class="logo-field">
              <div class="logo-img-plant">
                <img src="@/assets/Logo/TemperatureHaute.png">
              </div>
              <input type="text" class="maxTemp logo-field-plant" :disabled="modificationAllowed == 1"
                v-model="higherTemp" />
            </div>
          </div>

          <div class="row2-3">
            <div class="logo-field">
              <div class="logo-img-plant">
                <img src="@/assets/Logo/watering-frequency.png">
              </div>
              <input type="text" class="waterFrequency logo-field-plant" :disabled="modificationAllowed == 1"
                v-model="wateringFrequency" />
            </div>
            <div class="logo-field">
              <div class="logo-img-plant">
                <img src="@/assets/Logo/arrosage.png">
              </div>
              <input type="text" class="waterType logo-field-plant" :disabled="modificationAllowed == 1"
                v-model="wateringContainer" />
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
        <input type="text" class="maintenanceInstructions" :disabled="modificationAllowed == 1"
          v-model="customerAdvice" />
      </div>
      <div class="form-field">
        <p type="text" class="plant-advice-subtitle">Conseil d'un Botaniste :</p>
        <input type="text" class="botanistAdvice" :disabled="modificationAllowed == 1" v-model="botanistAdvice" />
      </div>
    </div>
    <!-- FIN PARTIE CONSEILS -->

    <div class="button-group">
      <input class="btn-reset" type="reset" value="Annuler" @click="ModificationReset"
        v-show="modificationAllowed == 0" />
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
    id: '',
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
    modificationAllowed: 1,
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
    ModificationReset() {
      this.modificationAllowed = 1
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
  justify-content: space-around;
  width: 100%;
  height: 100%;
  margin: 20px;
}

.plant-subtitle {
  color: var(--main-title-h2);
  text-align: center;
  width: 100%;
  font-size: xx-large;
  font-weight: bold;
}

/* .photo-part {} */

.info-part {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.row1 {
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
  align-items: center;
  width: 100%;
}

.row1>.delete-button {
  width: 10%;
}

.delete-button>img {
  display: flex;
  right: 0px;
  position: relative;
  width: 30px;
  height: auto;
  right: 0px;
  cursor: pointer;
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
  margin: 5px 8px 5px 8px;
  gap: 20px;
}

.logo-field {
  display: flex;
  flex-direction: row;
  width: 50%;
  height: 60px;
  gap: 10px;
}

.logo-img-plant {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 90px;
  border: 1px solid var(--btn-reset-border-color);
}

.logo-img-plant>img {
  height: 50px;
}

.logo-field-plant {
  width: 80%
}

.logo-field>input {
  margin-bottom: 0px;
}

.advices-part {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  margin: 20px;
}

.form-field {
  align-items: center;
}

.plant-advice-subtitle {
  align-items: center;
  color: var(--main-title-h2);
  left: 0px;
  font-size: x-large;
  font-weight: bold;
  margin-bottom: 8px;
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
