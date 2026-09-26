<script setup>
import { ref } from 'vue'
import { useThemeStore } from './stores/themeStore'

import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'

const themeStore = useThemeStore()
const customerData = ref(null)

function saveCustomerData(formData) {
  customerData.value = formData
}
</script>

<template>
  <div :class="{ 'dark-mode': themeStore.isDark }">

    <AppHeader />

    <RouterView
      @form-submitted="saveCustomerData"
    />

    <section
      v-if="customerData"
      class="acknowledgement-card"
    >
      <h2>Customer Acknowledgement</h2>

      <p>Thank you, {{ customerData.name }}.</p>
      <p>Passengers: {{ customerData.passengers }}</p>
      <p>Travel Type: {{ customerData.travelType }}</p>
      <p>Destination: {{ customerData.destination }}</p>

      <p v-if="customerData.updates">
        Travel updates: Yes
      </p>

      <p v-else>
        Travel updates: No
      </p>
    </section>

    <AppFooter />

  </div>
</template>