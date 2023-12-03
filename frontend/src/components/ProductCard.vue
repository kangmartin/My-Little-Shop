<template>
  <div class="product-card">
    <img :src="'http://localhost:3000/images/' + product.image" alt="Product Image" class="product-image">
    <div class="product-details">
      <h3 class="product-title">{{ product.name }}</h3>
      
      
      <p class="product-price">
        <span v-if="product.old_price === product.actual_price" class="current-price simple-price">{{ product.actual_price }}€</span>
        <span v-else>
          <span class="original-price">{{ product.old_price }}€</span>
          <span v-if="product.old_price > product.actual_price" class="discount-label">{{ discountPercentage }}% off</span><br><br>
          <span class="current-price">{{ product.actual_price }}€</span>
          
        </span>
      </p>
      <div class="product-rating">
        <span v-for="star in 5" :key="star" class="star" :class="{ filled: star <= product.rate }">★</span>
      </div>
      <br><br>
      <button v-if="!isProductInCart && userRole === 'user' && !isBan" @click="addToCart" class="add-to-cart-button">
        Add to cart
      </button>
      <button v-if="isProductInCart && userRole === 'user' && !isBan" disabled class="added-to-cart-button">
        Added to cart
      </button>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    product: Object,
    isProductInCart: Boolean,
    userRole: String,
    isBan: Boolean
  },
  methods: {
    addToCart() {
      this.$emit('add-to-cart', this.product);
    }
  },
  computed: {
    discountPercentage() {
      if (this.product.old_price > this.product.actual_price) {
        return Math.round(100 - (this.product.actual_price / this.product.old_price * 100));
      }
      return 0;
    }
  }
};

</script>

<style scoped>


.simple-price {
  margin-top: 37px;
}
.discount-label {
    background-color: red; 
    color: white;
    padding: 2px 5px;
    border-radius: 5px;
    font-size: 0.8em;
    margin-right: 5px;
    font-weight: bold;
    margin-left: 17px;
  }


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
  margin-bottom: 10px;
}

.added-to-cart-button {
  background-color: grey;
  color: white;
  padding: 10px;
  border-radius: 5px;
  font-size: 1em;
  border: none;
  margin-bottom: 10px;
}

</style>