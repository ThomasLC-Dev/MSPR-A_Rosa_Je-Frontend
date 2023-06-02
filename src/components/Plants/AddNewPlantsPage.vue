<template>
  <div class="main-container">
    <h1>Ajouter une plante</h1>

    <form id="formAddPlant" @submit.prevent="newPlant" @reset.prevent="backPage">
      <div class="form-field">
        <label for="plantName">Nom de plante : </label>
        <input v-model="latinOrVerna" type="text" class="inputField" placeholder="Nom vernaculaire ou latin" />
      </div>

      <div class="form-field">
        <label for="plantLight">Ensoleillement : </label>
        <select v-model="sunLight" id="lightSelect" class="inputField">
          <option value="">Choix</option>
          <option value="1">Soleil</option>
          <option value="2">Mi-Ombre</option>
          <option value="3">Ombre</option>
        </select>
      </div>

      <div class="form-field">
        <label for="plantMinTemp">T°C minimale : </label>
        <input v-model="lowerTemp" type="number" id="minTemp" class="inputField" placeholder="Valeur" />
      </div>

      <div class="form-field">
        <label for="plantMaxTemp">T°C maximale : </label>
        <input v-model="higherTemp" type="number" id="maxTemp" class="inputField" placeholder="Valeur" />
      </div>

      <div class="form-field">
        <label for="plantWaterQuantity">Quantité d'eau (mL) : </label>
        <input v-model="wateringQuantity" type="number" step="0.1" class="inputField"
          placeholder="Volume d'eau à verser" />
      </div>

      <div class="form-field">
        <label for="plantWateringFrequency">Fréquence d'arrosage : </label>
        <select v-model="wateringFrequency" id="wateringSelect" class="inputField">
          <option value="">Choix</option>
          <option value="1">1 fois/jour</option>
          <option value="2">1 fois/semaine</option>
          <option value="3">2 fois/semaine</option>
        </select>
      </div>

      <div class="form-field">
        <label for="plantWateringType">Type arrosage : </label>
        <input v-model="wateringContainer" type="text" class="inputField" placeholder="Contenant à utiliser" />
      </div>

      <div class="form-field">
        <label for="plantPhoto">Ajouter une photo : </label>

        <img class="addPlant" src="./../../assets/Logo/add-button.png" alt="Ajout d'une photo" @click="openPhotoPage"
          v-if="plantsPhoto.length < 4" />
      </div>

      <div class="cardList">
        <CardPhoto v-for="(photo, index) in plantsPhoto" :key="index" :imageSrc="photo" :photoIndex="index"
          @delete-photo="deletePhoto" />
      </div>

      <div class="form-field">
        <label for="plantLight">Consignes d'entretien : </label>
        <textarea v-model="customerAdvice" type="text" id="maintenanceInstructions"></textarea>
      </div>

      <div class="button-group">
        <div>
          <button class="btn-reset" type="reset">Annuler</button>
        </div>
        <div>
          <button @submit="onSubmit" class="btn-validate" type="submit">Enregistrer</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { getToken, config, getCurrentUserId } from '../../../api.config';
import CardPhoto from './Photos/CardPhoto.vue';

export default {
  name: "AddNewPlantsPage",
  components: {
    CardPhoto,
  },
  data() {
    return {
      latinOrVerna: "",
      sunLight: "",
      lowerTemp: null,
      higherTemp: null,
      wateringQuantity: null,
      wateringFrequency: "",
      wateringContainer: null,
      customerAdvice: "",
      botanistAdvice: "",
      plantsPhoto: [],
      routePhotoPage: "camera",
      routeMyPlants: 'plants',
    };
  },
  methods: {
    addPhotoToArray(event) {
      if (event.data.image) {
        this.plantsPhoto.push(event.data.image);

        window.removeEventListener('message', this.addPhotoToArray);
      }
    },
    openPhotoPage() {
      let photoWindow = window.open("http://localhost:8080/camera", "", "popup");

      window.addEventListener('message', this.addPhotoToArray);
    },
    newPlant() {

      fetch(config.apiBase + config.endpoints.plantsPath, {
        method: 'POST',
        headers: {
          Authorization: "Bearer " + getToken(),
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: this.latinOrVerna,
          advises: this.botanistAdvice,
          description: this.customerAdvice,
          higherTemp: this.higherTemp,
          lowerTemp: this.lowerTemp,
          sunLight: this.sunLight,
          wateringContainer: this.wateringContainer,
          wateringFrequency: this.wateringFrequency,
          wateringQuantity: this.wateringQuantity,
          userId: getCurrentUserId()
        })
      })
        .then(res => res.json())
        .then(data => {
          this.uploadImages(data.id);
        })
        .then(() => this.goToView('plants'));
    },
    async uploadImages(plantId) {
      let tempPhotos = this.plantsPhoto.map((value) => value);
      for (let plantImage of tempPhotos) {
        const formData = new FormData();
        const file = this.dataURLtoFile(plantImage, "image.jpeg");
        formData.append('file', file);
        await fetch(config.apiBase + config.endpoints.attachmentFilesPath + "/upload?type=plant&role=Customer&id=" + plantId, {
          method: 'POST',
          headers: {
            Authorization: "Bearer " + getToken()
          },
          body: formData
        });
      }
    },
    dataURLtoFile(dataurl, filename) {
      var arr = dataurl.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[arr.length - 1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new File([u8arr], filename, { type: mime });
    },
    onSubmit(e) {
      const file = this.$refs.file.files[0];
      if (!file) {
        e.preventDefault();
        alert('Aucun fichier choisi');
        return;
      }
      if (file.size > 1024 * 1024) {
        e.preventDefault();
        alert('Fichier trop volumineux (>1 Mo)');
        return;
      }
      alert('Fichiers OK');
    },
    deletePhoto(payload) {
      this.plantsPhoto.splice(payload.photoIndex, 1);
    },
    backPage() {
      this.goToView('plants')
    },
    goToView(path) {
      this.$router.push({ name: path })
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

.form-field {
  margin: 5px;
}

.inputField {
  width: 200px;
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

input[type="file"] {
  display: flex;
  border-radius: 30px;
}

.main-container {
  height: auto;
  align-items: start;
}

.addPlant {
  display: flex;
  position: relative;
  margin-top: 5px;
  margin-bottom: 5px;
  left: 80%;
  bottom: 25px;
  width: 30px;
}

#formAddPlant {
  display: flex;
  flex-direction: column;
  align-items: start;
  margin: 10px;
}

#minTemp,
#maxTemp {
  width: 70px;
}

#maintenanceInstructions {
  text-align: left;
  padding: 0.4em;
  padding-bottom: 95px;
  width: 250px;
}

.cardList {
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  justify-content: space-around;
  flex: auto;
}

@media screen and (min-width: 1000px) {
  .main-container {
    height: auto;
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

  .addPlant {
    display: flex;
    left: -160px;
    top: 20px;
    height: 30px;
    width: 30px;
  }
}
</style>
