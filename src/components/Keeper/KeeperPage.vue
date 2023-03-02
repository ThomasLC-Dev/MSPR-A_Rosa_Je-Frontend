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
    </div>
    <div class="modifButton" label="ShowMapButton">
      <input class="btn-validate" type="submit" value="Carte" @click="ShowMap">
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
