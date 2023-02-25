<template>
  <div class="main-container">
    <h1>INSCRIPTION</h1>
    <form class="form-register" @submit.prevent="onSubmit">
      <div class="form-fields">
        <div class="form-field-direction">
          <div class="form-field">
            <label for="lastname">Nom :</label>
            <input id="lastname" placeholder="Votre nom" v-model="lastname" />
          </div>
          <div class="form-field">
            <label for="firstname">Prénom :</label>
            <input
              id="firstname"
              placeholder="Votre prénom"
              v-model="firstname"
            />
          </div>
        </div>

        <div class="form-field-direction">
          <div class="form-field field-3">
            <label for="phone">Nº de mobile :</label>
            <input
              type="text"
              id="phone"
              placeholder="Votre numéro"
              v-model="phone"
            />
          </div>
          <div class="form-field field-7">
            <label for="email">Email :</label>
            <input
              type="text"
              id="email"
              placeholder="Votre email"
              v-model="email"
            />
          </div>
        </div>

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
                placeholder="COde postal"
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
        <div class="form-field-direction">
          <div class="form-field">
            <label for="password">Mot de passe :</label>
            <input
              type="password"
              id="password"
              placeholder="Votre mot de passe"
              v-model="password"
            />
          </div>
          <div class="form-field">
            <label for="passwordConfirmation">Confirmation :</label>
            <input
              type="password"
              id="passwordConfirmation"
              placeholder="Confirmation du mot de passe"
              v-model="passwordConfirmation"
            />
          </div>
        </div>
      </div>
      <div class="group-checkbox">
        <div class="form-checkbox">
          <input
            type="checkbox"
            class="checkbox-position"
            id="customer"
            value="1"
            v-model="userRoles"
          />
          <label for="customer" class="register-checkbox"
            >Avez-vous besoin de faire garder vos plantes ?</label
          >
        </div>

        <div class="form-checkbox">
          <input
            type="checkbox"
            class="checkbox-position"
            id="keeper"
            value="2"
            v-model="userRoles"
          />
          <label for="keeper" class="register-checkbox"
            >Voulez-vous être gardien de plantes ?</label
          >
        </div>

        <div class="form-checkbox">
          <input
            type="checkbox"
            class="checkbox-position"
            id="botanist"
            value="3"
            v-model="userRoles"
          />
          <label for="botanist" class="register-checkbox"
            >Souhaitez-vous apporter des conseils spécialisés ?</label
          >
        </div>
      </div>

      <div class="button-group">
        <input class="btn-reset" type="reset" value="Annuler" />
        <input class="btn-validate" type="submit" value="S'inscrire" />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "RegisterPage",
  data() {
    return {
      firstname: "",
      lastname: "",
      phone: "",
      email: "",
      roadNumber: "",
      roadType: "",
      addtionalAddress: "",
      road: "",
      postalCode: "",
      city: "",
      password: "",
      passwordConfirmation: "",
      userRoles: [],
    };
  },
  // methods: {
  //    onSubmit() {
  //        let userRegister = {
  //             firstname: this.firstname,
  //             lastname: this.lastname,
  //             phone: this.phone,
  //             email: this.email,
  //             roadNumber: this.roadNumber,
  //             roadType: this.roadType,
  //             addtionalAddress: this.addtionalAddress,
  //             road: this.road,
  //             postalCode: this.postalCode,
  //             city: this.city,
  //             password: this.password,
  //             passwordConfirmation: this.passwordConfirmation,
  //             userRoles: this.userRoles
  //         }
  //         this.$emit('register-submitted', userRegister)

  //         this.firstname,
  //             this.lastname  = ''
  //             this.phone = ''
  //             this.email = ''
  //             this.roadNumber = ''
  //             this.roadType = ''
  //             this.addtionalAddress = ''
  //             this.road = ''
  //             this.postalCode = ''
  //             this.city = ''
  //             this.password = ''
  //             this.passwordConfirmation = ''
  //             this.userRoles = ''
  //     }
};
</script>

<style scoped>
.form-register {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 80%;
}

.form-fields {
  display: flex;
  flex-direction: column;
}

.field-3 {
  flex: 3;
}

.field-7 {
  flex: 7;
}

.form-field-direction {
  display: flex;
  flex-direction: row;
  gap: 20px;
  flex-wrap: wrap;
  /* flex-direction: column; pour la version mobile */
}

.form-field-direction-gp {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

.form-checkbox {
  display: flex;
  flex-direction: row;
  padding-top: 10px;
  align-items: center;
}

.checkbox-position {
  padding: 0;
  margin: 0;
  vertical-align: baseline;
  position: relative;
  top: -1px;
}

.register-checkbox {
  margin-left: 10px;
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
