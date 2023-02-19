<template>
    <div class="main-container">
        <div class="header">
            <div class="imgProfilContainer">
                <img :src="require(`@/assets/` + imgPath)" class="imgProfil" alt="">
            </div>

            <div class="nameProfil">
                <h1>Jane Doe</h1>
            </div>
        </div>
        <div class="contentProfil">


        </div>
    </div>
</template>
<script>
export default {
    name: "ProfilPage",
    data() {
        return {
            imgPath: "PeopleTalking/profile.jpg"
        }
    }
};
</script>

<style>
.header{
    display: flex;
    flex-direction: row;
    width: 100vh ;
    align-items: center;
}
.imgProfilContainer {
    width: 150px;
}

.imgProfil {
    width: 100%;
}
</style>