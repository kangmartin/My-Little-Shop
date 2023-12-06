<template>
    <h2 v-if="isBan" class="ban-message">You are banned ! Contact an administrator to request to lift the ban</h2>
    <div>
      <div class="search" v-if="userRole==='user'">
        <input type="text" v-model="searchQuery" placeholder="Search products..." class="search-input"/>
        <select v-model="sortOrder" class="sort-select">
          <option disabled value="">Filter..</option>
          <option value="ascending">Price: Low to High</option>
          <option value="descending">Price: High to Low</option>
        </select>
      </div>
  
      <div class="product-list">
        <ProductCard
          v-if="filteredProducts.length > 0"
          v-for="product in filteredProducts" 
          :key="product.id"
          :product="product"
          :is-product-in-cart="isProductInCart(product)"
          :user-role="userRole"
          :is-ban="isBan" 
          @add-to-cart="addToCart">
        </ProductCard>
  
        <div v-else>
          <p class="product-title">{{ message }}</p>
        </div>
        
      </div>
    </div>
  </template>

<style scoped>
   .product-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1%;
    margin: 30px 8%;
}

  .ban-message {
    text-align: center;
    color: #EA2027;
    font-size: 1.5em;
    margin-top: 30px;
  }

    .search{
    display: flex;
    justify-content: center;
    margin-top: 30px;

    }

    .sort-select {
        padding: 10px;
        margin-left: 10px;
        border: 1px solid #ddd;
        border-radius: 4px;
    }

    .product-title {
    font-size: 1.2em;
    margin: 0;
    color: white;
    }

   </style>

<script>
  import ProductCard from './ProductCard.vue';
  import axios from 'axios';
  import { jwtDecode } from "jwt-decode";
  
  export default {
    components: {
      ProductCard
    },
    data() {
      return {
        products: [],
        cart: JSON.parse(localStorage.getItem('cart')) || [],
        userRole: null,
        searchQuery: '',
        sortOrder: '',
        isBan: null,
        message: 'Loading...',
      };
    },
    computed: {
      isProductInCart() {
        return product => this.cart.some(item => item.id === product.id);
      },
      filteredProducts() {
        let filtered = this.products;
  
        if (this.searchQuery) {
          filtered = filtered.filter(product => 
            product.name.toLowerCase().includes(this.searchQuery.toLowerCase())
          );
        }
  
        if (this.sortOrder === 'ascending') {
          filtered.sort((a, b) => a.actual_price - b.actual_price);
        } else if (this.sortOrder === 'descending') {
          filtered.sort((a, b) => b.actual_price - a.actual_price);
        }
  
        return filtered;
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
            this.userRole = decoded.user.role;
            this.isBan = decoded.user.isBan;
       
          } catch (error) {
            console.error('Erreur de décodage du JWT:', error);
            localStorage.removeItem('token');
          }
        }
      },
    },
    mounted() {
      this.fetchProducts();
      this.checkAuthentication();
      setTimeout(() => {
      if (this.filteredProducts.length === 0) {
        this.message = 'No products available..';
      }
    }, 2000);
    }
  };

  </script>
  
 
  