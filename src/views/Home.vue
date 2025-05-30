<template>
  <main class="hero-wrapper fade-in">
    <div class="text-center">
      <h1 class="display-5 fw-bold mb-4">Welcome to WordCraft!</h1>
      <p class="lead text-muted mb-5">
        Your personal companion for learning foreign vocabulary with ease and fun.
      </p>
      <router-link to="/practice" class="btn btn-start px-5 py-3">Start Learning</router-link>
    </div>
  </main>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>
