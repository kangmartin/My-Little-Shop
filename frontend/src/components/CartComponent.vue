<template>
    <h2 v-if="isBan" class="ban-message">You are banned ! Contact an administrator to request to lift the ban</h2>
    <h1 v-if="!isBan">Your cart</h1>
    <div class="product-container" v-if="!isBan">
      <div v-if="cart && cart.length > 0">
        <div v-for="item in cart" :key="item.id" class="product-card">
          <div class="product-content">
            <div class="product-image-container">
              <img
                :src="'http://localhost:3000/images/' + item.image"
                alt="Product Image"
                class="product-image"
              />
            </div>
            <div class="product-details">
              <h3 class="product-name">{{ item.name }}</h3>
              <p class="product-price">{{ item.actual_price }}€</p>
              <button @click="removeFromCart(item.id)" class="remove-button">Remove</button>
            </div>
          </div>
        </div>
        <div class="total-price">
        <p>Total : {{ totalPrice }}€</p>
      </div>
      </div>
      <div v-else class="total-price">
        <p>Your cart si empty</p>
      </div>
    </div>
  </template>
  
  
<script>
import { jwtDecode } from "jwt-decode";
export default {
  data() {
    return {
      cart: [],
      totalPrice: 0,
      isBan: null, 
    };
  },
  mounted() {
    this.cart = JSON.parse(localStorage.getItem('cart')) || [];
    this.calculateTotalPrice(); 
    this.checkAuthentication();
  },
  methods: {
    removeFromCart(productId) {
      this.cart = this.cart.filter(item => item.id !== productId);
      localStorage.setItem('cart', JSON.stringify(this.cart));
      this.calculateTotalPrice(); 
    },
    calculateTotalPrice() {
      this.totalPrice = this.cart.reduce((total, item) => total + item.actual_price, 0);
    },
    checkAuthentication() {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const decoded = jwtDecode(token);
          this.isBan = decoded.user.isBan;
         
        } catch (error) {
          console.error('Error of decode JWT', error);
          localStorage.removeItem('token');
        }
      }
    },
  },
};
</script>

  
<style scoped>

h1{
    color: white;
    text-align: center;
    font-weight: bold;
    }
.ban-message {
    text-align: center;
    color: #EA2027;
    font-size: 1.5em;
    margin-top: 30px;
}
.product-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  
}

.product-card {
  border: 1px solid #ccc;
  margin: 10px;
  padding: 10px;
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

.product-content {
  display: flex;
  align-items: center;
}

.product-image-container {
  flex: 1;
  text-align: center;
}

.product-image {
  max-width: 100px;
  height: auto;
}

.product-details {
  flex: 3;
  padding: 10px;
}

.product-name {
  font-size: 18px;
  margin: 0;
}

.product-price {
  font-size: 16px;
  margin: 5px 0;
}

.remove-button {
  background-color: #ff0000;
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 14px;
}

.remove-button:hover {
  background-color: #cc0000;
}

.total-price {
  text-align: center;
  margin-top: 20px; 
  font-size: 20px;
  color: white; 
}
</style>

  

  