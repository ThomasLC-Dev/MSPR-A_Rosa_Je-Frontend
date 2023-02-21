<template>
  <div class="main-container">
    <h1>Ajouter une plante</h1>

    <div class="form-field">
      <label for="plantName">Nom de plante : </label>
      <input type="text" placeholder="Nom vernaculaire ou latin">
    </div>

    <div class="form-field">
      <label for="plantLight">Ensoleillement : </label>
      <select id="lightSelect">
        <option value="">Choix</option>
        <option value="sun">Soleil</option>
        <option value="midShadow">Mi-Ombre</option>
        <option value="fullShadow">Ombre</option>
      </select>
    </div>
    
    <div class="form-field">
      <label for="plantMinTemp">T°C minimale : </label>
      <input type="number" placeholder="Valeur">
    </div>

    <div class="form-field">
      <label for="plantMaxTemp">T°C maximale : </label>
      <input type="number" placeholder="Valeur">
    </div>

    <div class="form-field">
      <label for="plantWaterQuantity">Quantité d'eau : </label>
      <input type="number" placeholder="Volume d'eau à verser">
    </div>

    <div class="form-field">
      <label for="plantWateringFrequency">Fréquence arrosage : </label>
      <select id="wateringSelect">
        <option value="">Nombre</option>
      </select>
    </div>

    <div class="form-field">
      <label for="plantWateringType">Type arrosage : </label>
      <input type="text" placeholder="Contenant à utiliser">
    </div>

    <div class="form-field">
      <label for="plantPhoto">Ajouter une photo (maxi 4) : </label>
      <input type="image">
      <img src="../../assets/Logo/add-button.png" alt="ajouter une plante">
      <div class="delete-button">
        <i class="material-icons">delete</i>
      </div>
    </div>

    <div class="form-field">
      <label for="plantLight">Consignes d'entretien : </label>
      <input type="text" id="maintenanceInstructions">
    </div>

    <!-- TODO 
      <div class="buttongroup">
      POUR ÉCRANS PC → media queries
      </div>
    -->

    <div>
      <button class="btn-validate">Enregistrer</button>
    </div>

    <div>
      <button class="btn-reset">Annuler</button>
    </div>
    
  </div>
</template>

<script>
export default {
  name:'AddNewPlantsView',
}

</script>

<style scoped>
@import "https://fonts.googleapis.com/icon?family=Material+Icons";

</style>