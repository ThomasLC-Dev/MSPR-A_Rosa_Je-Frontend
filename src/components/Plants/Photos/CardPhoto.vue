<template>
  <div class="card">
    <h1>photo</h1>
    <img class="delete-button" src="../../../assets/Logo/delete-button.png" alt="Suppression de l'image"
      @click="deletePhoto">
  </div>
</template>

<script>
export default {
  name: "CardPhoto",
  methods: {
    deletePhoto() {
      this.$refs.fileupload.value = null;
    },
  }
}

</script>

<style scoped>
.card {
  overflow-y: hidden;
  display: flex;
  height: 200px;
  width: auto;
  align-items: center;
  background-color: var(--main-bg-color);
  border-radius: 20px;
  border: 2px solid var(--main-container-border);
  margin: 5px;
}

.delete-button {
  display: flex;
  position: relative;
  padding-left: 10px;
  height: 15px;
  right: 5px;
  bottom: 5px;
}
</style>
