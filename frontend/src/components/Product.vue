<template>
  <div v-if="products.length > 0" v-for="product in products" :key="product.id" class="product-card">
    <img :src="'http://localhost:3000/images/' + product.image" alt="Product Image" class="product-image">

    <div class="product-details">
      <h3 class="product-title">{{ product.name }}</h3>
      <p class="product-price">
        <span v-if="product.old_price === product.actual_price" class="current-price">{{ product.actual_price }}€</span>
        <span v-else>
          <span class="original-price">{{ product.old_price }}€</span><br>
          <span class="current-price">{{ product.actual_price }}€</span>
        </span>
      </p>
      <div class="product-rating">
        <span v-for="star in 5" :key="star" class="star" :class="{ filled: star <= product.rate }">★</span>
      </div>
      <br><br>
      <button v-if="!isProductInCart(product) && userRole === 'user'" @click="addToCart(product)" class="add-to-cart-button">
  Add to cart
</button>
<button v-if="isProductInCart(product) && userRole === 'user'" disabled class="added-to-cart-button">
  Added to cart
</button>

      
    </div>
  </div>
  <div v-else>
    <p class="product-title">No products available..</p>
  </div>
</template>

<script>
    import axios from 'axios';
    import { jwtDecode } from "jwt-decode";

    export default {

    
      data() {
        return {
          productName: '',
          productImage: '',
          productOldPrice: 0,
          productActualPrice: 0,
          productRate: 0,
          products: [],
          cart: JSON.parse(localStorage.getItem('cart')) || [],
          userRole: null,

        };
      },

      computed: {
    isProductInCart() {
      return product => this.cart.some(item => item.id === product.id);
    }
  },
      methods: {
        async fetchProducts() {
          try {
            const response = await axios.get('http://localhost:3000/api/products/all');
            this.products = response.data;
          } catch (error) {
            console.error('Error when fetching list of products', error);
          }
        },


        addToCart(product) {
      if (!this.isProductInCart(product)) {
        this.cart.push(product);
        localStorage.setItem('cart', JSON.stringify(this.cart));
      }
    },
    checkAuthentication() {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const decoded = jwtDecode(token);
          console.log(decoded); 
          this.isLoggedIn = true;
          this.userRole = decoded.user.role; 
         
        } catch (error) {
          console.error('Erreur de décodage du JWT:', error);
          localStorage.removeItem('token');
        }
      }
    }
  },

    
      mounted() {
        this.fetchProducts();
        this.checkAuthentication();
      }
    };
  </script>
  
  <style scoped>
  .product-card {
    width: 300px;
    border: 0.5px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    text-align: center;
    background-color: #202124;
    margin-bottom: 30px;
    
  }
  
  .product-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  
  .product-details {
    padding: 10px;
  }
  
  .product-title {
    font-size: 1.2em;
    margin: 0;
    color: white;
  }
  
  .product-price {
    display: flex;
    justify-content: center;
    align-items: baseline;
    gap: 10px;
    margin: 10px 0;
    font-weight: bold;
  }
  
  .original-price {
    text-decoration: line-through;
    color: #666;
  }
  
  .current-price {
    font-size: 1.5em;
    color: white;
  }
  
  .discount-label {
    background-color: #1a73e8;
    color: white;
    padding: 2px 5px;
    border-radius: 5px;
    font-size: 0.8em;
  }
  
  .product-rating {
    display: inline-block;
  }
  
  .star {
    color: grey;
    font-size: 1.2em;
  }
  
  .star.filled {
    color: gold;
  }

  .add-to-cart-button {
    background-color: #1a73e8;
    color: white;
    padding: 10px;
    border-radius: 5px;
    font-size: 1em;
    border: none;
    cursor: pointer;
  }

  .added-to-cart-button {
    background-color: grey;
    color: white;
    padding: 10px;
    border-radius: 5px;
    font-size: 1em;
    border: none;
  }
  
  </style>
