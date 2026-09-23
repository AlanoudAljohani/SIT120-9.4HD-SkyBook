<script setup>
const emit = defineEmits(['change-page'])

function goToPage(page) {
  emit('change-page', page)
}
</script>

<template>
  <header>

    <button
      class="site-title"
      @click="goToPage('home')"
      aria-label="Go to homepage"
    >
      SkyBook
    </button>

    <nav>
      <button @click="goToPage('home')">Home</button>
      <button @click="goToPage('flights')">Flights</button>
      <button @click="goToPage('about')">About & Contact</button>
    </nav>

  </header>
</template>