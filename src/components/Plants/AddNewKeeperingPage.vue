<template>
  <div class="main-container">
    <h1>Demande de gardiennage</h1>

    <form id="formAddKeepering">
      <div class="form-field">
        <label for="beginDate">Date de début : </label>
        <input type="date" id="startDate" />
      </div>

      <div class="form-field">
        <label for="endDate">Date de fin : </label>
        <input type="date" id="finishDate" />
      </div>

      <div class="form-field">
        <label for="contactNumber">N° de contact : </label>
        <input type="text" id="contactPhoneNumber" />
      </div>

      <div class="form-field">
        <label for="contactAddress">Adresse : </label>
        <div class="form-field-direction-gp">
          <div class="address-road">
            <div class="form-field field-3">
              <label for="roadNumber">Nº de rue :</label>
              <input
                type="text"
                id="roadNumber"
                placeholder="Numéro de rue"
                v-model="roadNumber"
              />
            </div>
            <div class="form-field field-7">
              <label for="roadType">Type de voie :</label>
              <input
                type="text"
                id="roadType"
                placeholder="Type de voie"
                v-model="roadType"
              />
            </div>
          </div>
          <div class="form-field">
            <label for="road">Nom de rue :</label>
            <input
              type="text"
              id="road"
              placeholder="Nom de la rue"
              v-model="road"
            />
          </div>
        </div>
        <div class="form-field-direction-gp">
          <div class="form-field">
            <label for="addtionalAddress">Adresse complémentaire :</label>
            <input
              type="text"
              id="addtionalAddress"
              placeholder="Complément d'adresse"
              v-model="addtionalAddress"
            />
          </div>
          <div class="address-zip">
            <div class="form-field field-3">
              <label for="postalCode">Code postal :</label>
              <input
                type="text"
                id="postalCode"
                placeholder="Code postal"
                v-model="postalCode"
              />
            </div>
            <div class="form-field field-7">
              <label for="city">Nom de ville :</label>
              <input
                type="text"
                id="city"
                placeholder="Nom de la ville"
                v-model="city"
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddNewKeeperingPage",
};
</script>

<style scoped>

.field-3 {
  flex: 3;
}

.field-7 {
  flex: 7;
}

.form-field-direction-gp {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

.address-road,
.address-zip {
  display: flex;
  flex-direction: row;
  gap: 20px;
  flex-wrap: wrap;
}

@media (max-width: 1000px) {
  .form-register {
    width: 90%;
  }

  .form-field-direction-gp {
    flex-direction: column;
  }

  .address-road,
  .address-zip {
    width: 100%;
    flex-wrap: nowrap;
    gap: 15px;
  }

  .field-3 {
    flex: 0.1;
    width: 35%;
  }

  .field-7 {
    flex: 0.3;
    width: 60%;
  }
}

</style>