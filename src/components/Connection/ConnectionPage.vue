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
        <button class="btn-Connection" id="submit" @click="goToView(routeLogin)">Connexion</button>
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

  /* h1 {  
    text-align: center;
    margin-bottom: 10px;
  }

  hr {  
    background-color: var(--main-title-underline);
    border-top: 3px solid var(--main-title-underline);
  }

  label { 
    margin-bottom: 2px;
    font-size: large;
    font-weight: bold;
  }

  input { 
    padding: 10px;
  } */

  .main-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--main-bg-color);
    border-radius: 10px;
    border: 2px solid var(--main-container-border);
  }

  .form-field {
    display: flex;
    flex-direction: column;
  }

  .notRegistered {
    margin-bottom: 10px;
    font-size: large;
  }

  .btn-Connection { /* CSS Global -> btn-validate */
    margin-bottom: 25px;
    width: 200px;
    border-radius: 20px;
    color: #fff;
    border: 1px solid #bad9cb;
    background-color: var(--btn-validate-color);
    font-size: 30px;
  }

  #mailAddress, #password{
    margin-bottom: 10px;
    border-radius: 10px;
    border: 1px solid #519069;
    width: 300px;
    font-size: large;
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