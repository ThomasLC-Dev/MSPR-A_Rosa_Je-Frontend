<template>
  <div class="card-plant">
    <div class="row1">
      <p type="text" class="plant-subtitle">{{ plantName }}</p>
      <div class="delete-btn" @click="deletePlant()">
        <img src="@/assets/Logo/delete-button.png" alt="Supprimer une plante" title="Supprimer une plante" />
      </div>
    </div>

    <div class="group-plant">
      <div class="photo-part">
        <CarousselPlant :slides="slides" :interval="6000" controls indicators />
      </div>

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
    </div>

    <div class="advises-part">
      <div class="form-field">
        <p type="text" class="plant-advise-subtitle">Consignes d'entretien : </p>
        <input type="text" class="maintenanceInstructions" :disabled="modificationAllowed == 1"
          v-model="customerAdvise" />
      </div>
      <div class="form-field">
        <p type="text" class="plant-advise-subtitle">Conseil d'un Botaniste :</p>
        <input type="text" class="botanistAdvise" :disabled="modificationAllowed == 1" v-model="botanistAdvise" />
      </div>
    </div>

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
import { config, getToken } from '../../../api.config'

export default {
  name: 'PlantCard',
  components: {
    CarousselPlant
  },
  props: {
    plantIdProp: String,
    plantNameProp: String,
    customerAdviseProp: String,
    botanistAdviseProp: String,
    slidesProp: []
  },
  data: () => ({
    plantId: '',
    plantName: '',
    customerAdvise: '',
    botanistAdvise: '',
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
    this.plantId = this.plantIdProp;
    this.plantName = this.plantNameProp;
    this.customerAdvise = this.customerAdviseProp;
    this.botanistAdvise = this.botanistAdviseProp;
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
        "plantName": this.plantName,
        "description": this.customerAdvise,
        "advises": this.botanistAdvise
      }

      fetch(config.apiBase + config.endpoints.plantsPath + '/' + this.plantId, {
        method: 'PUT',
        headers: {
          Authorization: 'Bearer ' + getToken(),
          "Content-Type": "application/json"
        },
        body: JSON.stringify(plantData)
      })
        .then(() => this.$emit('onUpdatePlant'))
    },
    deletePlant() {
      fetch(config.apiBase + config.endpoints.plantsPath + '/' + this.plantId, {
        method: "DELETE",
        headers: { Authorization: 'Bearer ' + getToken() }
      })
        .then(() => this.$emit('onDeletePlant'))
    }
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

.row1>.delete-btn {
  width: 10%;
}

.delete-btn>img {
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

.advises-part {
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

.plant-advise-subtitle {
  align-items: center;
  color: var(--main-title-h2);
  left: 0px;
  font-size: x-large;
  font-weight: bold;
  margin-bottom: 8px;
}

.maintenanceInstructions,
.botanistAdvise {
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

  .advises-part {
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
  .botanistAdvise {
    width: 100%;
  }
}
</style>
