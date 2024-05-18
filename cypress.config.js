module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  video: true,
  env: {
    GHOST_SITE_URL: 'http://localhost:2368/',
    GHOST_ADMIN_URL: 'http://localhost:2368/ghost/',
    OLD_GHOST_SITE_URL: 'http://localhost:3002/',
    OLD_GHOST_ADMIN_URL: 'http://localhost:3002/ghost/',
    USERNAME: "darth@vader.com",
    PASSWORD: "yosoytupadre2"
  }
};
