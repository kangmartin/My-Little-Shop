<template>
    <header class="admin-header">
        <h1>Admin Dashboard</h1>
        <nav>
            <ul>
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/manage-products">Manage Products</router-link></li>
                <li><router-link to="/manage-users">Manage Users</router-link></li>
                <li>|</li>
                <li><router-link to="/admin-profile">Admin Profile</router-link></li>
                <li>|</li>
                <li><a href="#" @click="logout">Logout</a></li>
            </ul>
        </nav>
    </header>
</template>

<script>
import axios from 'axios';
import { useStore } from 'vuex'; 
import { useRouter } from 'vue-router';

export default {
    name: 'HeaderAdmin',
    setup() {
        const store = useStore();
        const router = useRouter();

        const logout = async () => {
            try {
                // Supposons que vous ayez un endpoint pour la déconnexion
                await axios.post('http://localhost:3000/api/logout');
                store.commit('LOGOUT');  // Efface les données d'authentification du store Vuex
                router.push('/login');   // Redirection vers la page de connexion
            } catch (error) {
                console.error('Erreur lors de la déconnexion', error);
            }
        };

        return { logout };
    }
};
</script>


<style scoped>
.admin-header {
    background-color: #f2f2f2;
    padding: 20px;
}

.admin-header h1 {
    margin: 0;
}

.admin-header nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.admin-header nav ul li {
    display: inline-block;
    margin-right: 10px;
}

.admin-header nav ul li a {
    text-decoration: none;
    color: #333;
}
</style>