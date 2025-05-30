<template>
  <div>
    <!-- NAVBAR -->
    <nav class="navbar navbar-expand-lg navbar-light fixed-top my-custom-header">
      <div class="container">
        <router-link class="navbar-brand my-navbar-brand" to="/">WordCraft</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item"><router-link class="nav-link my-nav-link" to="/">Home</router-link></li>
            <li class="nav-item"><router-link class="nav-link my-nav-link" to="/practice">Practice</router-link></li>
            <li class="nav-item"><router-link class="nav-link my-nav-link" to="/sign-up">Sign Up</router-link></li>
            <li class="nav-item"><router-link class="nav-link my-nav-link" to="/login">Login</router-link></li>
            <li class="nav-item"><router-link class="nav-link my-nav-link" to="/profile">My Profile</router-link></li>
            <li class="nav-item"><router-link class="nav-link my-nav-link" to="/about">About Us</router-link></li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- PAGE CONTENT -->
    <main>
      <router-view />
    </main>

    <!-- FOOTER -->
    <footer class="text-center py-3 mt-5 fixed-bottom my-footer">
      <div class="container position-relative">
        <p class="m-0">&copy; 2025 WordCraft. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'MainLayout'
}
</script>
