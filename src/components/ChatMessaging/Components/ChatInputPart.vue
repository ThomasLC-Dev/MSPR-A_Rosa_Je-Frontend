<template>
  <div class="chat-form">
    <div class="input-answer">
      <input type="text" v-model="message" placeholder="Votre message..." />
    </div>
    <div class="btn-answer">
      <button class="btn-validate" @click="sendMessage()">Envoyer</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatInputPart",
  data() {
    return {
      answer: '',
      feed: []
    }
  },
  methods: {
    displayAnswer() {
      this.feed.push(this.answer)
      this.answer = 'Lorem ipsum dolor sit amet';
    },
    sendMessage() {
      this.feed.push(this.message)
      this.message = '';
    }
  }
}
</script>

<style scoped>
input {
  width: 500px;
}

.chat-form {
  display: flex;
  justify-content: space-between;
  z-index: 3;
}

@media (max-width: 1000px) {
  .chat-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 3;
  }
}
</style>