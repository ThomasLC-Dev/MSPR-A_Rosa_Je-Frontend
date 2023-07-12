<template>
  <div class="main-container">
    <div class="connexionContent">
      <div class="title">
        <h1>CONNEXION</h1>
        <hr>
      </div>
      <form id="formConnection" @submit.prevent="submit">
        <div v-if="error" class="alert-danger" role="alert">
          {{ error }}
        </div>
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
      password: '',
      error: ''
    }
  },
  methods: {
    goToView(path) {
      router.push({ name: path })
    },
    async submit() {
      let userLogin = {
        email: this.email,
        password: this.password
      };
      fetch(config.apiBase + config.endpoints.loginPath, { method: 'POST', body: JSON.stringify(userLogin) }).then(response => {
        return response.json()
      })
        .then(data => {
          saveToken(data.token)
          this.goToView(this.routeAbout)
        })
        .catch(() => {
          this.error = 'Adresse email ou mot de passe invalide.'
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
  margin-bottom: 10px;
}

.alert-danger {
  color: red;
  margin: 10px;
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
  cursor: pointer;
}

.notRegistered:hover {
  font-weight: bold;
  font-style: italic;
}

#formConnection {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

h1 {
  width: auto;
}

@media(max-width: 1000px) {
  .main-container {
    width: 100%;
    margin: auto;
  }

  .notRegistered, .forgottenPassword {
    font-size: medium;
  }
}
</style>