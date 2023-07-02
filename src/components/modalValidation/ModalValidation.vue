<template>
  <div class="main-container" v-if="showModal">
    <div class="modal-content">
      <span class="close" @click="showModal = false">&times;</span>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: false,
    };
  },
};
</script>

<style scoped></style>
