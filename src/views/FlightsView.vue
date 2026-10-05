<script setup>
import { ref, computed } from 'vue'
import { useFlightStore } from '../stores/flightStore'
import flightsImage from '../assets/images/flights.jpg'

const flightStore = useFlightStore()

const selectedPrice = ref('All')
const selectedAirline = ref('All')
const selectedTime = ref('All')

const flights = [
  {
    id: 1,
    route: 'Melbourne to Sydney',
    airline: 'SkyAir',
    departure: '9:00 AM',
    arrival: '10:25 AM',
    duration: '1h 25m',
    price: 120,
    time: 'Morning'
  },
  {
    id: 2,
    route: 'Melbourne to Dubai',
    airline: 'Global Air',
    departure: '2:30 PM',
    arrival: '11:50 PM',
    duration: '14h 20m',
    price: 850,
    time: 'Afternoon'
  },
  {
    id: 3,
    route: 'Sydney to Melbourne',
    airline: 'TravelJet',
    departure: '5:00 PM',
    arrival: '6:30 PM',
    duration: '1h 30m',
    price: 135,
    time: 'Afternoon'
  }
]

const filteredFlights = computed(() => {
  return flights.filter((flight) => {
    const airlineMatch =
      selectedAirline.value === 'All' ||
      flight.airline === selectedAirline.value

    const timeMatch =
      selectedTime.value === 'All' ||
      flight.time === selectedTime.value

    let priceMatch = true

    if (selectedPrice.value === 'Under 200') {
      priceMatch = flight.price < 200
    }

    if (selectedPrice.value === '200 to 500') {
      priceMatch = flight.price >= 200 && flight.price <= 500
    }

    if (selectedPrice.value === '500 to 1000') {
      priceMatch = flight.price > 500 && flight.price <= 1000
    }

    return airlineMatch && timeMatch && priceMatch
  })
})

function bookFlight(flight) {
  flightStore.addFlight(flight)
}
</script>

<template>
  <main class="flights-page">

    <section class="flights-banner">
      <img
        :src="flightsImage"
        alt="Airplane at the airport"
        class="flights-image"
      >

      <div class="flights-banner-text">
        <h2>Find the Right Flight</h2>
        <p>
          Compare available flights and choose an option for your journey.
        </p>
      </div>
    </section>

    <section>
      <h2>Available Flights</h2>

      <p>
        Use the filters to narrow your search and compare flights before booking.
        You can book a flight and continue browsing the other available options.
      </p>

      <div class="flight-results-layout">

        <div class="filters">
          <h3>Filter Results</h3>

          <label for="price-filter">Price</label>
          <select id="price-filter" v-model="selectedPrice">
            <option>All</option>
            <option>Under 200</option>
            <option>200 to 500</option>
            <option>500 to 1000</option>
          </select>

          <label for="airline-filter">Airline</label>
          <select id="airline-filter" v-model="selectedAirline">
            <option>All</option>
            <option>SkyAir</option>
            <option>Global Air</option>
            <option>TravelJet</option>
          </select>

          <label for="time-filter">Departure Time</label>
          <select id="time-filter" v-model="selectedTime">
            <option>All</option>
            <option>Morning</option>
            <option>Afternoon</option>
          </select>
        </div>

        <div class="flights">

          <div
            v-for="flight in filteredFlights"
            :key="flight.id"
            class="card"
          >
            <h3>{{ flight.route }}</h3>

            <p>Airline: {{ flight.airline }}</p>
            <p>Departure: {{ flight.departure }}</p>
            <p>Arrival: {{ flight.arrival }}</p>
            <p>Duration: {{ flight.duration }}</p>
            <p>Price: ${{ flight.price }}</p>

            <button
              @click="bookFlight(flight)"
              :disabled="flightStore.isSaved(flight.id)"
              :class="{ 'booked-button': flightStore.isSaved(flight.id) }"
            >
              {{ flightStore.isSaved(flight.id) ? 'Booked' : 'Book' }}
            </button>
          </div>

          <p v-if="filteredFlights.length === 0">
            No flights match the selected filters.
          </p>

        </div>

      </div>
    </section>

    <section class="booking-summary">
      <h2>Booking Summary</h2>

      <p>{{ flightStore.formattedSummary }}</p>

      <p v-if="flightStore.savedFlights.length === 0">
        You have not booked any flights yet.
      </p>

      <div
        v-for="flight in flightStore.savedFlights"
        :key="flight.id"
        class="summary-item"
      >
        <div>
          <h3>{{ flight.route }}</h3>
          <p>Airline: {{ flight.airline }}</p>
          <p>Departure: {{ flight.departure }}</p>
          <p>Price: ${{ flight.price }}</p>
        </div>

        <button @click="flightStore.removeFlight(flight.id)">
          Remove
        </button>
      </div>

      <button
        v-if="flightStore.savedFlights.length > 0"
        class="reset-button"
        @click="flightStore.resetFlights()"
      >
        Clear All
      </button>
    </section>

    <section>
      <h2>Flight Comparison</h2>

      <p>
        Use the table below to compare the available flights.
      </p>

      <div class="table-container">

        <table>
          <thead>
            <tr>
              <th>Route</th>
              <th>Airline</th>
              <th>Departure</th>
              <th>Arrival</th>
              <th>Duration</th>
              <th>Price</th>
            </tr>
          </thead>

          <tbody>
            <tr
              v-for="flight in filteredFlights"
              :key="flight.id"
            >
              <td>{{ flight.route }}</td>
              <td>{{ flight.airline }}</td>
              <td>{{ flight.departure }}</td>
              <td>{{ flight.arrival }}</td>
              <td>{{ flight.duration }}</td>
              <td>${{ flight.price }}</td>
            </tr>
          </tbody>
        </table>

      </div>
    </section>

  </main>
</template>