<template>
    <div>
      <!-- Formulaire pour ajouter un produit -->
      <input v-model="productName" placeholder="Nom du produit" />
      <input v-model="productOldPrice" placeholder="Ancien prix" type="number" />
      <input v-model="productActualPrice" placeholder="Prix actuel" type="number" />
      <input v-model="productRate" placeholder="Note" type="number" />
      <button @click="addProduct">Ajouter le produit</button>
    </div>
    
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        productName: '',
        productOldPrice: 0,
        productActualPrice: 0,
        productRate: 0
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
          // Réinitialiser les champs du formulaire ou gérer la réponse ici
        } catch (error) {
          console.error('Erreur lors de l\'ajout du produit:', error);
        }
      }
    }
  }
  </script>
  