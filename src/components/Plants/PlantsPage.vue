<template>
  <div class="main-container">
    <div>
      <h1>MES PLANTES</h1>
    </div>

    <div class="add-button">
      <a href="/src/components/Plants/AddNewPlantsPage.vue">
        <img src="../../assets/Logo/add-button.png" alt="ajouter une plante">
      </a>
    </div>

    <div>
      <div v-if="show" class="emptyPosition">
        <EmptyPlant />
      </div>

      <div v-else>
        <PlantCard />
      </div>
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
    data() {
      return {
        show: false,
      }
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

.main-container {
  justify-content: center;
  align-items: center;
  height: 100%;
  ;
}

.emptyPosition{
  display: inline-block;
  margin-top: 100px;
}
</style>