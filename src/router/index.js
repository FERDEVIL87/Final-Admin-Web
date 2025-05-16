import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import ConsoleHandheld from '@/views/ConsoleHandheld.vue'
import Laptop from '@/views/Laptop.vue'
import Hardware from '@/views/Hardware.vue'
import PaketRakitan from '@/views/PaketRakitan.vue'
import CustomerService from '@/views/CustomerService.vue'
import AdminLogin from '@/views/AdminLogin.vue'
import AdminDashboard from '@/views/AdminDashboard.vue'
import Tentang from '@/views/Tentang.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/laptop', name: 'Laptop', component: Laptop },
  { path: '/consolehh', name: 'ConsoleHandheldpc', component: ConsoleHandheld },
  { path: '/hardware', name: 'Hardware', component: Hardware },
  { path: '/paketrakitan', name: 'PaketRakitan', component: PaketRakitan },
  { path: '/cs', name: 'CS', component: CustomerService },
  { path: '/admin/login', name: 'AdminLogin', component: AdminLogin },
  { path: '/admin/dashboard', name: 'AdminDashboard', component: AdminDashboard },
  { path: '/tentang', name: 'Tentang', component: Tentang }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: () => ({ top: 0 })
})

router.beforeEach((to, from, next) => {
  const isAdminLoggedIn = localStorage.getItem('isAdmin') === 'true';
  if (to.path !== '/admin/login' && !isAdminLoggedIn) {
    next('/admin/login');
  } else {
    next();
  }
});

export default router;