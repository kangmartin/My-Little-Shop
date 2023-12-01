import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Admin from '../views/Admin.vue'
import Cart from '../views/Cart.vue'
import Registration from '../views/Registration.vue'
import Login from '../views/Login.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/admin', component: Admin },
    { path: '/cart', component: Cart },
    { path: '/registration', component: Registration },
    { path: '/login', component: Login }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router