<template>
  <div class="main-container">
    <div>
      <h1>CONNEXION</h1>
      <hr>
    </div>
    
    <form id="formConnection" @submit.prevent="submit">
      <div class="form-field">
        <label for="mailAddress">Adresse mail : </label>
        <input type="text" id="mailAddress" placeholder="Entrez votre adresse mail" v-model="email">
      </div>
      
      <div class="form-field">
        <label for="password">Mot de passe : </label>
        <input type="password" id="password" placeholder="Entrez votre mot de passe" v-model="password">
      </div>

      <a href="mailto:admin@arosaje.fr" id="forgotPassword">Mot de passe oublié</a>
      
      <div>
        <button class="btn-validate" id="submit">Connexion</button>
      </div>
      
      <div>
        <a class="notRegistered" href="" id="notYetRegistered" @click="goToView(routeRegister)">Pas encore membre ? Inscris-toi !</a>
      </div>
    </form>
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
      router.push({name: path})
    },
    submit() {
      let userLogin = {
        email: this.email,
        password: this.password
      }

			fetch(config.apiBase + config.endpoints.loginPath, {method: 'POST', body: JSON.stringify(userLogin)}).then(response => {
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
<style>

  .notRegistered {
    margin-bottom: 10px;
    font-size: large;
  }

  input {
    width: 300px;
  }

  #formConnection {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
  }

  #forgotPassword {
    display: flex;
    justify-content: center;
    margin-bottom: 25px;
    font-size: large;
  }
</style>