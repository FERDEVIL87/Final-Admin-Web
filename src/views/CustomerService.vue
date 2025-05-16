<template>
  <section class="pc-list-section-bs">
    <!-- Changed container to be wider, and col-lg-8 to col-lg-10 -->
    <div class="container wide-container py-4 py-md-5">
      <h2 class="section-title-bs text-center">Inbox Customer Service</h2>
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div class="admin-card-bs p-4">
            <h4 class="mb-3" style="font-family:'Orbitron',sans-serif;color:var(--primary-color);">Pesan Masuk</h4>
            <div v-if="inbox.length > 0" class="list-group inbox-list-bs">
              <div v-for="(msg, idx) in inbox" :key="idx" class="list-group-item list-group-item-action flex-column align-items-start bg-transparent border-info mb-2 rounded inbox-item-bs">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1 text-info">{{ msg.nama }}</h5>
                  <small class="text-secondary">{{ msg.email }}</small>
                </div>
                <p class="mb-1 text-light message-content-bs">{{ msg.pesan }}</p> {/* Added class for potential specific styling */}
              </div>
            </div>
            <div v-else class="text-center text-muted py-4">Belum ada pesan masuk.</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
// Contoh data inbox, bisa diganti dengan fetch dari backend
const inbox = ref([
  { nama: 'Budi Santoso', email: 'budi@email.com', pesan: 'Apakah produk XZ-2000 model terbaru masih tersedia dalam warna hitam? Saya juga ingin bertanya mengenai perkiraan waktu pengiriman ke area Surabaya.' },
  { nama: 'Siti Aminah', email: 'siti@email.com', pesan: 'Saya mengalami kendala saat mencoba melakukan klaim garansi untuk produk Y-Series yang saya beli bulan lalu. Bisakah tim Anda membantu prosesnya?' },
  { nama: 'Andi Wijaya', email: 'andi@email.com', pesan: 'Apakah layanan Cash on Delivery (COD) tersedia untuk pembelian laptop gaming seri ROG di wilayah Jakarta Selatan? Jika iya, apakah ada biaya tambahan?' },
  { nama: 'Dewi Lestari', email: 'dewi@email.com', pesan: 'Saya tertarik dengan promo bundle PC Rakitan, namun saya ingin melakukan kustomisasi pada komponen VGA dan RAM. Apakah hal tersebut memungkinkan dan bagaimana prosedurnya? Terima kasih.'}
])
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

/* Original container style - you can keep this if other pages use it */
/*
.container {
  width: 100%;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 10px;
  padding-right: 10px;
  box-sizing: border-box;
}
*/

/* New wider container for this specific page or section */
.container.wide-container { /* Be more specific or use a new class */
  width: 100%;
  /* max-width: 960px; */ /* Example: Bootstrap md breakpoint */
  max-width: 1140px;    /* Example: Bootstrap lg breakpoint, good for wider content */
  /* max-width: 90%; */ /* Alternative: percentage based */
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px; /* Bootstrap default */
  padding-right: 15px; /* Bootstrap default */
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
  width: 100%; /* Ensure card takes full width of its column */
}
.inbox-list-bs {
  margin-top: 1rem;
}
.inbox-item-bs {
  background: var(--background-section) !important;
  border: 1.5px solid var(--primary-color) !important;
  color: var(--text-light) !important;
  transition: background 0.18s, border 0.18s;
  padding: 1rem 1.25rem; /* Added a bit more padding */
}
.inbox-item-bs:hover {
  background: #18213a !important; /* Slightly darker shade on hover */
  border-color: var(--secondary-color) !important; /* Use secondary color on hover for variation */
}

.inbox-item-bs h5 { /* Nama Pengirim */
  font-family: 'Orbitron', sans-serif; /* Give it a bit more style */
  color: var(--primary-color) !important; /* Make name stand out */
  font-size: 1.1rem;
}

.inbox-item-bs small { /* Email */
  font-size: 0.8rem;
  color: var(--text-light) !important;
  opacity: 0.7;
}

.message-content-bs { /* The actual message text */
  font-size: 0.95rem;
  line-height: 1.6; /* Improve readability */
  white-space: pre-wrap; /* Preserve line breaks if any in the message */
}
</style>