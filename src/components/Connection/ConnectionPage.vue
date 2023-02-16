<template>
    <div class="container">
      <div class="container-connection">
        <h1>Connexion</h1>

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
            <button class="btn-Connection" id="submit">Connexion</button>
          </div>
        </form>
        
        <div>
          <a class="notRegistered" href="mailto:admin@arosaje.fr" id="notYetRegistered">Pas encore membre ? Inscris-toi !</a>
        </div>

      </div>
    </div>
  </template>
  <script>
    export default {
      name: 'ConnectionView'
    }
  
  </script>
  <style>
    h1 {  /* CSS Global */
      text-align: center;
      margin-bottom: 10px;
    }

    .container {
      height: auto;
      margin: 0 auto;
    }
  
    .container-connection {
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
      margin-bottom: 10px;
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
    }
  
    #forgotPassword {
      display: flex;
      justify-content: center;
      margin-bottom: 10px;
      font-size: large;
    }
  </style>