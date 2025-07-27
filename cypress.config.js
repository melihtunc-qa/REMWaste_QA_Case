const { defineConfig } = require("cypress");
require('dotenv').config();
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    email: process.env.EMAIL,
    password: process.env.PASSWORD,
    promptUsername: process.env.PROMPT_USERNAME,
    promptPassword: process.env.PROMPT_PASSWORD,
    testDomain: process.env.TEST_DOMAIN,
  }
});
