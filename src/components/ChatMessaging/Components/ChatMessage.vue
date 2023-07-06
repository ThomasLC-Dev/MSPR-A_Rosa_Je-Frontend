<template>
  <div class="message" :class="currentUser ? 'current-user-message' : 'remote-user-message'">
    <span class="userName">{{ messageUserName }}</span>
    <span class="content">{{ messageContent }}</span>
  </div>
</template>

<script>
export default {
  name: "ChatMessage",
  props: {
    currentUser: Boolean,
    messageUserName: String,
    messageContent: String
  }
}
</script>

<style scoped>
.remote-user-message {
  display: flex;
  flex-direction: column;
  text-align: start;
  width: 80%;
  max-width: 1000px;
  word-wrap: break-word;
  background-color: lightpink;
  font-size: 20px;
  z-index: 3;
  margin: 5px;
  float: left;
  padding: 5px;
}

.current-user-message {
  display: flex;
  flex-direction: column;
  text-align: end;
  width: 80%;
  max-width: 1000px;
  word-wrap: break-word;
  background-color: lightblue;
  font-size: 20px;
  z-index: 3;
  margin: 5px;
  float: right;
  padding: 5px;
}

.message-content{
  display: flex;
  flex-direction: column;
}

.userName{
  font-size: 18px;
  font-weight: bold;
}
</style>
