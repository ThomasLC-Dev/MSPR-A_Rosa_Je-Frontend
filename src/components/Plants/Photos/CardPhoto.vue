<template>
  <div class="card">
    <img :src="imageSrc" class="card-photo" />
    <img class="delete-button" src="../../../assets/Logo/delete-button.png" alt="Suppression de l'image"
      @click="deletePhoto">
  </div>
</template>

<script>
export default {
  name: "CardPhoto",
  props: {
    photoIndex: Number,
    imageSrc: String
  },
  methods: {
    deletePhoto() {
      this.$emit('delete-photo', { photoIndex: this.photoIndex });
    },
  }
}

</script>

<style scoped>
.card {
  overflow-y: hidden;
  display: flex;
  height: 201px;
  width: auto;
  align-items: center;
  background-color: var(--main-bg-color);
  border-radius: 10px;
  border: 2px solid var(--main-container-border);
  margin: 5px;
  z-index: 1;
}

.card-photo {
  height: 200px;
  width: 100px;
  border-radius: 10px;
  z-index: 5;
}

.delete-button {
  display: flex;
  position: relative;
  padding-left: 10px;
  height: 15px;
  width: 15px;
  right: 5px;
  bottom: 5px;
  z-index: 10;
}
</style>
