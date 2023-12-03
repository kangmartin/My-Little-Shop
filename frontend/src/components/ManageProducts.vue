<template>
    <div class="product-list-container">
      <h2>List of products</h2>
      <ul>
        <li v-for="product in products" :key="product.id">
          <img :src="'http://localhost:3000/images/' + product.image" alt="" class="product-image">
          <span>{{ product.name }} - {{ product.actual_price }}€<br> {{ product.rate }} ★</span>
          <button @click="editProduct(product)" class="button-green">Edit</button>
          <button @click="deleteProduct(product.id)" class="button-red">Delete</button>
        </li>
      </ul>
  
   
      <div v-if="editingProduct" class="edit-form">
        <h3>Edit Product</h3>
        <span>Product Name: </span>
        <input type="text" v-model="editingProduct.name" placeholder="Product Name"><br>
        <span>Old Price: </span>
        <input type="number" v-model="editingProduct.old_price" placeholder="Old Price"><br>
        <span>Actual Price: </span>
        <input type="number" v-model="editingProduct.actual_price" placeholder="New Price"><br>
        <span>Rating: </span>
        <input type="number" v-model="editingProduct.rate" placeholder="Rating"><br>
        <button @click="updateProduct">Save Changes</button>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        products: [],
        editingProduct: null 
      };
    },
    async created() {
      this.fetchProducts();
    },
    methods: {
      async deleteProduct(productId) {
        try {
          await axios.delete(`http://localhost:3000/api/products/delete/${productId}`);
          this.products = this.products.filter(product => product.id !== productId);
        } catch (error) {
          console.error('Erreur when try to delete product :', error);
        }
      },
      async fetchProducts() {
        try {
        const response = await axios.get('http://localhost:3000/api/products/all');
        this.products = response.data;
      } catch (error) {
        console.error('Error when fetch products :', error);
      }
    },
    
    editProduct(product) {
      this.editingProduct = JSON.parse(JSON.stringify(product));
      console.log("Editing Product:", this.editingProduct);
    },
    async updateProduct() {
  try {
    // Mappage des propriétés pour correspondre aux attentes du backend
    const productData = {
      name: this.editingProduct.name,
      oldPrice: this.editingProduct.old_price,
      actualPrice: this.editingProduct.actual_price,
      rate: this.editingProduct.rate
    };

    console.log("Data to be sent to API:", productData);
    const response = await axios.put(`http://localhost:3000/api/products/update/${this.editingProduct.id}`, productData);
    console.log("API Response:", response.data);

    // Mise à jour de la liste des produits
    let index = this.products.findIndex(p => p.id === this.editingProduct.id);
    if (index !== -1) {
      this.products[index] = { ...this.editingProduct };
    }

    // Réinitialisation de editingProduct
    this.editingProduct = null;
  } catch (error) {
    console.error('Error when updating product:', error);
  }
},


    async fetchProducts() {
      try {
        const response = await axios.get('http://localhost:3000/api/products/all');
        this.products = response.data;
      } catch (error) {
        console.error('Error when fetching products:', error);
      }
    },
  }
};
</script>
<style scoped>


.product-list-container {
  background-color: #f7f7f7;
  padding: 20px;
  border-radius: 5px;
  width: 45%;
  height: 567px;
  overflow-y: auto;
}


ul {
  list-style-type: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

li {
  background-color: #f9f9f9;
  border: 1px solid #e1e1e1;
  padding: 10px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 15px;
}

img {
  width: 50px;
  height: auto;
  object-fit: cover;
}

.button-red {

  padding: 5px 10px;
  background-color: #ff4d4f;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}


.button-green {
  margin-left: auto;
  padding: 5px 10px;
  background-color: green;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}
.button-red:hover {
  background-color: #ff7875;
}

h2 {
  font-size: 1.5rem;
  color: black;
  margin-bottom: 20px;
  text-align: center;
}
.edit-form {
  background-color: #eef;
  padding: 20px;
  margin-top: 20px;
  border-radius: 5px;
}

.edit-form input[type="text"],
.edit-form input[type="number"] {
  margin: 10px 0;
  padding: 5px;
  border: 1px solid #ddd;
  border-radius: 3px;
}

.edit-form button {
  padding: 5px 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.edit-form button:hover {
  background-color: #45a049;
}
</style>


  
