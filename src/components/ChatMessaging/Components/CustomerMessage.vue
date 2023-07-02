<template>
  <div v-bind:title="message" v-for="customerText in feed" :key="customerText">
    <p class="customer-text">
      {{ customerText }}
      EXEMPLE DE MESSAGE ENVOYÉ PAR LE CLIENT !
    </p>
  </div>
</template>

<script>
export default {
  name: "CustomerMessage",
  data() {
    return {
      message: '',
      feed: []
    }
  },
  methods: {
    sendMessage() {
      this.feed.push(this.message)
      this.message = '';
    }
  }
}
</script>

<style scoped>
.chat-form {
  margin-top: 1em;
}

.text-input {
  margin-right: 1em;
  width: 70vh;
}

.customer-answer {
  padding-right: 50px;
  text-align: right;
  font-size: 24px;
  width: 90%;
  justify-content: space-around;
  z-index: 9;
  margin: 10px;
  margin-left: 10%;
  margin-top: -12%;
}

.speechBubbleRight {
  width: 50%;
  display: flex;
  position: relative;

}

@media (max-width : 1000px) {

  .speechBubbleRight {
    display: none;

  }

  .customer-answer {
    display: flex;
    justify-content: space-around;
    z-index: 9;
    margin: 15px;
    margin-left: 15%;
    border: 2px solid green;
    padding: 10%;
    font-size: 24px;
  }
}
</style>
