<template>
  <div class="chat-form">
    <input class="text-input" type="text" v-model="message" />
    <button class="btn-validate" @click="sendMessage()">Envoyer</button>
  </div>
  <div v-bind:title="message" v-for="text in feed" :key="text">
    <!-- <img src="@/assets/PeopleTalking/Speech-Bubble-Right.png" alt="" class="speechBubbleRight"> -->
    <p class="message">
      {{ text }}
    </p>
  </div>
</template>

<script>
import CustomerMessage from "../Components/CustomerMessage.vue"

export default {
  name: "CustomerMessage",
  components: {
    CustomerMessage
  },
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

.message {
  padding-right: 50px;
  text-align: right;
  font-size: 24px;
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

  .message {
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
