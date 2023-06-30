<template>
  <div class="chat-answer">
  <button class="btn-validate" @click="displayAnswer()">Voir les réponses</button>
</div>
<div v-bind:title="answer" v-for="text in feed">
  <p class="answer">
    {{ text }}
  </p>
</div>
</template>

<script>
import ChatWindow from "../Components/ChatWindow.vue"
import GuardianMessage from "../Components/GuardianMessage.vue"

export default {
  name: "GuardianMessage",
  components: {
		GuardianMessage
	},
  data(){
    return{
      answer: '',
      feed:[]
    }
  },
  methods:{
    displayAnswer(){
      this.feed.push(this.answer)
      this.answer = 'Lorem ipsum dolor sit amet';
    }
  }
}
</script>

<style scoped>

.chat-answer{
  margin-top:1em;
}


.answer{
  font-size: 24px;
  justify-content: space-around;
	z-index: 9;
	margin: 10px;
	margin-left: 10%;
	margin-top: -12%;
}

</style>
