<template>
  <div class="chat-window scroller">
    <div class="customerMessages">
      <CustomerMessage />
    </div>
    <div class="guardianMessages">
      <GuardianMessage />
    </div>
    <div class="customerMessages">
      <CustomerMessage />
    </div>
    <div class="guardianMessages">
      <GuardianMessage />
    </div>
    <div class="customerMessages">
      <CustomerMessage />
    </div>
    <div class="guardianMessages">
      <GuardianMessage />
    </div>
    <div class="customerMessages">
      <CustomerMessage />
    </div>
  </div>

  <ChatInputPart />
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
  display: flex;
  align-content: flex-end;
  flex-direction: column;
  background-color: var(--menu-button-diselected-background);
  border: 2px solid var(--main-text);
  border-radius: 10px;
  height: 100vh;
  width: 80%;
  padding: 15px;
  margin-bottom: 2em;
  margin-top: 1em;
  z-index: 2;
}

.scroller {
  overflow-y: scroll;
  scrollbar-color: var(--menu-logo-background) green;
  scrollbar-width: thin;
  z-index: 4;
}
</style>
