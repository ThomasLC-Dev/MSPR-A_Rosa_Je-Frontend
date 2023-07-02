<template>
  <div class="customer-answer">
    <div v-bind:title="customerAnswer" v-for="customerText in feed" :key="customerText">
      <p class="customer-text">
        {{ customerText }}
        EXEMPLE DE MESSAGE ENVOYÉ PAR LE CLIENT !
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomerMessage",
  data() {
    return {
      customerAnswer: '',
      feed: []
    }
  },
  methods: {
    sendMessage() {
      this.feed.push(this.customerAnswer)
      this.customerAnswer = '';
    }
  }
}
</script>

<style scoped>
.customer-answer {
  display: flex;
  align-items: flex-start;
  width: 80%;
  height: 50px;
  background-color: lightpink;
  font-size: 24px;
  z-index: 3;
  margin: 5px;
  float: left;
}
</style>
