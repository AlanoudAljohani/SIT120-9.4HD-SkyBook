<script setup>
import { useThemeStore } from '../stores/themeStore'
import { useFlightStore } from '../stores/flightStore'

const themeStore = useThemeStore()
const flightStore = useFlightStore()
</script>

<template>
  <header>

    <RouterLink
      to="/"
      class="site-title"
    >
      SkyBook
    </RouterLink>

    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/flights">Flights</RouterLink>
      <RouterLink to="/about">About & Contact</RouterLink>

      <span class="saved-count">
        Saved: {{ flightStore.totalCount }}
      </span>

      <button
        class="theme-button"
        @click="themeStore.toggleTheme()"
      >
        {{ themeStore.isDark ? 'Light Mode' : 'Dark Mode' }}
      </button>
    </nav>

  </header>
</template>