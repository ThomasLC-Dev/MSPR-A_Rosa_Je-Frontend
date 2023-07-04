<template>
  <div class="main-container">
    <div class="chats-list">
      <button class="btn-validate btn-refresh" @click="selectChat(selectedChatId)">Recharger</button>
      <div v-for="chat of chatsList" :key="chat.id" class="chat-item" @click="selectChat(chat.id)">
        <span class="chatUserName">{{ chat.user.id == currentUserId ? chat.keeper.firstName + " " + chat.keeper.lastName : chat.user.firstName + " " + chat.user.lastName }}</span>
      </div>
    </div>
    <div class="chat-content" :style="{visibility: selectedChatId != 0 ? 'visible' : 'hidden'}">
      <ChatWindow :selectedChat="selectedChatContent" @send-message="selectChat(selectedChatId)" />
    </div>
  </div>
</template>

<script>
import { config, getCurrentUserId, getToken } from '../../../api.config';
import ChatWindow from "../ChatMessaging/Components/ChatWindow.vue";

export default {
  name: "ChatMessagingPage",
  components: {
    ChatWindow
  },
  data() {
    return {
      imgPath: "PeopleTalking/profile.jpg",

      chatsList: [],
      currentUserId: 0,
      selectedChatId: 0,
      selectedChatContent: {}
    }
  },
  methods: {
    getUserChats(){
      fetch(config.apiBase + config.endpoints.chatsPath + "?user="+getCurrentUserId(), {
        headers: {
          Authorization: 'Bearer ' + getToken(),
        }
      })
        .then((res) => res.json())
        .then(
          (data) => {
            this.chatsList = data;
          }
        )
    },
    selectChat(chatId){
      this.selectedChatId = chatId;
      this.getChat(chatId);
    },
    getChat(chatId){
      fetch(config.apiBase + config.endpoints.chatsPath + "/" + chatId, {
        headers: {
          Authorization: 'Bearer ' + getToken(),
        }
      })
        .then((res) => res.json())
        .then(
          (data) => {
            this.selectedChatContent = data;
            console.log(this.selectedChatContent);
          }
        )
    }
  },
  mounted() {
    this.currentUserId = getCurrentUserId()
    this.getUserChats();
  }
};
</script>

<style scoped>
.main-container {
  border: none;
  height: 95vh;
  z-index: 1;
  display: flex;
  flex-direction: row;
}

.chats-list{
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  border-right: 2px solid var(--main-container-border);
  height: 100%;
  position: relative;
}

.chat-item{
  border-bottom: 1px solid var(--main-title-underline);
  padding: 30px 15px;
  cursor: pointer;
}

.chat-item:hover{
  background-color: var(--menu-logo-background);
  color: #FFF;
}

.chat-content{
  flex: 4;
}

.btn-refresh{
  margin: 20px auto;
}

</style>
