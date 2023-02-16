<template>
    <div class="container">
      <div class="container-connection">
        <h2>Connexion</h2>
        <form id="formConnection">
          <label for="mailAddress">Adresse mail : </label>
          <input type="text" id="mailAddress" placeholder="Entrez votre adresse mail">
          <label for="password">Mot de passe : </label>
          <input type="password" id="password" placeholder="Entrez votre mot de passe">
          <a href="mailto:admin@arosaje.fr" id="forgotPassword">Mot de passe oublié</a>
        </form>
        <div class="btn-Connection">
          <button id="submit">Connexion</button>
        </div>
        <div class="notRegistered">
          <a href="mailto:admin@arosaje.fr" id="notYetRegistered">Pas encore membre ? Inscris-toi !</a>
        </div>
      </div>
    </div>
  </template>
  <script>
  //import SidebarMenuVue from '@/components/Menu/SidebarMenu.vue';
    export default {
      name: 'ConnectionView'
    }
  
  </script>
  <style>
    .container {
      height: auto;
      margin: 0 auto;
    }
  
    .container-connection {
      display: flex;
      flex-direction: column;
      align-items: center;
      background: #f1fff8;
      border-radius: 10px;
      border: 1px solid #519069;
    }
  
    h2 {
      text-align: center;
      margin-bottom: 10px;
    }
  
    #formConnection {
      display: flex;
      flex-direction: column;
    }
  
    #forgotPassword {
      display: flex;
      justify-content: center;
      margin-bottom: 10px;
    }
  
    .btn-Connection {
      margin-bottom: 10px;
    }
  </style>