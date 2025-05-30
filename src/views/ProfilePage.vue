<template>
  <main class="profile-wrapper fade-in mt-5 pt-5">
    <div class="profile-card card shadow-lg border-0 rounded-4 p-4">
      <h2 class="text-center mb-4">My Profile</h2>
      <table class="table table-borderless mb-4">
        <tbody>
          <tr><th scope="row">Nickname</th><td>{{ user.nickname }}</td></tr>
          <tr><th scope="row">Email</th><td>{{ user.email }}</td></tr>
          <tr><th scope="row">Gender</th><td>{{ user.gender }}</td></tr>
          <tr><th scope="row">Date of Birth</th><td>{{ user.dob }}</td></tr>
        </tbody>
      </table>
      <p class="text-center fw-semibold" v-if="wordCount !== null">
        You know {{ wordCount }} word<span v-if="wordCount !== 1">s</span>!
      </p>
      <p class="text-center fw-semibold" v-else>
        Loading your progress...
      </p>
      <div class="text-center mt-4">
        <button class="btn btn-danger btn-logout" @click="logout">Logout</button>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'ProfilePage',
  data() {
    return {
      user: {
        nickname: '-',
        email: '-',
        gender: '-',
        dob: '-'
      },
      wordCount: null
    };
  },
  mounted() {
    const nickname = localStorage.getItem("activeUser");
    if (!nickname) {
      alert("Not logged in!");
      this.$router.push("/login");
      return;
    }

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const stored = localStorage.getItem(key);
      try {
        const user = JSON.parse(stored);
        if (user.nickname === nickname) {
          this.user = user;
          this.wordCount = user.knownWords?.length || 0;
          break;
        }
      } catch { // eslint-disable-next-line no-empty 
      }
    }
  },
  methods: {
    logout() {
      localStorage.removeItem("activeUser");
      this.$router.push("/login");
    }
  }
};
</script>

<style scoped>
@import '../assets/profile.css';
</style>
