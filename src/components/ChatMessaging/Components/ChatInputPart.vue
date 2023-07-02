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
  width: 80%;
}

.chat-form {
  display: flex;
  justify-content: space-around;
  flex-direction: row;
}

.input-answer {
  flex: 3;
}

.btn-answer {
  flex: 1;
}
</style>