<template>
    <div class="admin-dashboard">
        <h1 class="admin-title">Admin Dashboard</h1>
        <div class="admin-content">
            <h2>Product Management</h2>
            <button @click="addProduct">Add Product</button>
            <ul>
                <li v-for="product in products" :key="product.id">
                    {{ product.name }}
                    <button @click="editProduct(product)">Edit</button>
                    <button @click="deleteProduct(product)">Delete</button>
                </li>
            </ul>
        </div>
        <div class="admin-content">
            <h2>User Management</h2>
            <ul>
                <li v-for="user in users" :key="user.id">
                    {{ user.name }}
                    <button @click="banUser(user)">Ban</button>
                </li>
            </ul>
        </div>
    </div>
</template>


<script>
import axios from 'axios';
export default {
    name: 'Admin',
    // Add your component logic here
    data() {
        return {
            isAdmin: true,
            username: 'admin',
            products: [],
            users: []
        }
    },
    mounted() {
        this.fetchProducts();
    },

    // axios : library for making HTTP requests.
    computed: {
        headerText() {
            return this.isAdmin ? `Welcome, ${this.username}!` : 'Unauthorized';
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
           async addProduct(product) {
            try {
                const response = await axios.post('http://localhost:3000/api/products/add', product);
                console.log('Produit added:', response.data);
                this.products = [...this.products, response.data]; //  copie du tableau products
            } catch (error) {
                console.error('Erreur when try to add product', error);
            }
        },
        async editProduct(product) {
            try {
                const response = await axios.put(`http://localhost:3000/api/products/${product.id}`, product);
                console.log('Produit edited:', response.data);
                this.products = this.products.map(p => p.id === product.id ? product : p); // map : retourne un nouveau tableau avec les éléments qui correspondent à la condition
            } catch (error) {
                console.error('Erreur when try to edit product', error);
            }
        },
        async deleteProduct(product) {
            try {
                const response = await axios.delete(`http://localhost:3000/api/products/${product.id}`);
                console.log('Produit deleted:', response.data);
                this.products = this.products.filter(p => p.id !== product.id); // filter : retourne un nouveau tableau avec les éléments qui correspondent à la condition
            } catch (error) {
                console.error('Erreur when try to delete product', error);
            }
        },
        async banUser(user) {
            try {
                const response = await axios.put(`http://localhost:3000/api/users/${user.id}`, { banned: true });
                console.log('User banned:', response.data);
                this.users = this.users.map(u => u.id === user.id ? { ...user, banned: true } : u); // { ...user, banned: true } : u) : copie de l'objet user avec banned: true
            } catch (error) {
                console.error('Erreur when try to ban user', error);
            }
        },
    }
}
</script>

<style scoped>
.admin-dashboard {
    background-color: #f2f2f2;
    padding: 20px;
}

.admin-title {
    font-size: 24px;
    color: #333;
    margin-bottom: 20px;
}

.admin-content {
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>