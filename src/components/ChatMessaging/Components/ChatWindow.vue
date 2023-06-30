<template>
  <div class="chat-window">
    <GuardianMessage />
    <CustomerMessage />
  </div>
</template>

<script>
import ChatWindow from "../Components/ChatWindow.vue"
import CustomerMessage from "./CustomerMessage.vue"
import GuardianMessage from "./GuardianMessage.vue"

export default {
  name: "ChatWindow",
  components: {
		ChatWindow,
    CustomerMessage,
    GuardianMessage
	},
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

</style>
