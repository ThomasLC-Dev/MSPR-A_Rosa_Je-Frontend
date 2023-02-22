<template>
  <div class="main-container">
    <h1>MES PLANTES</h1>
    <!-- Bouton pour accès versNOUVELLE PAGE !!! -->
    <div class="add-button">
      <a href="/src/components/Plants/AddNewPlantsPage.vue">
        <img src="../../assets/Logo/add-button.png" alt="ajouter une plante">
      </a>
    </div>
    <!-- Prevoir un container vide si pas de plantes enregistrées -->
    <div v-if="show">
      <EmptyPlant />
    </div>

    <!-- Sinon v-for sur une grosse Card qui affiche toutes les plantes -->
    <div v-else>
      <PlantCard />
    </div>
  </div>
</template>

<script>
import EmptyPlant from '@/components/Plants/EmptyPlant.vue';
import PlantCard from '@/components/Plants/PlantCard.vue';

export default {
    name:'PlantsPage',
    components: {
      EmptyPlant,
      PlantCard
    },
    data: {
      show: true,
    }
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