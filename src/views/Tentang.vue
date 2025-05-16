<template>
  <div class="tentang">
    <h2>Tentang Admin</h2>
    <p>Selamat datang di halaman Tentang Admin. Anda sudah login sebagai admin.</p>
    <button class="logout-btn" @click="logout">Logout Admin</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
function logout() {
  localStorage.removeItem('isAdmin');
  router.push('/admin/login');
}
</script>

<style scoped>
.tentang {
  max-width: 400px;
  margin: 60px auto;
  padding: 2rem;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 2px 16px 0 rgba(60,60,60,0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
}
h2 {
  font-weight: 500;
  margin-bottom: 1.5rem;
  color: #222;
}
p {
  font-size: 1.05rem;
  color: #444;
  margin-bottom: 2rem;
  text-align: center;
}
.logout-btn {
  width: 100%;
  padding: 0.9rem 0;
  background: #1976d2;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  margin-top: 0.5rem;
  transition: background 0.2s;
  box-shadow: 0 1px 4px 0 rgba(25,118,210,0.08);
}
.logout-btn:hover {
  background: #1565c0;
}
</style>
