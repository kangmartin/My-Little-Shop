<template>
     <h1>Login</h1>
    <div>
      <form @submit.prevent="login">
        <label for="email">Email</label><br>
        <input type="email" id="email" v-model="email" placeholder="Email" required><br>
        <label for="password">Password</label><br>
        <input type="password" id="password" v-model="password" placeholder="Password" required><br>
        <button type="submit">Login</button>
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        email: '',
        password: '',
        errorMessage: '' 
      }
    },
    methods: {
      async login() {
        try {
          const response = await axios.post('http://localhost:3000/api/auth/login', {
            email: this.email,
            password: this.password
          });
          localStorage.setItem('token', response.data.token);
          this.$router.push('/');
        } catch (error) {
          console.error('Connexion error', error);
          this.errorMessage = error.response && error.response.data && error.response.data.error
            ? error.response.data.error
            : 'Connexion error';
        }
      }
    }
  }
  </script>
  

  
<style scoped>

.error {
    color: red;
  }
h1{
    color: white;
    text-align: center;
    font-weight: bold;
    }

    form{
        margin: 5% auto;
        border: #1a73e8 1px solid;
        max-width: 400px;
        width: 100%;
        padding: 20px;
        border-radius: 8px;
        text-align: center;
    }

    label{
        color: white;
        font-weight: bold;
        font-size: 1.2rem;
        
    }

    input{
        width: 300px;
        height: 30px;
        border-radius: 4px;
        border: 1px solid #1a73e8;
        margin-bottom: 2%;
        margin-top: 10px;
    }

    button{
        
        height: 30px;
        border-radius: 4px;
        border: 1px solid #1a73e8;
        background-color: #1a73e8;
        color: white;
        font-weight: bold;
        font-size: 1.2rem;
        
        
    }

</style>
  