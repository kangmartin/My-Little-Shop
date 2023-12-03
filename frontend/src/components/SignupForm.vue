<template>
    <div class="signup-form">
      <h1>Registration</h1>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">Name: </label><br>
          <input type="text" id="name" v-model="user.name"><br>
          <label for="email">Email: </label><br>
          <input type="email" id="email" v-model="user.email">
          <label for="password">Password: </label><br>
          <input type="password" id="password" v-model="user.password">
        </div>
        <button type="submit" class="btn-submit">Signup</button>
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
      
            console.log('Registration successfuly', response);
            this.$router.push('/login');
            
          })
          .catch(error => {
         
            console.error('Reegistration error', error);
            
          });
      }
    }
  }
  </script>
 
<style scoped>

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