import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Admin from '../views/Admin.vue';
import Cart from '../views/Cart.vue';
import Registration from '../views/Registration.vue';
import Login from '../views/Login.vue';
import { jwtDecode } from "jwt-decode";
const routes = [
  { path: '/', component: Home },
  { path: '/admin', component: Admin, meta: { requiresAuth: true, requiredRole: 'admin' } },
  { path: '/cart', component: Cart, meta: { requiresAuth: true , requiredRole: 'user' } },
  { path: '/registration', component: Registration },
  { path: '/login', component: Login }
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
  } else {
    next();
  }
});

export default router;
