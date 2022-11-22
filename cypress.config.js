const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    env: {
      BASE_URL: 'www.github.com',
    },
    viewportWidth: 1200,
    retries: {
      runMode: 2,
      openMode: 0,
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
