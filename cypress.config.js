const { defineConfig } = require('cypress')

module.exports = defineConfig({
  retries: {
    runMode: 2,
    openMode: 0,
  },
  e2e: {
    setupNodeEvents(on, config) {
    },
    baseUrl: 'http://localhost:8080',
  },
})
