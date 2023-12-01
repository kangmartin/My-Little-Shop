import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Admin from '../views/Admin.vue';
import Cart from '../views/Cart.vue';
import Registration from '../views/Registration.vue';
import Login from '../views/Login.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/admin', component: Admin, meta: { requiresAuth: true } },
  { path: '/cart', component: Cart },
  { path: '/registration', component: Registration },
  { path: '/login', component: Login }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!localStorage.getItem('token')) {
      
      next({ path: '/login' });
    } else {

      next();
    }
  } else {
   
    next();
  }
});

export default router;
