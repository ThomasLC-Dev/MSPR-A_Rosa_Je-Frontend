<template>
  <div class="main-container">
    <h1>Suivis</h1>

    <form id="formDateAndNumber">
      <div class="form-field">
        <label for="">Date de début : </label>
        <input type="date">
      </div>

      <div class="form-field">
        <label for="">Date de fin : </label>
        <input type="date">
      </div>

      <div class="form-field">
        <label for="">Numéro de contact : </label>
        <input type="text">
      </div>
    </form>
    
  </div>
</template>

<script>
export default {
  name: "GuardianTrackingPage",
};
</script>

<style scoped>

label {
  font-weight: lighter;
  color: var(--main-title-h1);
}

.form-field {
  flex-direction: row;
  margin-bottom: 10px;
}

.form-field label {
  display: inline-block;
  width: 200px;
  text-align: left;
}

#formDateAndNumber {
  display: flex;
  flex-direction: column;
  align-items: start;
  margin: 10px;
}

</style>