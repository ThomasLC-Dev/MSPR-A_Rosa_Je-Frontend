<template>
  <div class="main-container">
    <div class="connexionContent">
      <div class="title">
        <h1>CONNEXION</h1>
        <hr>
      </div>
      <form id="formConnection" @submit.prevent="submit">
        <div class="form-field">
          <label for="mailAddress">Adresse mail : </label>
          <input type="text" placeholder="Entrez votre adresse mail" v-model="email">
        </div>

        <div class="form-field">
          <label for="password">Mot de passe : </label>
          <input type="password" placeholder="Entrez votre mot de passe" v-model="password">
        </div>

        <div>
          <button class="btn-validate">Connexion</button>
        </div>

        <div class="forgottenPassword">
          <a href="mailto:admin@arosaje.fr">Mot de passe oublié ?</a>
        </div>

        <div>
          <a class="notRegistered" @click="goToView(routeRegister)">Pas encore membre ? Inscris-toi !</a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { config, saveToken } from '../../../api.config'
import router from '@/router'

export default {
  name: 'ConnectionView',
  data() {
    return {
      routeRegister: 'register',
      routeAbout: 'about',
      email: '',
      password: ''
    }
  },
  methods: {
    goToView(path) {
      router.push({ name: path })
    },
    submit() {
      let userLogin = {
        email: this.email,
        password: this.password
      }

      fetch(config.apiBase + config.endpoints.loginPath, { method: 'POST', body: JSON.stringify(userLogin) }).then(response => {
        return response.json()
      })
        .then(data => {
          saveToken(data.token)
          this.goToView(this.routeAbout)
        })
    }
  }
}

</script>

<style scoped>
.main-container {
  text-align: center;
  margin-top: 15%;
  margin-left: 25%;
  width: 50%;
  height: auto;
}

.title {
  align-content: center;
  margin-bottom: 30px;
}

.connexionContent {
  display: inline-block;
  justify-content: center;
  flex-direction: column;
  margin: 10px;
  width: 50%;
  height: auto;
}

.notRegistered,
.forgottenPassword {
  margin-bottom: 10px;
  font-size: large;
}
</style>