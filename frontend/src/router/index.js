import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomeView.vue';
import Admin from '../views/AdminView.vue';
import Cart from '../views/CartView.vue';
import Registration from '../views/RegistrationView.vue';
import Login from '../views/LoginView.vue';
import ManageProducts from '../views/ManageProductsView.vue';
import { jwtDecode } from "jwt-decode";

const routes = [
  { path: '/', component: Home },
  { path: '/admin', component: Admin, meta: { requiresAuth: true, requiredRole: 'admin' } },
  { path: '/manage-products', component: ManageProducts, meta: { requiresAuth: true, requiredRole: 'admin' } },
  { path: '/cart', component: Cart, meta: { requiresAuth: true , requiredRole: 'user' } },
  { path: '/registration', component: Registration, meta: { requiresUnauth: true } },
  { path: '/login', component: Login, meta: { requiresUnauth: true } }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

function decodeJWT(token) {
  try {
    const decoded = jwtDecode(token);
    const role = decoded.user.role;
    return { decoded, role };
  } catch (error) {
    console.error('Error of decode JWT', error);
    return null;
  }
}

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const token = localStorage.getItem('token');
    if (!token) {
      next({ path: '/login' });
    } else {
      const userInfo = decodeJWT(token);
      if (to.meta.requiredRole && userInfo.role !== to.meta.requiredRole) {
        next({ path: '/' });
      } else {
        next();
      }
    }
  } else if (to.matched.some(record => record.meta.requiresUnauth)) {
    const token = localStorage.getItem('token');
    if (token) {
      next({ path: '/' });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
