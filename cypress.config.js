const { defineConfig } = require("cypress");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");

const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Initialize the Cucumber preprocessor plugin
      addCucumberPreprocessorPlugin(on, config);

      // Configure the bundler for Cypress to use esbuild
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      // Returning the modified config
      return config;
    },
    specPattern: [
      "cypress/e2e/features/addToCart.feature",
      "cypress/e2e/*.js",
    ],
    defaultCommandTimeout: 6000,
    reporter: "cypress-mochawesome-reporter",
    video: true,
    env: {
      baseUrl: "https://www.ebay.com",
    },
  },
});
