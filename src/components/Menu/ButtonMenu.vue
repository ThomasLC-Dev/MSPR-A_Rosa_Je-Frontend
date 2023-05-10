<template>
  <a href="#" type="button" class="ButtonMenuClass">

    <div class="imgClass">
      <img :src="require(`@/assets/` + imgLink)" class="imgButton" alt="">
    </div>

    <div class="Title">
      <p>{{ name }}</p>
    </div>

  </a>
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
<style scoped>
.ButtonMenuClass {
  flex: 1;
  display: flex;
  height: auto;
  width: 250px;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  background-color: var(--menu-button-selected-title);
  gap: 50px;
  border: 1px solid var(--main-title-underline);
  text-decoration: none;
}

.ButtonMenuClass:hover {
  background: var(--menu-button-selected-background);
}

.Title {
  color: var(--menu-button-diselected-title);
  align-self: center;
  padding: auto;
  margin: auto;
}

.ButtonMenuClass:hover .Title {
  color: var(--menu-button-selected-title);
  align-self: center;
}

.imgClass {
  width: 40px;
  align-self: center;
}

.imgButton {
  width: 40px;
  height: auto;
  padding: 10px;
  border-right: 3px solid;
  border-color: var(--menu-button-pipe);
}
</style>
