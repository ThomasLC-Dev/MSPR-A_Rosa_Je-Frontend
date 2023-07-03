<template>
  <div class="main-container">
    <div class="header">
      <div class="imgProfilContainer">
        <img :src="require(`@/assets/` + imgPath)" class="imgProfil" alt="">
      </div>

      <div class="nameProfil" label="Name Profil">
        <h2 id="firstname">{{ otherUser.firstName }}</h2>
        <h2 id="lastname">{{ otherUser.lastName }}</h2>
      </div>
    </div>

    <ChatWindow />
  </div>
</template>

<script>
import { getCurrentUserId, getToken } from '../../../api.config';
import ChatWindow from "../ChatMessaging/Components/ChatWindow.vue";

export default {
  name: "ChatMessagingPage",
  components: {
    ChatWindow
  },
  data() {
    return {
      imgPath: "PeopleTalking/profile.jpg",

      otherUser: {
        "address": {
          "additionalAddress": "string",
          "city": "string",
          "id": 0,
          "latitude": 0,
          "longitude": 0,
          "postalCode": "string",
          "road": "string",
          "roadNumber": 0,
          "roadType": "string"
        },
        "email": "string",
        "firstName": "string",
        "id": 0,
        "imageUrl": "string",
        "lastName": "string",
        "phone": "string",
        "status": true,
        "userRoles": [
          {
            "id": 0,
            "role": {
              "id": 0,
              "name": "string"
            }
          }
        ]
      },
      user: {
        "address": {
          "additionalAddress": "string",
          "city": "string",
          "id": 0,
          "latitude": 0,
          "longitude": 0,
          "postalCode": "string",
          "road": "string",
          "roadNumber": 0,
          "roadType": "string"
        },
        "email": "string",
        "firstName": "string",
        "id": 0,
        "imageUrl": "string",
        "lastName": "string",
        "phone": "string",
        "status": true,
        "userRoles": [
          {
            "id": 0,
            "role": {
              "id": 0,
              "name": "string"
            }
          }
        ]
      },
      id: null,
      chatsBox: [],
      ChatBoxExists: false
    }
  },
  methods: {
    GetOtherUser() {
      fetch("https://a-rosa-je.herokuapp.com/api/users/" + this.id, {
        headers: {
          Authorization: 'Bearer ' + getToken(),
        }
      })
        .then((res) => res.json())
        .then((data) => (this.otherUser = data))
    },
    GetUser() {
      fetch("https://a-rosa-je.herokuapp.com/api/users/" + getCurrentUserId(), {
        headers: {
          Authorization: 'Bearer ' + getToken(),
        }
      })
        .then((res) => res.json())
        .then((data) => (this.user = data))
    },
    GetChatWindow() {
      fetch("https://a-rosa-je.herokuapp.com/api/chats/", {
        headers: {
          Authorization: 'Bearer ' + getToken(),
        }
      })
        .then((res) => res.json())
        .then(
          (data) => {
            console.log(data);
            this.chatsBox = data;
            this.FindUsersChatBox()
          }
        )



    },
    FindUsersChatBox() {
      for (var chatbox in this.chatsBox) {
        if (chatbox.user.id == this.user.id) {
          if (chatbox.keeper.id == this.id) {
            //GetMessages
            this.ChatBoxExists = true;
          }
        }
      }

      if (!this.ChatBoxExists) {
        this.CreateChatBox();
      }
    },
    CreateChatBox() {
      console.log("Creaate");
      let ids = {
        "keeperId": 0,
        "userId": 0
      }
      ids.keeperId = this.id;
      ids.userId = this.user.id;
      fetch("https://a-rosa-je.herokuapp.com/api/chats", {
        method: 'POST',
        headers: {
          Authorization: "Bearer " + getToken(),
          "Content-Type": "application/json"
        },
        body: JSON.stringify({

          "keeperId": ids.keeperId,
          "userId": ids.userId

        })
      })
        .then(res => console.log(res))

    }
  },
  mounted() {
    let data = this.$route.params;
    this.id = data.data;
    this.GetUser();
    this.GetOtherUser();
    this.GetChatWindow();

  }
};
</script>

<style scoped>
.main-container {
  border: none;
  height: 100vh;
  z-index: 1;
}

.header {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 2%;
}

.imgProfilContainer {
  width: 150px;
}

.imgProfil {
  width: 100%;
  border-radius: 50%;
}

.nameProfil {
  display: flex;
  flex-direction: row;
  margin-left: 30px;
  gap: 10px;
  border-bottom: 5px solid var(--main-text);
}
</style>
