<template>
  <div class="admin-login-bs">
    <div class="login-card-bs">
      <img src="/logo.png" alt="Logo" class="login-logo-bs" />
      <h2 class="login-title-bs">Sign in as Admin</h2>
      <form @submit.prevent="login">
        <input v-model="username" placeholder="Username" required autofocus />
        <input v-model="password" type="password" placeholder="Password" required />
        <button class="login-btn-bs" type="submit">Login</button>
      </form>
      <div class="social-login-bs">
        <button class="social-btn-bs google" @click="signInWithGoogle" type="button">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="Google" class="social-icon-bs" />
          Sign in with Google
        </button>
        <button class="social-btn-bs facebook" @click="signInWithFacebook" type="button">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg" alt="Facebook" class="social-icon-bs" />
          Sign in with Facebook
        </button>
        <button class="social-btn-bs apple" @click="signInWithApple" type="button">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg" alt="Apple" class="social-icon-bs" />
          Sign in with Apple
        </button>
      </div>
      <p v-if="error" class="error-bs">{{ error }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const username = ref('')
const password = ref('')
const error = ref('')
const router = useRouter()
function login() {
  if (username.value === 'admin' && password.value === 'admin') {
    localStorage.setItem('isAdmin', 'true');
    router.push('/admin/dashboard');
  } else {
    error.value = 'Username atau password salah.';
  }
}
const signInWithGoogle = () => {
  error.value = 'Fitur sign in dengan Google belum tersedia.';
}
const signInWithFacebook = () => {
  error.value = 'Fitur sign in dengan Facebook belum tersedia.';
}
const signInWithApple = () => {
  error.value = 'Fitur sign in dengan Apple belum tersedia.';
}
</script>

<style scoped>
.admin-login-bs {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0c101c;
  font-family: 'Roboto', sans-serif;
}
.login-card-bs {
  background: #1a243a;
  border-radius: 16px;
  box-shadow: 0 4px 24px 0 rgba(0,217,255,0.13);
  padding: 2.5rem 2.2rem 2rem 2.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 320px;
  max-width: 90vw;
  border: 1.5px solid #00d9ff;
}
.login-logo-bs {
  width: 56px;
  margin-bottom: 1.2rem;
}
.login-title-bs {
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 2rem;
  color: #00d9ff;
  letter-spacing: 0.5px;
  font-family: 'Orbitron', sans-serif;
}
form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
}
input {
  padding: 0.85rem 1rem;
  border: 1.5px solid #22304a;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  background-color: #11192b;
  color: #e8eff5;
  transition: border-color 0.2s, background-color 0.2s;
}
input:focus {
  border-color: #00d9ff;
  background-color: #1a243a;
}

/* Styling untuk Tombol Login Utama */
.login-btn-bs {
  width: 100%;
  padding: 0.95rem 0;
  background-color: #00d9ff;
  color: #fff;
  border: none; /* Penting: pastikan tidak ada border yang bisa berubah */
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  margin-top: 0.5rem;
  box-shadow: 0 1px 4px 0 rgba(0,217,255,0.08);
  outline: none; /* Hapus outline default */
  /* Transisi untuk feedback visual yang halus */
  transition: background-color 0.15s ease-out, transform 0.1s ease-out, box-shadow 0.15s ease-out;
}
.login-btn-bs:hover {
  background-color: #00c4e6; /* Sedikit lebih gelap dari #00bcd4 untuk variasi */
}
.login-btn-bs:active {
  background-color: #00b4d8; /* Lebih gelap lagi untuk efek ditekan */
  transform: scale(0.985);    /* Efek ditekan tanpa mengubah layout */
  box-shadow: 0 0 2px 0 rgba(0,217,255,0.1); /* Bayangan lebih kecil saat ditekan */
}
.login-btn-bs:focus-visible {
  outline: 2px solid #00d9ff; /* Outline yang jelas untuk aksesibilitas keyboard */
  outline-offset: 3px;        /* Jarak outline dari tombol */
}


/* Styling untuk Tombol Social Login */
.social-login-bs {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  width: 100%;
  margin-top: 1.2rem;
}
.social-btn-bs {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  padding: 0.7rem 1rem;
  border: 1.5px solid #e0e0e0;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  background-color: #fff;
  color: #222;
  width: 100%;
  box-sizing: border-box;
  justify-content: flex-start;
  outline: none;
  box-shadow: none;
  transition: background-color 0.15s ease-out, border-color 0.15s ease-out, opacity 0.15s ease-out, transform 0.1s ease-out;
}

.social-btn-bs.google,
.social-btn-bs.facebook,
.social-btn-bs.apple {
  /* Tidak perlu style spesifik di sini jika base sudah cukup */
}

.social-btn-bs:hover {
  opacity: 0.85;
  /* background-color: #f5f5f5; */
  /* border-color: #dcdcdc; */
}
.social-btn-bs:active {
  opacity: 1;
  background-color: #ededed;
  border-color: #d0d0d0;
  transform: scale(0.985);
}
.social-btn-bs:focus-visible {
  outline: 2px solid #007bff; /* Warna outline berbeda untuk membedakan jenis tombol jika perlu */
  outline-offset: 2px;
}

.social-icon-bs {
  width: 22px;
  height: 22px;
  flex-shrink: 0;
}
.error-bs {
  color: #ff5252;
  margin-top: 1.2rem;
  font-size: 0.98rem;
  text-align: center;
}
@media (max-width: 500px) {
  .login-card-bs {
    min-width: 90vw;
    padding: 1.5rem 0.5rem 1.5rem 0.5rem;
  }
}
</style>