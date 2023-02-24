<template>
  <div class="main-container">
    <div>
      <div>
        <h1>MES PLANTES</h1>
      </div>

      <div class="follow-button">
        <a href="/src/components/Plants/AddNewKeeperingPage.vue">
          <img src="../../assets/Logo/following-plant.png" alt="Proposer un créneau de gardiennage" />
        </a>
      </div>

      <div class="add-button">
        <a href="/src/components/Plants/AddNewPlantsPage.vue">
          <img src="../../assets/Logo/add-button.png" alt="ajouter une plante" />
        </a>
      </div>
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
import EmptyPlant from '@/components/Plants/EmptyPlant.vue'
import PlantCard from '@/components/Plants/PlantCard.vue'

export default {
  name: 'PlantsPage',
  components: {
    EmptyPlant,
    PlantCard
  },
  data() {
    return {
      show: false
    }
  }
}
</script>

<style scoped>
.add-button>a>img {
  position: absolute;
  width: 50px;
  height: auto;
  top: 25px;
  right: 25px;
}

.follow-button>a>img {
  position: absolute;
  width: auto;
  height: 50px;
  top: 25px;
  right: 95px;
}

.main-container {
  justify-content: center;
  align-items: center;
  height: 100%;
}

.emptyPosition {
  display: inline-block;
  margin-top: 100px;
}
</style>
