<template>
  <div class="main-container">
    <h1>MES PLANTES</h1>
    <!-- Bouton pour accès vers MODALE ou NOUVELLE PAGE !!! -->
    <div class="add-button">
      <img src="../../assets/Logo/add-button.png" alt="ajouter une plante">
    </div>
    <!-- Prevoir un container vide si pas de plantes enregistrées -->

    <!-- Sinon v-for sur une grosse Card qui affiche toutes les plantes -->
  </div>
</template>

<script>
export default {
    name:'PlantsPage',
}

</script>

<style scoped>
img{
  position: absolute;
  width: 50px;
  height: auto;
  top: 20px;
  right: 20px;
}
</style>