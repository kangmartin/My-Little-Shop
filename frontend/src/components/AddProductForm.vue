<template>
  <div class="product-form">
    <h2>Add a product</h2>
    <form @submit.prevent="addProduct" class="form-group">
      <div class="form-field">
        <label for="productName">Name of product:</label>
        <input id="productName" v-model="productName" placeholder="Enter product name" type="text"/>
      </div>
      <div class="form-field">
        <label for="productOldPrice">Original price:</label>
        <input id="productOldPrice" v-model="productOldPrice" placeholder="Enter original price" type="number" />
      </div>
      <div class="form-field">
        <label for="productActualPrice">New price:</label>
        <input id="productActualPrice" v-model="productActualPrice" placeholder="Enter new price" type="number" />
      </div>
      <div class="form-field">
        <label for="productImage">Product image:</label>
        <input id="productImage" type="file" @change="handleFileUpload" />
      </div>
      <div class="form-field">
        <label for="productRate">Rate:</label>
        <input id="productRate" v-model="productRate" placeholder="Enter product rate" type="number" />
      </div>
      <button type="submit" class="submit-button">Add product</button>
    </form>
    <br>
    <div v-if="isProductAdded" class="success-message">
      Product added successfully!
    </div>
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
      products: [],
      isProductAdded: false,
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
        this.$emit('product-added');
        this.isProductAdded = true;
        this.productName = '';
        this.productImageFile = null;
        this.productOldPrice = 0;
        this.productActualPrice = 0;
        this.productRate = 0;

        setTimeout(() => {
          this.isProductAdded = false;
        }, 3000);
      } catch (error) {
        console.error('Erreur when trying to add product', error);
      }
    },
  }
}
</script>


<style scoped>

.success-message {
  color: green;
  font-weight: bold;
}
.product-form {

  padding: 20px;
  border: 1px solid #ccc;
  background-color: #f7f7f7;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  height: 567px;
}


.form-field {
  margin-bottom: 15px;
}

.form-field label {
  display: block;
  font-weight: bold;
  margin-bottom: 10px;
}

.form-field input[type="text"],
.form-field input[type="number"],
.form-field input[type="file"] {
  width: 80%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-size: 16px;
}


.submit-button {
  background-color: #007BFF;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-size: 16px;
}

.submit-button:hover {
  background-color: #0056b3;
}

</style>