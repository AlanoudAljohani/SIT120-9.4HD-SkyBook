<script setup>
import ContactForm from '../components/ContactForm.vue'
import aboutImage from '../assets/images/about-airport.jpg'

defineProps({
  customerName: {
    type: String,
    default: 'SkyBook Customer'
  }
})

const emit = defineEmits(['form-submitted'])

function receiveForm(formData) {
  emit('form-submitted', formData)
}
</script>

<template>
  <main>

    <section class="about-banner">
      <img
        :src="aboutImage"
        alt="Person searching for flights on a laptop"
        class="about-hero"
      >

      <div class="about-banner-text">
        <h2>About SkyBook</h2>

        <p>
          SkyBook helps travellers search for flights, compare prices
          and choose a suitable option for their trip.
        </p>
      </div>
    </section>

    <section class="about-content">
      <h2>Plan Your Journey with SkyBook</h2>

      <p>
        SkyBook is designed to make flight planning simple and convenient.
        Travellers can browse available flights, compare important details
        such as airlines, departure times and prices, and book the option
        that best suits their journey.
      </p>

      <p>
        The website also provides useful filters to help travellers narrow
        their search. Booked flights can be reviewed and managed from the
        booking summary while users continue browsing other flight options.
      </p>

      <h3>Our Goal</h3>

      <p>
        Our goal is to provide a clear and easy-to-use experience across
        desktop and mobile devices, helping travellers organise their trip
        with less effort.
      </p>
    </section>

    <section class="contact">

      <div class="contact-info">
        <h2>Contact Us</h2>

        <p>
          If you need help with your flight search, you can contact us below.
        </p>

        <p>Email: support@skybook.com</p>
        <p>Phone: +61 3 5555 1234</p>
        <p>Location: Melbourne, Australia</p>

        <h3>Support Hours</h3>
        <p>Monday to Friday</p>
        <p>9:00 AM - 5:00 PM</p>
      </div>

      <ContactForm
        :customer-name="customerName"
        @submit-form="receiveForm"
      />

    </section>

  </main>
</template>