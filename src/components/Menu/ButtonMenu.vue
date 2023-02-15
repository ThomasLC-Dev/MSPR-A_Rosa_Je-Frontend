<template>
  <div class="ButtonMenuClass">

    <div class="imgClass">
      <img :src="require(`@/assets/` + imgLink)" class="imgButton">
    </div>

    <div class="Title">
      <p>{{ name }}</p>
    </div>

    <img src="../../assets/Logo/Barre.png" alt="" class="imgBarre" />

  </div>
</template>
<script>
export default {
  props: {
    imgLink: String,
    name: String,
  },
  data() {
    return {
      linkImg: String
    }
  }
};
</script>
<style>
.ButtonMenuClass {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
}

.Title {
  color: var(--menu-button-diselected-title);
  align-self: center;
  text-align: justify;
  width: 500px;
}

.ButtonBackg {
  margin: 0%;
  background-color: var(--menu-button-diselected-background);

}

.imgButton {
  max-width: 20%;
  height: auto;
}

.imgBarre {
  width: 5px;
  height: 50px;
}
</style>
