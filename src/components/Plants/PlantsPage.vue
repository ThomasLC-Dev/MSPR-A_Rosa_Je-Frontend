<template>
  <div class="plants-page">
    <div class="plant-top-menu">
      <div class="main-title">
        <h1>MA LISTE DE PLANTES</h1>
      </div>
      <div class="group-button-menu">
        <div class="guardian-tracking-button">
          <img src="@/assets/Logo/keeper.png" v-if="!show" @click="goToView(routeGuardianTracking)"
            alt="Réaliser le suivi" title="Réaliser le suivi" />
        </div>
        <div class="request-guard-slot-button">
          <img src="@/assets/Logo/following-plant.png" v-if="!show" @click="goToView(routeRequestGuardSlot)"
            alt="Proposer un créneau de gardiennage" title="Créer un créneau" />
        </div>
        <div class="see-user-slots-button">
          <img src="@/assets/Logo/following-plant.png" v-if="!show" @click="goToView(routeUserSlots)"
            alt="Consulter les créneaux de gardiennage" title="Mes créneaux" />
        </div>
        <div class="add-button">
          <img src="@/assets/Logo/add-button.png" @click="goToView(routeAddNewPlant)" alt="Ajouter une plante"
            title="Ajouter une plante" />
        </div>
      </div>
    </div>

    <div v-if="show" class="emptyPosition">
      <EmptyPlant />
    </div>

    <div v-else>
      <PlantCard class="plant-card" v-for="plant in plants" :plant-name-prop="plant.name"
        :customer-advice-prop="plant.description" :botanist-advice-prop="plant.advises"
        :slides-prop="plant.imagesUrl.map((image) => image.imageUrl)" />
    </div>
  </div>
</template>

<script>
import EmptyPlant from '@/components/Plants/EmptyPlant.vue';
import PlantCard from '@/components/Plants/PlantCard.vue';
import { config, getCurrentUserId, getToken } from '../../../api.config';

export default {
  name: 'PlantsPage',
  components: {
    EmptyPlant,
    PlantCard,
  },
  data: () => ({
    show: false,
    routeRequestGuardSlot: 'requestguardslot',
    routeGuardianTracking: 'addnewguardiantracking',
    routeAddNewPlant: 'addnewplants',
    routeUserSlots: 'userslots',
    plants: []
  }),
  created() {
    fetch(config.apiBase + config.endpoints.plantsPath + "?user=" + getCurrentUserId(), {
      method: "GET",
      headers: { Authorization: 'Bearer ' + getToken() }
    })
      .then(res => res.json())
      .then(data => this.plants = data)
  },
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



.group-button-menu {
  display: flex;
  flex-direction: row;
  flex: 2;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  text-align: center;
  margin-top: 10px;
  gap: 10px;
}

.add-button>img,
.request-guard-slot-button>img,
.guardian-tracking-button>img,
.see-user-slots-button>img {
  width: auto;
  height: 50px;
  cursor: pointer;
  border: 1px solid var(--main-container-border);
  box-shadow: 5px 5px 6px 1px var(--main-container-border);
}



@media (max-width: 1000px) {
  .main-title {
    flex: 9;
    font-size: large;
  }

  .group-button-menu {
    flex: 1;
    gap: 5px;
  }

  .add-button>img,
  .request-guard-slot-button>img,
  .guardian-tracking-button>img,
  .see-user-slots-button>img {
    height: 35px;
  }

  .plant-card {
    border: 2px solid var(--main-container-border);
    padding: 20px 5px 10px 5px;
    margin-top: 20px;
    width: 100%;
    height: auto;
  }
}
</style>
