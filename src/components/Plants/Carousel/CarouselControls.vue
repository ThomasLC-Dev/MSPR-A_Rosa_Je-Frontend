<template>
  <button class="carousel-control left" @click="$emit('prev')">Prev</button>
  <button class="carousel-control right" @click="$emit('next')">Next</button>
</template>

<script>
export default {
  emits: ["prev", "next"],
};
</script>

<style scoped>
.carousel-control {
  border-radius: 20px;
  color: var(--btn-validate-text-color);
  border: 2px solid var(--btn-validate-border-color);
  background-color: var(--btn-validate-color);
  display: inline-block;
  position: absolute;
  height: 50px;
  width: 70px;
  top: calc(50% - 25px);
  cursor: pointer;
}

.left {
  left: 0;
  top: 350px;
}

.right {
  right: 0;
  top: 350px;
}
</style>
