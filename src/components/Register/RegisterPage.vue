<template>
  <div class="main-container">
    <h1>INSCRIPTION</h1>
    <form class="form-register" @submit.prevent="onSubmit" @reset.prevent="backPage">
      <div class="form-fields">
        <div class="form-field-direction">
          <div class="form-field">
            <label for="lastname">Nom :</label>
            <input id="lastname" placeholder="Votre nom" v-model="lastname" />
          </div>
          <div class="form-field">
            <label for="firstname">Prénom :</label>
            <input id="firstname" placeholder="Votre prénom" v-model="firstname" />
          </div>
        </div>

        <div class="form-field-direction">
          <div class="form-field field-3 mobile">
            <label for="phone">Nº de mobile :</label>
            <input type="text" id="phone" placeholder="Votre numéro" v-model="phone" />
          </div>
          <div class="form-field field-7 mobile">
            <label for="email">Email :</label>
            <input type="text" id="email" placeholder="Votre email" v-model="email" />
          </div>
        </div>

        <div class="form-field-direction-gp">
          <div class="address-road">
            <div class="form-field field-3">
              <label for="roadNumber">Nº de rue :</label>
              <input type="text" id="roadNumber" placeholder="Numéro de rue" v-model="roadNumber" />
            </div>
            <div class="form-field field-7">
              <label for="roadType">Type de voie :</label>
              <input type="text" id="roadType" placeholder="Type de voie" v-model="roadType" />
            </div>
          </div>
          <div class="form-field">
            <label for="road">Nom de rue :</label>
            <input type="text" id="road" placeholder="Nom de la rue" v-model="road" />
          </div>
        </div>
        <div class="form-field-direction-gp">
          <div class="form-field">
            <label for="addtionalAddress">Adresse complémentaire :</label>
            <input type="text" id="addtionalAddress" placeholder="Complément d'adresse" v-model="addtionalAddress" />
          </div>
          <div class="address-zip">
            <div class="form-field field-3">
              <label for="postalCode">Code postal :</label>
              <input type="text" id="postalCode" placeholder="Code postal" v-model="postalCode" />
            </div>
            <div class="form-field field-7">
              <label for="city">Nom de ville :</label>
              <input type="text" id="city" placeholder="Nom de la ville" v-model="city" />
            </div>
          </div>
        </div>
        <div class="form-field-direction">
          <div class="form-field">
            <label for="password">Mot de passe :</label>
            <input type="password" id="password" placeholder="Votre mot de passe" v-model="password" />
          </div>
          <div class="form-field">
            <label for="passwordConfirmation">Confirmation :</label>
            <input type="password" id="passwordConfirmation" placeholder="Confirmation du mot de passe"
              v-model="passwordConfirmation" />
          </div>
        </div>
      </div>
      <div class="group-checkbox">
        <div class="form-checkbox">
          <input type="checkbox" class="checkbox-position" id="customer" value="1" v-model="userRoles" />
          <label for="customer" class="register-checkbox">Avez-vous besoin de faire garder vos plantes ?</label>
        </div>

        <div class="form-checkbox">
          <input type="checkbox" class="checkbox-position" id="keeper" value="2" v-model="userRoles" />
          <label for="keeper" class="register-checkbox">Voulez-vous être gardien de plantes ?</label>
        </div>

        <div class="form-checkbox">
          <input type="checkbox" class="checkbox-position" id="botanist" value="3" v-model="userRoles" />
          <label for="botanist" class="register-checkbox">Souhaitez-vous apporter des conseils spécialisés ?</label>
        </div>
        <br>
      </div>

      <div class="button-group">
        <input class="btn-reset" type="reset" value="Annuler" />
        <input class="btn-validate" type="submit" value="S'inscrire" />
      </div>
    </form>
  </div>
</template>

<script>
import router from '@/router'
import { config } from '../../../api.config'
export default {
  name: 'RegisterPage',
  data() {
    return {
      firstname: '',
      lastname: '',
      phone: '',
      email: '',
      roadNumber: '',
      roadType: '',
      addtionalAddress: '',
      road: '',
      postalCode: '',
      city: '',
      password: '',
      passwordConfirmation: '',
      userRoles: [],
      routeConnection: 'connection',
      routeHome: 'home',
    }
  },
  methods: {
    onSubmit() {
      let userRegister = {
        "additionalAddress": this.addtionalAddress,
        "city": this.city,
        "email": this.email,
        "firstName": this.firstname,
        "lastName": this.lastname,
        "password": this.password,
        "passwordConfirmation": this.passwordConfirmation,
        "phone": this.phone,
        "postalCode": this.postalCode,
        "road": this.road,
        "roadNumber": this.roadNumber,
        "roadType": this.roadType,
        "status": false,
        "userRoles": this.userRoles.map((value) => +value)
      }

      fetch(config.apiBase + config.endpoints.registerPath, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userRegister)
      })
        .then(() => {
          this.goToView(this.routeConnection)
        })
    },
    goToView(path) {
      router.push({ name: path })
    },
    backPage() {
      this.goToView('home')
    },
  }
}

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
  .main-container {
    overflow: auto;
  }
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

  .mobile {
    flex: 1;
    width: 100%;
  }

  label {
    font-size: medium;
  }
}
</style>
