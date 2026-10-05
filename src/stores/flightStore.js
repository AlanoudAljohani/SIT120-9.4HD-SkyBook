import { defineStore } from 'pinia'

export const useFlightStore = defineStore('flights', {
  state: () => ({
    savedFlights: []
  }),

  getters: {
    totalCount: (state) => state.savedFlights.length,

    isSaved: (state) => (flightId) =>
      state.savedFlights.some((flight) => flight.id === flightId),

    formattedSummary: (state) => {
      return `You have ${state.savedFlights.length} booked flight(s)`
    }
  },

  actions: {
    addFlight(flight) {
      const alreadySaved = this.savedFlights.find(
        item => item.id === flight.id
      )

      if (!alreadySaved) {
        this.savedFlights.push(flight)
      }
    },

    removeFlight(id) {
      this.savedFlights = this.savedFlights.filter(
        flight => flight.id !== id
      )
    },

    resetFlights() {
      this.savedFlights = []
    }
  }
})