<template>
  <section class="pc-list-section-bs">
    <div class="container py-4 py-md-5">
      <h2 class="section-title-bs text-center">Input Data Laptop</h2>
      <div class="row justify-content-center">
        <div class="col-lg-7">
          <form class="admin-card-bs p-4" @submit.prevent="submitForm">
            <div class="mb-3">
              <label class="form-label">Nama Laptop</label>
              <input v-model="nama" type="text" class="form-control" required />
            </div>
            <div class="mb-3">
              <label class="form-label">Harga</label>
              <input v-model="harga" type="number" class="form-control" required min="0" />
            </div>
            <div class="mb-3">
              <label class="form-label">Kategori</label>
              <select v-model="kategori" class="form-select" required>
                <option value="">Pilih Kategori</option>
                <option value="Low-End">Low-End</option>
                <option value="Mid-Range">Mid-Range</option>
                <option value="High-End">High-End</option>
              </select>
            </div>
            <div class="mb-3">
              <label class="form-label">Deskripsi</label>
              <textarea v-model="deskripsi" class="form-control" rows="3" required></textarea>
            </div>
            <div class="mb-3">
              <label class="form-label">Spesifikasi (opsional)</label>
              <textarea v-model="spesifikasi" class="form-control" rows="3" placeholder="Contoh: CPU: Intel Core i5, RAM: 8GB, SSD: 512GB, ..."></textarea>
            </div>
            <button class="login-btn-bs w-100" type="submit">Simpan Data</button>
            <p v-if="success" class="success-bs mt-3">Data laptop berhasil disimpan!</p>
          </form>
        </div>
      </div>
      <div class="row justify-content-center mt-5">
        <div class="col-12">
          <div class="admin-card-bs p-3">
            <h4 class="mb-3" style="font-family:'Orbitron',sans-serif;color:var(--primary-color);">Daftar Laptop</h4>
            <div class="table-responsive">
              <table class="table table-dark table-striped align-middle table-bordered" style="background:var(--background-section);color:var(--text-light);">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Nama Laptop</th>
                    <th>Harga</th>
                    <th>Kategori</th>
                    <th>Deskripsi</th>
                    <th>Spesifikasi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, idx) in laptopList" :key="idx">
                    <td>{{ idx + 1 }}</td>
                    <td>{{ item.nama }}</td>
                    <td>{{ formatPrice(item.harga) }}</td>
                    <td>{{ item.kategori }}</td>
                    <td>{{ item.deskripsi }}</td>
                    <td>{{ item.spesifikasi }}</td>
                  </tr>
                  <tr v-if="laptopList.length === 0">
                    <td colspan="6" class="text-center text-muted">Belum ada data laptop.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
const nama = ref('')
const harga = ref('')
const kategori = ref('')
const deskripsi = ref('')
const spesifikasi = ref('')
const success = ref(false)
const laptopList = ref([])
function submitForm() {
  laptopList.value.push({
    nama: nama.value,
    harga: harga.value,
    kategori: kategori.value,
    deskripsi: deskripsi.value,
    spesifikasi: spesifikasi.value
  })
  success.value = true
  setTimeout(() => success.value = false, 2000)
  nama.value = ''
  harga.value = ''
  kategori.value = ''
  deskripsi.value = ''
  spesifikasi.value = ''
}
function formatPrice(val) {
  if (!val || isNaN(val)) return 'Rp 0';
  return 'Rp ' + Number(val).toLocaleString('id-ID', {minimumFractionDigits:0});
}
</script>

<style scoped>
.pc-list-section-bs {
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
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 10px;
  padding-right: 10px;
  box-sizing: border-box;
}
.section-title-bs {
  font-family: 'Orbitron', sans-serif;
  font-size: clamp(1.5rem, 4vw, 2.2rem);
  font-weight: 700;
  color: #fff;
  text-shadow: 0 0 6px #fff, 0 0 11px var(--primary-color), 0 0 16px var(--primary-color);
  margin-bottom: 2.5rem !important;
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
  border: 1px solid var(--primary-color);
  color: var(--text-light);
}
.form-label {
  color: #e8eff5;
  font-weight: 500;
}
.form-control, .form-select {
  background: #11192b;
  color: #e8eff5;
  border: 1.5px solid #22304a;
  border-radius: 8px;
  font-size: 1rem;
  margin-bottom: 0.5rem;
}
.form-control:focus, .form-select:focus {
  border: 1.5px solid #00d9ff;
  background: #1a243a;
  color: #fff;
}
.login-btn-bs {
  width: 100%;
  padding: 0.95rem 0;
  background: #00d9ff;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  margin-top: 0.5rem;
  transition: background 0.2s;
  box-shadow: 0 1px 4px 0 rgba(0,217,255,0.08);
}
.login-btn-bs:hover {
  background: #00bcd4;
}
.success-bs {
  color: #00e676;
  font-weight: 500;
  text-align: center;
}
.table {
  background: var(--background-section);
  color: var(--text-light);
  border-radius: 8px;
  overflow: hidden;
}
.table th, .table td {
  vertical-align: middle;
  border-color: var(--primary-color);
}
.table-striped > tbody > tr:nth-of-type(odd) {
  background-color: #18213a;
}
</style>