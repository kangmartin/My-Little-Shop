<template>
  <div>
    <!-- Formulaire pour ajouter un produit -->
    <form @submit.prevent="addProduct">
      <input v-model="productName" placeholder="Nom du produit" />
      <input v-model="productOldPrice" placeholder="Ancien prix" type="number" />
      <input v-model="productActualPrice" placeholder="Prix actuel" type="number" />
      <input v-model="productRate" placeholder="Note" type="number" />
      <button type="submit">Ajouter le produit</button>
    </form>


    <!-- Liste des produits -->
    <h2 class="product-title">Liste des produits</h2>
    <div v-if="products.length > 0" class="product-list">
      
      <div v-for="product in products" :key="product.id" class="product-details">
        <div class="product-card">
          <h3 class="product-title">{{ product.name }}</h3>
        <p class="product-price"><span class="original-price">{{ product.old_price }}€</span></p>
        <p class="product-price"><span class="current-price">{{ product.actual_price }}€</span></p>
        </div>
       
    
      </div>
    </div>
    <div v-else>
      <p class="product-title">Aucun produit disponible.</p>
    </div>
  </div>
</template>
<style>

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

  
.product-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1%;
    margin: 60px 8%;

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
<script>
import axios from 'axios';

export default {
  data() {
    return {
      productName: '',
      productOldPrice: 0,
      productActualPrice: 0,
      productRate: 0,
      products: [] // Stocke la liste des produits
    };
  },
  methods: {
    async addProduct() {
      try {
        const response = await axios.post('http://localhost:3000/api/products/add', {
          name: this.productName,
          oldPrice: this.productOldPrice,
          actualPrice: this.productActualPrice,
          rate: this.productRate
        });
        console.log('Produit ajouté:', response.data);
        this.fetchProducts(); // Mise à jour de la liste des produits après l'ajout
      } catch (error) {
        console.error('Erreur lors de l\'ajout du produit:', error);
      }
    },

    async fetchProducts() {
      try {
        const response = await axios.get('http://localhost:3000/api/products/all');
        this.products = response.data;
      } catch (error) {
        console.error('Erreur lors de la récupération des produits:', error);
      }
    }
  },
  mounted() {
    this.fetchProducts(); // Récupère les produits lors du montage du composant
  }
}
</script>
