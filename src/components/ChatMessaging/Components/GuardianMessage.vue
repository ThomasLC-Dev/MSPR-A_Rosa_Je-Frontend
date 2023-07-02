<template>
  <div v-bind:title="answer" v-for="text in feed" :key="text">
    <p class="guardian-answer">
      {{ text }}
      EXEMPLE DE MESSAGE ENVOYÉ PAR LE GARDIEN !
    </p>
  </div>
</template>

<script>
export default {
  name: "GuardianMessage",
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
    }
  }
}
</script>

<style scoped>
.guardian-answer {
  font-size: 24px;
  justify-content: space-around;
  z-index: 9;
  margin: 10px;
  margin-left: 10%;
  margin-top: -12%;
}
</style>
