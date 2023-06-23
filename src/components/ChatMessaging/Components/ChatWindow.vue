<template>
  <div class="chat-window">
    <div class="chat-form">
      <input class="text-input" type="text" v-model="message" />
      <button class="btn-validate" @click="sendMessage()">Envoyer</button>
    </div>
    <div class="message">
      <p v-bind:title="message" v-for="text in feed">
        {{ text }}
      </p>
    </div>
  </div>
</template>

<script>
import ChatWindow from "../Components/ChatWindow.vue"
import UserText from "./CustomerMessage.vue"

export default {
  name: "ChatWindow",
  components: {
		ChatWindow
	},
  data(){
    return{
      message: '',
      feed:[]
    }
  },
  methods:{
    sendMessage(){
      this.feed.push(this.message)
      this.message = '';
    }
  }
}
</script>

<style scoped>
.chat-window {
  border: 2px solid var(--main-text);
  border-radius: 10px;
  margin: 0px;
  padding: 15px;
  background-color: var(--menu-button-diselected-background);
  height: 100vh;
  margin-bottom: 2em;
  display: flex;
  align-content: flex-end;
  flex-wrap: wrap;
  flex-direction: column-reverse;
  margin-top: 1em;
}

.chat-form{
  margin-top:1em;
}

.text-input{
  margin-right: 1em;
  width : 70vh;
}

.message{
  text-align: right;
}

</style>
