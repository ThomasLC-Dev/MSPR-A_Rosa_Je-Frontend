<template>
  <div class="chat-window">
    <GuardianMessage />
    <CustomerMessage />
    <GuardianMessage />
    <CustomerMessage />
    <GuardianMessage />
    <CustomerMessage />
    <ChatInputPart />
  </div>
</template>

<script>
import CustomerMessage from "./CustomerMessage.vue"
import GuardianMessage from "./GuardianMessage.vue"
import ChatInputPart from './ChatInputPart.vue'

export default {
  name: "ChatWindow",
  components: {
    CustomerMessage,
    GuardianMessage,
    ChatInputPart
  },
}
</script>

<style scoped>
.chat-window {
  border: 2px solid var(--main-text);
  border-radius: 10px;
  padding: 15px;
  background-color: var(--menu-button-diselected-background);
  height: 100vh;
  width: 80%;
  margin-bottom: 2em;
  display: flex;
  align-content: flex-end;
  flex-direction: column-reverse;
  margin-top: 1em;
}
</style>
