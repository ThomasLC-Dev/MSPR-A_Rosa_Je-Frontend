<template>
  <div class="main-container">
    <div class="header">
      <div class="imgProfilContainer">
        <img :src="require(`@/assets/` + imgPath)" class="imgProfil" alt="">
      </div>

      <div class="nameProfil" label="Name Profil">
        <h1 id="lastname">{{ firstname }}</h1>
        <h1 id="firstname">{{ lastname }}</h1>
      </div>
      <div class="button">
        <img src="../../assets/Logo/Map.png" alt="" srcset="" class="imgButton">
      </div>
    </div>
    <div class="map">
      <img src="../../assets/Logo/Capture_decran_2023-03-02_a_23.07.48.png" alt="" srcset="" class="imgMap">
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'KeeperPage',
  data() {
    return {
      imgPath: "PeopleTalking/profile.jpg",
      firstname: 'Jane',
      lastname: 'Doe',
    }
  },
  methods: {
    ShowMap() {
      this.$router.push('/map');
    }
  }
}
</script>

<style scoped>
.header {
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  width: 100vh;
  align-items: center;
  padding-bottom: 2%;

}
.map{
  width: 80%;
}

.imgMap{
  width: 100%;
}

.button{
  top: 0%;
  right: 0%;
  width: 150px;
  margin-right: 0%;
  margin-left: 300px;
}
.imgProfilContainer {
  width: 150px;
}

.imgProfil {
  width: 100%;
  border-radius: 50%;
}
.imgButton{
  width: 100%;
}

.nameProfil {
  display: flex;
  flex-direction: row;
  margin-left: 30px;
  gap: 10px;
  border-bottom: 5px solid var(--main-text);

}

@media(max-width: 1000px) {
  .header {
  flex-direction: column;
}


.button{
  margin-top: 10%;
  margin-left: 0%;
}
.nameProfil {
  margin-left: 0%; 

}

.map{
  width: 110%;
}

.imgMap{
  width: 100%;
}
}
</style>
