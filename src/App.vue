<script setup>
import { ref } from 'vue'

import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'

import HomeView from './views/HomeView.vue'
import FlightsView from './views/FlightsView.vue'
import AboutView from './views/AboutView.vue'

const currentPage = ref('home')
const customerData = ref(null)

function changePage(page) {
  currentPage.value = page
}

function saveCustomerData(formData) {
  customerData.value = formData
}
</script>

<template>
  <div>

    <AppHeader @change-page="changePage" />

    <HomeView
      v-if="currentPage === 'home'"
      @change-page="changePage"
    />

    <FlightsView
      v-else-if="currentPage === 'flights'"
      @change-page="changePage"
    />

    <AboutView
      v-else-if="currentPage === 'about'"
      customer-name="SkyBook Customer"
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

    <AppFooter @change-page="changePage" />

  </div>
</template>