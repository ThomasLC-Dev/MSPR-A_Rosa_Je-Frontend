<template>
  <div class="guardian-answer">
    <div v-bind:title="guardianAnswer" v-for="guardianText in feed" :key="guardianText">
      <p class="guardian-text">
        {{ guardianText }}
        EXEMPLE DE MESSAGE ENVOYÉ PAR LE GARDIEN !
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "GuardianMessage",
  data() {
    return {
      guardianAnswer: '',
      feed: []
    }
  },
  methods: {
    displayAnswer() {
      this.feed.push(this.guardianAnswer)
      this.guardianAnswer = 'Lorem ipsum dolor sit amet';
    }
  }
}
</script>

<style scoped>
.guardian-answer {
  display: flex;
  align-items: flex-end;
  width: 80%;
  height: 50px;
  background-color: lightblue;
  font-size: 24px;
  z-index: 3;
  margin: 5px;
  float: right;
}
</style>
