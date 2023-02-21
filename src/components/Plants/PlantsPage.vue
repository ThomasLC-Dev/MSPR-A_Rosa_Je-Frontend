<template>
  <div class="main-container">
    <h1>MES PLANTES</h1>
    <!-- Bouton pour accès vers MODALE ou NOUVELLE PAGE !!! -->
    <div class="add-button">
      <a href="/src/components/Plants/AddNewPlantsPage.vue">
        <img src="../../assets/Logo/add-button.png" alt="ajouter une plante">
      </a>
    </div>
    <!-- Prevoir un container vide si pas de plantes enregistrées -->

    <!-- Sinon v-for sur une grosse Card qui affiche toutes les plantes -->
  </div>
</template>

<script>
import AddNewPlantsPage from '/src/components/Plants/AddNewPlantsPage';
export default {
    name:'PlantsPage',
    components: 
      AddNewPlantsPage,
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