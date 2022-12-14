const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    env: {
      BASE_URL: 'https://github.com',
    },
    viewportWidth: 1200,
    retries: {
      runMode: 2,
      openMode: 0,
    },
  },
});
