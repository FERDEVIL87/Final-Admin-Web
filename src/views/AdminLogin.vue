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
  background: #11192b;
  color: #e8eff5;
  transition: border 0.2s, background 0.2s;
}
input:focus {
  border: 1.5px solid #00d9ff;
  background: #1a243a;
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
