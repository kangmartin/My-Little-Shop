<template>
  <div>
    <h2 v-if="isBan" class="ban-message">You are banned ! Contact an administrator to request to lift the ban</h2>
    <div v-else>
      <div class="search" v-if="userRole==='user'">
        <input type="text" v-model="searchQuery" placeholder="Search products..." class="search-input"/>
        <select v-model="sortOrder" class="sort-select">
          <option disabled value="">Filter..</option>
          <option value="ascending">Price: Low to High</option>
          <option value="descending">Price: High to Low</option>
        </select>
      </div>

      <div v-if="filteredProducts.length > 0" class="products-table-container">
        <table class="products-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Rating</th>
              <th v-if="userRole === 'user' && !isBan">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in filteredProducts" :key="product.id" class="product-row">
              <td class="product-image-cell">
                <img :src="'http://localhost:3000/images/' + product.image" alt="Product Image" class="product-image">
              </td>
              <td class="product-name">{{ product.name }}</td>
              <td class="product-price">
                <span v-if="product.old_price === product.actual_price" class="current-price">{{ product.actual_price }}€</span>
                <span v-else class="price-with-discount">
                  <span class="original-price">{{ product.old_price }}€</span>
                  <span v-if="product.old_price > product.actual_price" class="discount-label">{{ getDiscountPercentage(product) }}% off</span>
                  <br>
                  <span class="current-price">{{ product.actual_price }}€</span>
                </span>
              </td>
              <td class="product-rating">
                <div class="stars">
                  <span v-for="star in 5" :key="star" class="star" :class="{ filled: star <= product.rate }">★</span>
                </div>
              </td>
              <td v-if="userRole === 'user' && !isBan" class="product-actions">
                <button v-if="!isProductInCart(product)" @click="addToCart(product)" class="add-to-cart-button">
                  Add to cart
                </button>
                <button v-else disabled class="added-to-cart-button">
                  Added to cart
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div v-else class="no-products">
        <p class="no-products-message">{{ message }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.ban-message {
  text-align: center;
  color: #EA2027;
  font-size: 1.5em;
  margin-top: 30px;
}

.search {
  display: flex;
  justify-content: center;
  margin: 30px 0;
  gap: 10px;
}

.search-input {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1em;
  width: 300px;
}

.sort-select {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1em;
}

.products-table-container {
  margin: 30px 5%;
  overflow-x: auto;
}

.products-table {
  width: 100%;
  border-collapse: collapse;
  background-color: #202124;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.products-table th {
  background-color: #1a73e8;
  color: white;
  padding: 15px;
  text-align: left;
  font-weight: bold;
  font-size: 1.1em;
}

.product-row {
  border-bottom: 1px solid #333;
  transition: background-color 0.2s ease;
}

.product-row:hover {
  background-color: #2a2a2a;
}

.product-row:last-child {
  border-bottom: none;
}

.products-table td {
  padding: 15px;
  color: white;
  vertical-align: middle;
}

.product-image-cell {
  width: 100px;
}

.product-image {
  width: 80px;
  height: 60px;
  object-fit: cover;
  border-radius: 4px;
}

.product-name {
  font-weight: bold;
  font-size: 1.1em;
}

.product-price {
  font-weight: bold;
}

.original-price {
  text-decoration: line-through;
  color: #999;
  font-size: 0.9em;
}

.current-price {
  color: #4CAF50;
  font-size: 1.2em;
}

.discount-label {
  background-color: #1a73e8;
  color: white;
  padding: 2px 6px;
  border-radius: 3px;
  font-size: 0.8em;
  margin-left: 5px;
}

.price-with-discount {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.stars {
  display: flex;
  gap: 2px;
}

.star {
  color: #666;
  font-size: 1.2em;
}

.star.filled {
  color: #FFD700;
}

.add-to-cart-button {
  background-color: #1a73e8;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9em;
  font-weight: bold;
  transition: background-color 0.2s ease;
}

.add-to-cart-button:hover {
  background-color: #0a57d4;
}

.added-to-cart-button {
  background-color: #666;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  font-size: 0.9em;
  font-weight: bold;
  cursor: not-allowed;
}

.no-products {
  text-align: center;
  margin-top: 50px;
}

.no-products-message {
  font-size: 1.2em;
  color: white;
}

/* Responsive design */
@media (max-width: 768px) {
  .search {
    flex-direction: column;
    align-items: center;
  }
  
  .search-input {
    width: 80%;
    margin-bottom: 10px;
  }
  
  .products-table-container {
    margin: 20px 2%;
  }
  
  .products-table {
    font-size: 0.9em;
  }
  
  .products-table th,
  .products-table td {
    padding: 10px;
  }
  
  .product-image {
    width: 60px;
    height: 45px;
  }
}
</style>

<script>
import axios from 'axios';
import { jwtDecode } from "jwt-decode";

export default {
  name: 'ProductListTable',
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
    isProductInCart(product) {
      return this.cart.some(item => item.id === product.id);
    },
    checkAuthentication() {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const decoded = jwtDecode(token);
          this.userRole = decoded.user.role;
          this.isBan = decoded.user.isBan;
        } catch (error) {
          console.error('Error decoding JWT:', error);
          localStorage.removeItem('token');
        }
      }
    },
    getDiscountPercentage(product) {
      if (product.old_price > product.actual_price) {
        return Math.round(100 - (product.actual_price / product.old_price * 100));
      }
      return 0;
    }
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