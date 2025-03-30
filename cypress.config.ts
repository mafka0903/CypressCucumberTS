import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import createEsbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild";
import { allureCypress } from "allure-cypress/reporter";

export default defineConfig({
  projectId: "2ka94p",
  e2e: {
    viewportWidth: 1920,
    viewportHeight: 1080,
    specPattern: "**/*.feature",
    async setupNodeEvents(
      on: Cypress.PluginEvents,
      config: Cypress.PluginConfigOptions
    ): Promise<Cypress.PluginConfigOptions> {
      await addCucumberPreprocessorPlugin(on, config);
      allureCypress(on, config, {
        resultsDir: "allure-results",
      });
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      return config;
    },
    env: {
      omitFiltered: true,
      filterSpecs: true,
    },
    baseUrl: "https://telnyx.com",
    pageLoadTimeout: 6000,
    defaultCommandTimeout: 10000,
  },
});
