<template>
  <main class="login-wrapper fade-in mt-5 pt-5">
    <div class="form-box text-center">
      <h2 class="mb-4">Login</h2>
      <form @submit.prevent="handleLogin">
        <div class="mb-3">
          <label class="form-label">Email</label>
          <input v-model="email" class="form-control" type="email" placeholder="Enter your email" required />
        </div>
        <div class="mb-3">
          <label class="form-label">Password</label>
          <input v-model="password" class="form-control" type="password" placeholder="Enter your password" required />
        </div>
        <button class="btn btn-primary w-100 btn-login" type="submit">Log In</button>
      </form>
    </div>
  </main>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      email: '',
      password: ''
    };
  },
  mounted() {
    const activeUser = localStorage.getItem("activeUser");
    if (activeUser) {
      alert("You are already logged in. Please logout first to login another account.");
      this.$router.push("/profile");
    }
  },
  methods: {
    handleLogin() {
      const storedUserRaw = localStorage.getItem(this.email.trim());
      if (!storedUserRaw) {
        alert("No user found with this email.");
        return;
      }

      const user = JSON.parse(storedUserRaw);
      if (user.password !== this.password) {
        alert("Incorrect password.");
        return;
      }

      localStorage.setItem("activeUser", user.nickname);
      alert("Login successful!");
      this.$router.push("/profile");
    }
  }
};
</script>

<style scoped>
@import '../assets/login.css';
</style>
