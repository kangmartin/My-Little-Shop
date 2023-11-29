<template>
  <div>
    <form @submit.prevent="addProduct">
      <input v-model="productName" placeholder="Name of product" />
      <input v-model="productOldPrice" placeholder="Original price" type="number" />
      <input v-model="productActualPrice" placeholder="New price" type="number" />
      <input type="file" @change="handleFileUpload" />
      <input v-model="productRate" placeholder="Rate" type="number" />
      <button type="submit">Add product</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      productName: '',
      productImageFile: null,
      productOldPrice: 0,
      productActualPrice: 0,
      productRate: 0,
      products: []
    };
  },
  methods: {
    handleFileUpload(event) {
      this.productImageFile = event.target.files[0];
    },
    async addProduct() {
      const formData = new FormData();
      formData.append('name', this.productName);
      formData.append('image', this.productImageFile);
      formData.append('oldPrice', this.productOldPrice);
      formData.append('actualPrice', this.productActualPrice);
      formData.append('rate', this.productRate);

      try {
        const response = await axios.post('http://localhost:3000/api/products/add', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        console.log('Produit added:', response.data);
      } catch (error) {
        console.error('Erreur when try to add product', error);
      }
    },
  }
}
</script>
