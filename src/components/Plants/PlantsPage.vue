<template>
  <div class="plants-page">
    <div class="plant-top-menu">
      <div class="main-title">
        <h1>MA LISTE DE PLANTES</h1>
      </div>
      <div class="group-button-menu">
        <div class="keeper-button">
          <img src="@/assets/Logo/keeper.png" v-if="!show" @click="goToView(routeFollowing)" alt="Réaliser le suivi" />
        </div>

        <div class="follow-button">
          <img src="@/assets/Logo/following-plant.png" v-if="!show" @click="goToView(routeKeepering)"
            alt="Proposer un créneau de gardiennage" />
        </div>

        <div class="add-button">
          <img src="@/assets/Logo/add-button.png" @click="goToView(routeAddNewPlant)" alt="Ajouter une plante" />
        </div>

      </div>
    </div>

    <div v-if="show" class="emptyPosition">
      <EmptyPlant />
    </div>

    <div v-else class="plant-card">
      <!-- In serer ici un v-for pour boucler sur les plantes et
      les champs correspondant remplis par plant.value -->
      <PlantCard />
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
  data: () => ({
    show: false,
    routeFollowing: 'addnewfollowing',
    routeKeepering: 'addnewkeepering',
    routeAddNewPlant: 'addnewplants'

  }),
  methods: {
    goToView(path) {
      this.$router.push({ name: path })
    }
  }
}
</script>

<style scoped>
.plants-page {
  height: 100%;
}

.plant-top-menu {
  display: flex;
  flex-direction: row;
}

.main-title {
  display: flex;
  flex-direction: row;
  flex: 8;
  align-content: center;
  align-items: center;
  text-align: center;
}

.group-button-menu {
  display: flex;
  flex-direction: row;
  flex: 2;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  text-align: center;

}

.add-button>img {
  width: 50px;
  height: auto;
  cursor: pointer;
}

.follow-button>img {
  width: auto;
  height: 50px;
  cursor: pointer;
}

.keeper-button>img {
  width: auto;
  height: 50px;
  cursor: pointer;
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

.plant-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--main-bg-color);
  border-radius: 10px;
  border: 2px solid var(--main-container-border);
  padding: 50px 20px 30px 20px;
  margin-top: 40px;
  height: 80%;
}

@media (max-width: 1000px) {
  .main-title {
    flex: 1;
    font-size: large;
  }
}
</style>
