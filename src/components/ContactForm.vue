<script setup>
import { ref } from 'vue'

defineProps({
  customerName: {
    type: String,
    default: 'SkyBook Customer'
  }
})

const emit = defineEmits(['submit-form'])

const form = ref({
  name: '',
  passengers: 1,
  travelType: '',
  destination: '',
  updates: false
})

const errors = ref({
  name: '',
  passengers: '',
  travelType: '',
  destination: ''
})

const destinations = [
  'Melbourne',
  'Sydney',
  'Dubai'
]

const successMessage = ref(false)

function submitForm() {
  errors.value.name = ''
  errors.value.passengers = ''
  errors.value.travelType = ''
  errors.value.destination = ''

  if (form.value.name.trim() === '') {
    errors.value.name = 'Please enter your full name.'
  }

  if (form.value.passengers < 1) {
    errors.value.passengers = 'Please enter at least one passenger.'
  }

  if (form.value.travelType === '') {
    errors.value.travelType = 'Please select a travel type.'
  }

  if (form.value.destination === '') {
    errors.value.destination = 'Please select a destination.'
  }

  if (
    errors.value.name ||
    errors.value.passengers ||
    errors.value.travelType ||
    errors.value.destination
  ) {
    return
  }

  emit('submit-form', { ...form.value })

  successMessage.value = true

  setTimeout(() => {
    form.value.name = ''
    form.value.passengers = 1
    form.value.travelType = ''
    form.value.destination = ''
    form.value.updates = false

    successMessage.value = false
  }, 2000)
}
</script>

<template>
  <div class="contact-form">

    <h2>Travel Enquiry</h2>

    <p>
      Hello {{ customerName }}, please enter your travel details below.
    </p>

    <p class="form-note">
      Fields marked with * are required.
    </p>

    <form @submit.prevent="submitForm">

      <label for="name">Full Name *</label>
      <input
        type="text"
        id="name"
        v-model="form.name"
      >

      <span v-if="errors.name" class="error-message">
        {{ errors.name }}
      </span>


      <label for="passengers">Number of Passengers *</label>
      <input
        type="number"
        id="passengers"
        min="1"
        v-model.number="form.passengers"
      >

      <span v-if="errors.passengers" class="error-message">
        {{ errors.passengers }}
      </span>


      <p>Travel Type *</p>

      <label>
        <input
          type="radio"
          value="One Way"
          v-model="form.travelType"
        >
        One Way
      </label>

      <label>
        <input
          type="radio"
          value="Return"
          v-model="form.travelType"
        >
        Return
      </label>

      <span v-if="errors.travelType" class="error-message">
        {{ errors.travelType }}
      </span>


      <label for="destination">Destination *</label>

      <select
        id="destination"
        v-model="form.destination"
      >
        <option value="">Select a destination</option>

        <option
          v-for="destination in destinations"
          :key="destination"
          :value="destination"
        >
          {{ destination }}
        </option>
      </select>

      <span v-if="errors.destination" class="error-message">
        {{ errors.destination }}
      </span>


      <label>
        <input
          type="checkbox"
          v-model="form.updates"
        >
        Receive travel updates (optional)
      </label>


      <p v-if="successMessage" class="success-message">
        Your enquiry was submitted successfully.
      </p>


      <button type="submit">
        Submit
      </button>

    </form>

  </div>
</template>