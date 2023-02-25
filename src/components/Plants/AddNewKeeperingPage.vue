<template>
  <div class="main-container">
    <h1>Demande de gardiennage</h1>

    <form id="formAddKeepering">
      <div class="form-field">
        <label for="beginKeeperingDate">Date de début : </label>
        <input type="date" id="beginDate">
      </div>

      <div class="form-field">
        <label for="endKeeperingDate">Date de fin : </label>
        <input type="date" id="endDate">
      </div>

      <div class="form-field">
        <label for="contactNumber">N° de contact : </label>
        <input type="text" id="contactPhoneNumber">
      </div>

      <div class="form-field">
        <label for="contactAddress">Adresse : </label>
      </div>
    </form>

  </div>
</template>

<script>
export default {
  name: 'AddNewKeeperingPage'
}

</script>

<style scoped></style>