<template>
    <div class="product-card">
      <img :src="image" :alt="title" class="product-image"/>
      <div class="product-details">
        <h2 class="product-title">{{ title }}</h2>
        <div class="product-price">
          <span v-if="isOnSale" class="original-price">{{ originalPrice }}€</span>
          <span class="current-price">{{ currentPrice }}€</span>
          <span v-if="isOnSale" class="discount-label">{{ discountPercent }}% Off</span>
        </div>
        <div class="product-rating">
          <span v-for="star in 5" :key="star" class="star" :class="{ 'filled': star <= rating }">&#9733;</span>
        </div>
        <br/><br/>
        <button v-if="showAddToCart" class="add-to-cart-button" @click="addToCart">Add to cart</button>
      </div>
    </div>
</template>
  
  <script>
  export default {
    name: 'SingleProduct',
    props: {
      title: String,
      image: String,
      originalPrice: Number,
      currentPrice: Number,
      rating: Number,
      showAddToCart: {
        type: Boolean,
        default: true
      }
    },
    computed: {
      isOnSale() {
        return this.originalPrice > this.currentPrice;
      },
      discountPercent() {
        return Math.round((this.originalPrice - this.currentPrice) / this.originalPrice * 100);
      }
    },
    methods: {
      addToCart() {
        alert('This product has been added to your cart');
      }
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
  
  </style>
