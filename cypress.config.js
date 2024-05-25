const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        log(message) {
          console.log(message);
          return null;
        },
        table(message) {
          console.table(message);
          return null;
        }
      });
    },
    specPattern: "cypress/e2e"
  },
  env: {
    //GHOST_SITE_URL: 'http://localhost:2368/',
    //GHOST_ADMIN_URL: 'http://localhost:2368/ghost/',
    GHOST_SITE_URL: 'https://ghost-y5kp.onrender.com/',
    GHOST_ADMIN_URL: 'https://ghost-y5kp.onrender.com/ghost/',
    USERNAME: "fonsecaleonel2@gmail.com",
    PASSWORD: "pruebasautomatizadas",
    ABLE_TO_SAVE: true
  }
  //"reporter": "mochawesome"
  // "reporterOptions": {
  //   "reportDir": "cypress/reports",
  //   "overwrite": false,
  //   "html": true,
  //   "json": true
  // }
});
