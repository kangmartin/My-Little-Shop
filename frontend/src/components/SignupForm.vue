<template>
    <div class="signup-form">
      <h2>Inscription</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">Nom:</label>
          <input type="text" id="name" v-model="user.name">
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="user.email">
        </div>
        <div class="form-group">
          <label for="password">Mot de passe:</label>
          <input type="password" id="password" v-model="user.password">
        </div>
        <button type="submit" class="btn-submit">S'inscrire</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'SignupForm',
    data() {
      return {
        user: {
          name: '',
          email: '',
          password: ''
        }
      }
    },
    methods: {
      submitForm() {
        axios.post('http://localhost:3000/api/members/signup', this.user)
          .then(response => {
            // Traiter la réponse
            console.log('Inscription réussie', response);
            // Redirection ou mise à jour de l'UI après l'inscription réussie
          })
          .catch(error => {
            // Gérer l'erreur
            console.error('Erreur d’inscription', error);
            // Afficher les messages d'erreur à l'utilisateur
          });
      }
    }
  }
  </script>
  
  <style>
  .signup-form {
    max-width: 400px;
    margin: auto;
    padding: 20px;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  .form-group label {
    display: block;
    margin-bottom: 5px;
  }
  
  .form-group input[type="text"],
  .form-group input[type="email"],
  .form-group input[type="password"] {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .btn-submit {
    background-color: #007bff;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .btn-submit:hover {
    background-color: #0056b3;
  }
  </style>
  