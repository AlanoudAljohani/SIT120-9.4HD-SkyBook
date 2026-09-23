<script setup>
import { ref } from 'vue'
import heroImage from '../assets/images/hero-plane.jpg'
import melImage from '../assets/images/mel.jpg'
import sydImage from '../assets/images/syd.jpg'
import dubaiImage from '../assets/images/dubai.jpg'

const emit = defineEmits(['change-page'])

const tripType = ref('One Way')
const passengers = ref(1)
const fromCity = ref('')
const toCity = ref('')
const departureDate = ref('')
const returnDate = ref('')

function searchFlights() {
  emit('change-page', 'flights')
}

function viewFlights() {
  emit('change-page', 'flights')
}
</script>

<template>
  <main class="home-page">

    
    <section class="hero">
      <img
        :src="heroImage"
        alt="Airplane flying at sunset"
        class="hero-image"
      >

      <div class="search-box">
        <h2>Find Your Next Flight</h2>

        <p>
          Search and compare flights for your next journey.
        </p>

        <form @submit.prevent="searchFlights">

          <div class="trip-options">
            <select v-model="tripType">
              <option>One Way</option>
              <option>Return</option>
            </select>

            <select v-model.number="passengers">
              <option :value="1">1 Passenger</option>
              <option :value="2">2 Passengers</option>
              <option :value="3">3 Passengers</option>
              <option :value="4">4 Passengers</option>
            </select>
          </div>

          <div class="search-fields">

            <div class="search-field">
              <label for="from">From</label>

              <input
                id="from"
                v-model="fromCity"
                type="text"
                placeholder="Melbourne"
                required
              >
            </div>

            <div class="search-field">
              <label for="to">To</label>

              <input
                id="to"
                v-model="toCity"
                type="text"
                placeholder="Sydney"
                required
              >
            </div>

            <div class="search-field">
              <label for="departure">Departure</label>

              <input
                id="departure"
                v-model="departureDate"
                type="date"
                required
              >
            </div>

            <div
              v-if="tripType === 'Return'"
              class="search-field"
            >
              <label for="return">Return</label>

              <input
                id="return"
                v-model="returnDate"
                type="date"
                required
              >
            </div>

            <button type="submit">
              Search Flights
            </button>

          </div>
        </form>
      </div>
    </section>


    
    <section class="about-home">
      <h2>About SkyBook</h2>

      <p>
        SkyBook makes it simple to search and compare flights for your next trip.
        Travellers can explore flight options, compare prices and choose a flight
        that suits their travel needs.
      </p>

      <p>
        Our goal is to provide a simple and easy-to-use experience for travellers
        planning their journey on desktop or mobile devices.
      </p>
    </section>


    <section class="popular-section">
      <h2>Popular Destinations</h2>

      <div class="destinations">

        
        <div class="card">
          <img
            :src="melImage"
            alt="Melbourne city"
            class="destination-image"
          >

          <h3>Melbourne</h3>

          <p class="destination-price">
            From $120
          </p>

          <p>
            Explore one of Australia's most popular cities, with great food,
            culture and attractions.
          </p>

          <button
            class="button"
            @click="viewFlights"
          >
            View Flights
          </button>
        </div>


       
        <div class="card">
          <img
            :src="sydImage"
            alt="Sydney city"
            class="destination-image"
          >

          <h3>Sydney</h3>

          <p class="destination-price">
            From $150
          </p>

          <p>
            Discover famous landmarks, beautiful beaches and exciting places
            around Sydney.
          </p>

          <button
            class="button"
            @click="viewFlights"
          >
            View Flights
          </button>
        </div>


        
        <div class="card">
          <img
            :src="dubaiImage"
            alt="Dubai city"
            class="destination-image"
          >

          <h3>Dubai</h3>

          <p class="destination-price">
            From $850
          </p>

          <p>
            Experience modern attractions, shopping and a wide range of
            activities in Dubai.
          </p>

          <button
            class="button"
            @click="viewFlights"
          >
            View Flights
          </button>
        </div>

      </div>
    </section>

  </main>
</template>