<template>
  <section class="admin-dashboard-bs">
    <div class="container py-4 py-md-5">
      <h2 class="section-title-bs text-center">Admin Dashboard</h2>
      <div class="row justify-content-center mb-4">
        <div class="col-lg-8">
          <div class="admin-card-bs p-4 mb-4">
            <h3 class="mb-3">Selamat Datang, Admin!</h3>
            <p class="mb-4">Ini adalah halaman dashboard admin. Anda dapat mengelola data, melihat statistik, dan melakukan administrasi lainnya di sini.</p>
            <button class="logout-btn-bs w-100" @click="logout">Logout</button>
          </div>
        </div>
      </div>
      <div class="row g-4">
        <div class="col-md-4">
          <div class="admin-card-bs p-3">
            <h4 class="mb-2">Statistik Pengunjung</h4>
            <p class="mb-0">(Contoh) 1.234 pengunjung bulan ini</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="admin-card-bs p-3">
            <h4 class="mb-2">Data Produk</h4>
            <p class="mb-0">(Contoh) 120 produk aktif</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="admin-card-bs p-3">
            <h4 class="mb-2">Pesanan Masuk</h4>
            <p class="mb-0">(Contoh) 15 pesanan baru</p>
          </div>
        </div>
      </div>
    </div>
  </section>
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
.admin-dashboard-bs {
  --primary-color: #00d9ff;
  --secondary-color: #00c6ff;
  --background-main: #0c101c;
  --background-section: #11192b;
  --background-card: #1a243a;
  --text-light: #e8eff5;
  min-height: 100vh;
  background: var(--background-main);
  color: var(--text-light);
  font-family: 'Roboto', sans-serif;
}
.container {
  width: 100%;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 10px;
  padding-right: 10px;
  box-sizing: border-box;
}
.section-title-bs {
  font-family: 'Orbitron', sans-serif;
  font-size: clamp(1.8rem, 4.5vw, 2.8rem);
  font-weight: 700;
  color: #fff;
  text-shadow: 0 0 6px #fff, 0 0 11px var(--primary-color), 0 0 16px var(--primary-color);
  margin-bottom: 3rem !important;
  position: relative;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.section-title-bs::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 2.5px;
  background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
  border-radius: 1.5px;
  box-shadow: 0 0 8px var(--primary-color), 0 0 5px var(--secondary-color);
}
.admin-card-bs {
  background: var(--background-card);
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.3);
  border: 1px solid rgba(0,217,255,0.25);
  color: var(--text-light);
  margin-bottom: 1.5rem;
}
.logout-btn-bs {
  padding: 0.9rem 0;
  background: var(--primary-color);
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  margin-top: 0.5rem;
  transition: background 0.2s;
  box-shadow: 0 1px 4px 0 rgba(0,217,255,0.08);
}
.logout-btn-bs:hover {
  background: #1565c0;
}
@media (max-width: 600px) {
  .admin-dashboard-bs .container {
    max-width: 98vw;
    padding-left: 4px;
    padding-right: 4px;
  }
  .admin-card-bs {
    padding: 1.2rem 0.7rem;
  }
}
</style>
