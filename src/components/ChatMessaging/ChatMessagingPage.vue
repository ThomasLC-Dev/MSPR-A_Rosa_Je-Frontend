<template>
  <div class="main-container">
    <div class="header">
      <div class="imgProfilContainer">
        <img :src="require(`@/assets/` + imgPath)" class="imgProfil" alt="">
      </div>

      <div class="nameProfil" label="Name Profil">
        <h2 id="firstname">{{ user.firstName }}</h2>
        <h2 id="lastname">{{ user.lastName }}</h2>
      </div>
    </div>

    <ChatWindow />
  </div>
</template>

<script>
import { getToken, getCurrentUserId } from '../../../api.config'
import ChatWindow from "../ChatMessaging/Components/ChatWindow.vue"

export default {
  name: "ChatMessagingPage",
  components: {
    ChatWindow
  },
  data() {
    return {
      imgPath: "PeopleTalking/profile.jpg",

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
      }
    }
  },
  methods: {
    GetUser() {
      fetch("https://a-rosa-je.herokuapp.com/api/users/" + getCurrentUserId(), {
        headers: {
          Authorization: 'Bearer ' + getToken(),
        }
      })
        .then((res) => res.json())
        .then((data) => (this.user = data))
    },
    listeId(id) {
      console.log(id);
    },
  },
  beforeMount() {
    this.GetUser();
  }
};
</script>

<style scoped>
.main-container {
  border: none;
  height: 100vh;
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
