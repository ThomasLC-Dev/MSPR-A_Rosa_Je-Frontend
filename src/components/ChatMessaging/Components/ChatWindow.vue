<template>
  <div class="chat-window scroller" ref="messages">
    <div v-for="message of selectedChat.messageResponseDTOs" :key="message.id">
      <ChatMessage :messageContent="message.content" :messageUserName="message.userName" :currentUser="message.userId == currentUserId ? true : false"/>
    </div>
  </div>

  <ChatInputPart @send-message="sendMessage($event)" />
</template>

<script>
import { config, getCurrentUserId, getToken } from '../../../../api.config';
import ChatInputPart from './ChatInputPart.vue'
import ChatMessage from './ChatMessage.vue';

export default {
  name: "ChatWindow",
  props:{
    selectedChat: {}
  },
  data() {
    return {
      currentUserId: 0
    }
  },
  components: {
    ChatInputPart,
    ChatMessage
  },
  methods: {
    sendMessage(messageContent){
      fetch(config.apiBase + config.endpoints.messagesPath, {
        method: 'POST',
        headers: {
          Authorization: 'Bearer ' + getToken(),
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          userId: getCurrentUserId(),
          content: messageContent,
          chatId: this.selectedChat.id
        })
      })
        .then(() => {
          this.$emit('send-message');
        })
    },
    scrollToBottom() {
      console.log(this.$refs)
      let chatContent = this.$refs.messages;
      if(chatContent){
        chatContent.scrollTop = chatContent.scrollHeight;
      }
    }
  },
  mounted() {
    this.currentUserId = getCurrentUserId();
  },
  updated(){
    this.scrollToBottom();
  }
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
  height: 80vh;
  width: 95%;
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
