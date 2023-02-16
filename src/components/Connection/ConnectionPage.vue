<template>
  <div class="main-container">
    <div>
      <h1>CONNEXION</h1>
      <hr>
    </div>
    
    <form id="formConnection">
      <div class="form-field">
        <label for="mailAddress">Adresse mail : </label>
        <input type="text" id="mailAddress" placeholder="Entrez votre adresse mail">
      </div>
      
      <div class="form-field">
        <label for="password">Mot de passe : </label>
        <input type="password" id="password" placeholder="Entrez votre mot de passe">
      </div>

      <a href="mailto:admin@arosaje.fr" id="forgotPassword">Mot de passe oublié</a>
      
      <div>
        <button class="btn-validate" id="submit" @click="goToView(routeLogin)">Connexion</button>
      </div>
      
      <div>
        <a class="notRegistered" href="" id="notYetRegistered" @click="goToView(routeRegister)">Pas encore membre ? Inscris-toi !</a>
      </div>
    </form>
  </div>
</template>
<script>
  export default {
    name: 'ConnectionView',
    data() {
      return {
        routeRegister: "register",
        routeLogin: "about",
      }
    },

    methods: {
      goToView(path){
        this.$router.push({name:path})
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