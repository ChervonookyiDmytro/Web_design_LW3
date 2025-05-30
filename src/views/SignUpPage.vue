<template>
  <main class="registration-wrapper fade-in mt-5 pt-5">
    <div class="form-box text-center">
      <h2 class="mb-4">Sign up</h2>
      <form @submit.prevent="handleSignUp">
        <div class="mb-3">
          <label class="form-label">Nickname</label>
          <input class="form-control" v-model="nickname" type="text" required />
        </div>
        <div class="mb-3">
          <label class="form-label">Email</label>
          <input class="form-control" v-model="email" type="email" required />
        </div>
        <div class="mb-3">
          <label class="form-label">Password</label>
          <input class="form-control" v-model="password" type="password" required />
        </div>
        <div class="mb-3">
          <label class="form-label">Gender</label>
          <select class="form-control" v-model="gender" required>
            <option value="unspecified">Prefer not to say</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div class="mb-3">
          <label class="form-label">Date of Birth</label>
          <input class="form-control" v-model="dob" type="date" required />
        </div>
        <button class="btn btn-primary w-100 btn-singup" type="submit">Sign Up</button>
      </form>
    </div>
  </main>
</template>

<script>
export default {
  name: 'SignUpPage',
  data() {
    return {
      nickname: '',
      email: '',
      password: '',
      gender: 'unspecified',
      dob: ''
    };
  },
  mounted() {
    const activeUser = localStorage.getItem("activeUser");
    if (activeUser) {
      alert("You are already logged in. Please logout first to register a new user.");
      this.$router.push("/profile");
    }
  },
  methods: {
    handleSignUp() {
      if (localStorage.getItem(this.email)) {
        alert("A user with this email already exists.");
        return;
      }

      for (let key in localStorage) {
        if (key.startsWith("userEmailByNickname_")) {
          const existingNick = key.replace("userEmailByNickname_", "");
          if (existingNick === this.nickname) {
            alert("A user with this nickname already exists.");
            return;
          }
        }
      }

      const user = {
        nickname: this.nickname,
        email: this.email,
        password: this.password,
        gender: this.gender,
        dob: this.dob
      };

      localStorage.setItem(this.email, JSON.stringify(user));
      localStorage.setItem("activeUser", this.nickname);
      localStorage.setItem("userEmailByNickname_" + this.nickname, this.email);

      alert("Registration successful!");
      this.$router.push("/profile");
    }
  }
};
</script>

<style scoped>
@import '../assets/sign_up.css';
</style>
