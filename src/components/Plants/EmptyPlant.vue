<template>
  <div class="noPlants">
    <h2>Vous n'avez pas encore enregistré de plantes à entretenir.</h2>
    <h2>Veuillez cliquer sur le bouton ajouter en haut à droite de la page.</h2>
  </div>
</template>

<script>
export default {
  name: 'EmptyPlant'
}
</script>

<style scoped>
h2 {
  color: var(--main-title-h2);
  margin-top: 20px;
  margin-bottom: 20px;
}

.noPlants {
  margin: 0 auto;
  text-align: center;
  border-radius: 10px;
  border: 2px solid var(--main-container-border);
}
</style>
