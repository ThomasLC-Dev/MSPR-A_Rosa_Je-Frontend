<template>
  <div class="main-container">
    <h1>Ajouter une plante</h1>

    <form id="formAddPlant" @submit.prevent="newPlant">
      <div class="form-field">
        <label for="plantName">Nom de plante : </label>
        <input
          v-model="latinOrVerna"
          type="text"
          placeholder="Nom vernaculaire ou latin"
        />
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
        <input
          v-model="lowerTemp"
          type="number"
          id="minTemp"
          placeholder="Valeur"
        />
      </div>

      <div class="form-field">
        <label for="plantMaxTemp">T°C maximale : </label>
        <input
          v-model="higherTemp"
          type="number"
          id="maxTemp"
          placeholder="Valeur"
        />
      </div>

      <div class="form-field">
        <label for="plantWaterQuantity">Quantité d'eau : </label>
        <input
          v-model="wateringQuantity"
          type="number"
          placeholder="Volume d'eau à verser"
        />
      </div>

      <div class="form-field">
        <label for="plantWateringFrequency">Fréquence arrosage : </label>
        <select v-model="wateringFrequency" id="wateringSelect">
          <option value="">Nombre</option>
        </select>
      </div>

      <div class="form-field">
        <label for="plantWateringType">Type arrosage : </label>
        <input
          v-model="wateringContainer"
          type="text"
          placeholder="Contenant à utiliser"
        />
      </div>

      <div class="form-field">
        <label for="plantPhoto">Ajouter une photo (maxi 4) : </label>
        <button class="addPlant" @click="goToView(routePhotoPage)">
          Prendre une photo
        </button>
        <div class="addPhotos">
          <!-- <input v-model="plantsPhoto" type="image" /> -->
          <input class="plantsPhoto" type="file" ref="fileInput" accept="image/*" @change="onFilePicked" />
          <div class="delete-button">
            <i class="material-icons">delete</i>
          </div>

          <!-- <input v-model="plantsPhoto" type="image" /> -->
          <input class="plantsPhoto" type="file" ref="fileInput" accept="image/*" @change="onFilePicked" />
          <div class="delete-button">
            <i class="material-icons">delete</i>
          </div>

          <!-- <input v-model="plantsPhoto" type="image" /> -->
          <input class="plantsPhoto" type="file" ref="fileInput" accept="image/*" @change="onFilePicked" />
          <div class="delete-button">
            <i class="material-icons">delete</i>
          </div>

          <!-- <input v-model="plantsPhoto" type="image" /> -->
          <input class="plantsPhoto" type="file" ref="fileInput" accept="image/*" @change="onFilePicked" />
          <div class="delete-button">
            <i class="material-icons">delete</i>
          </div>
        </div>
      </div>

      <div class="form-field">
        <label for="plantLight">Consignes d'entretien : </label>
        <textarea
          v-model="customerAdvice"
          type="text"
          id="maintenanceInstructions"
        >
        </textarea>
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
import { getToken, config, getCurrentUserId } from '../../../api.config';

export default {
  name: "AddNewPlantsPage",
  data() {
    return {

      attachementFile: {
        id: 6,
        type: "plant",
        role: "Customer",
      },

      latinOrVerna: "",
      sunLight: "",
      lowerTemp: "",
      higherTemp: "",
      wateringQuantity: "",
      wateringFrequency: "",
      wateringContainer: "",
      customerAdvice: "",
      botanistAdvice: "",
      plantsPhoto: [],
      routePhotoPage: "camera",
    };
  },
  methods: {
    goToView(path) {
      this.$router.push({ name: path });
    },
    newPlant() {
      fetch(config.apiBase + config.endpoints.plantsPath, {
        method: 'POST',
        headers: {
          Authorization: "Bearer " + getToken(),
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
            advises: this.botanistAdvice,
            description: this.customerAdvice,
            name: this.latinOrVerna,
            userId: getCurrentUserId()
        })
      })
        .then(res => this.goToView("plants"));
    },
    // onSubmit(e) {
    //   const file = this.$refs.file.files[0];
      
    //   if (!file) {
    //     e.preventDefault();
    //     alert('No file chosen');
    //     return;
    //   }
      
    //   if (file.size > 1024 * 1024) {
    //     e.preventDefault();
    //     alert('File too big (> 1MB)');
    //     return;
    //   }
      
    //   alert('File OK');
    // },

    onPickFile() {
      this.$refs.fileInput.click()
    },
    onFilePicked(event) {
      const files = event.target.files
      let filename = files[0].name
      const fileReader = new FileReader()
      fileReader.addEventListener('load', () => {
        this.imageUrl = fileReader.result
      })
      fileReader.readAsDataURL(files[0])
      this.image = files[0]
    },
  },
}
</script>

<style scoped>
@import "https://fonts.googleapis.com/icon?family=Material+Icons";

label {
  font-weight: lighter;
  color: var(--main-title-h1);
}

label[for="plantWateringType"],
label[for="plantMinTemp"] {
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

.main-container {
  align-items: start;
}

.addPlant {
  display: flex;
  position: relative;
  left: 72%;
  bottom: 22px;
  width: 80px;
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
  .main-container {
    align-items: center;
  }

  .form-field {
    flex-direction: row;
    margin-bottom: 10px;
  }

  .form-field label {
    display: inline-block;
    width: 200px;
    text-align: left;
  }

  .btn-validate,
  .btn-reset {
    display: flex;
    justify-content: center;
    position: relative;
    left: 75%;
  }

  .addPlant {
    display: flex;
    left: -25px;
    top: 0px;
    height: 40px;
  }
}

@media screen and (min-width: 1000px) and (max-width: 1200px) {
  .addPhotos {
    right: 100px;
  }

  .addPlant {
    display: flex;
    left: 350px;
    top: 15px;
  }
}
</style>
