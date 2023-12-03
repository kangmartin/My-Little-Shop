<template>
  <header class="header">
    <nav class="nav">
      <div class="nav__left">
        <a href="/">
          <img src="/favicon.ico" alt="Logo" />
        </a>
        <a class="nav__link" href="/">My Little Shop</a>
      </div>
      <div class="nav__right">
        <h2 class="welcome" v-if="isLoggedIn">Welcome, {{ userName }}</h2>
        <router-link class="nav__link" to="/registration" v-if="!isLoggedIn">
          Register
        </router-link>

        <router-link class="nav__link" to="/login" v-if="!isLoggedIn">
          Login
        </router-link>

        <router-link class="manage" to="/manage-products" v-if="isLoggedIn && userRole === 'admin'">
          Manage products
        </router-link>

        <router-link class="admin" to="/admin" v-if="isLoggedIn && userRole === 'admin'">
          Admin
        </router-link>

        <router-link class="nav__link" to="/cart" v-if="isLoggedIn && userRole === 'user' && !isBan" >
            Cart
        </router-link>

        <button @click="logout" class="nav__button" v-if="isLoggedIn">Logout</button>
      </div>
    </nav>
  </header>
</template>

<script>
import { jwtDecode } from "jwt-decode";
export default {
  data() {
    return {
      isLoggedIn: false,
      userRole: null,
      userName: null, 
      isBan: null, 
    };
  },

  mounted() {
    this.checkAuthentication();
  },

  methods: {
    checkAuthentication() {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const decoded = jwtDecode(token);
          console.log(decoded); 
          this.isLoggedIn = true;
          this.userRole = decoded.user.role; 
          this.userName = decoded.user.name;
          this.isBan = decoded.user.isBan;
         
        } catch (error) {
          console.error('Error of decode JWT', error);
          localStorage.removeItem('token');
        }
      }
    },

  clearCart() {
    localStorage.removeItem('cart');
    this.cart = [];
  },

  logout() {
    localStorage.removeItem('token');
    this.isLoggedIn = false;
    this.userRole = null;
    this.clearCart();
    this.$router.push('/login');
  }
  }
};
</script>

<style scoped>
  .admin{
    
    font-size: 1.2rem;
    text-decoration: none;
    margin-right: 1rem;
    transition: color 0.2s ease-in-out;
    font-weight: bold;
    background-color: #f39c12;
    border-radius: 4px;
    color: white;
    padding: 4px 4px 4px 4px;
  }

  .manage{
    
    font-size: 1.2rem;
    text-decoration: none;
    margin-right: 1rem;
    transition: color 0.2s ease-in-out;
    font-weight: bold;
    background-color: #6ec71be5;
    border-radius: 4px;
    color: white;
    padding: 4px 4px 4px 4px;
  
  }


  .admin:hover{
    background-color: #e67e22;
  }
  .welcome{
    margin-right: 28px;
  font-size: 21px;
  }
  .nav__button {
    background-color: #1a73e8;
    border: none;
    border-radius: 4px;
    color: white;
    padding: 4px 4px 4px 4px;
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: bold;
    margin-right: 1rem;
    transition: background-color 0.2s ease-in-out;
  }

  .nav__button:hover {
    background-color: #0a57d4;
  }

  .header {
    background-color: #ecf0f1;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 1rem 3%;
    border-radius: 4px;
    margin-left: 6%;
    margin-right: 6%;
    margin-top: 2%;
    width: auto;
  }

  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav__left {
    display: flex;
    align-items: center;
  }

  .nav__left img {
    height: 30px;
    margin-right: 10px;
  }

  .nav__link {
    font-size: 1.2rem;
    text-decoration: none;
    color: #333;
    margin-right: 1rem;
    transition: color 0.2s ease-in-out;
    font-weight: bold;
  }

  .nav__link:hover {
    color: #1a73e8;
  }

  .nav__right {
    display: flex;
    align-items: center;
  }

  .nav__right .nav__link {
    background-color: #1a73e8;
    border-radius: 4px;
    color: white;
    padding: 4px 4px 4px 4px;
  }

</style>
