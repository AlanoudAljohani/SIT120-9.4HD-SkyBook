import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
  state: () => ({
    theme: 'light'
  }),

  getters: {
    isDark: (state) => state.theme === 'dark',

    currentThemeClass: (state) =>
      state.theme === 'dark' ? 'dark-mode' : 'light-mode'
  },

  actions: {
    toggleTheme() {
      if (this.theme === 'light') {
        this.theme = 'dark'
      } else {
        this.theme = 'light'
      }
    },

    setTheme(value) {
      this.theme = value
    }
  }
})