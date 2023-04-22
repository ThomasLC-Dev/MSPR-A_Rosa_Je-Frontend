<template>
  <div class="main-container">
    <h1>Page pour demander un creneau de gardiennage</h1>
    <form @submit.prevent="createSlot">
      <div class="form-field">
        <label for="startDate">Date de début : </label>
        <input v-model="startDate" type="date" placeholder="Date de début" />
      </div>
      <div class="form-field">
        <label for="endDate">Date de fin : </label>
        <input v-model="endDate" type="date" placeholder="Date de fin" />
      </div>
      <input class="btn-reset" type="reset" value="Annuler" />
      <input class="btn-validate" type="submit" value="Enregistrer" />
    </form>
  </div>
</template>

<script>
import { config, getToken, getCurrentUserId } from '../../../api.config'

export default {
  name: 'RequestGuardSlotPage',
  data() {
    return {
      startDate: "",
      endDate: "",
      routeMyPlants: 'plants',
    }
  },
  methods: {
    createSlot() {
      fetch(config.apiBase + config.endpoints.slotsPath, {
        method: 'POST',
        headers: {
          Authorization: "Bearer " + getToken(),
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          startDate: this.startDate,
          endDate: this.endDate,
          userId: getCurrentUserId()
        })
      })
        .then(() => this.goToView('plants'));
    },
    goToView(path) {
      this.$router.push({name: path})
    },
  }

}

</script>

<style scoped></style>