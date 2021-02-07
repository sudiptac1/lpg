/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */

module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
}
 
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = (on, config) => {
  on('file:preprocessor', cucumber())
}

/* const cypressEslint = require('cypress-eslint');
const babelEsX = require('cypress-babel-esx');

module.exports = (on) => {
    on('file:preprocessor', cypressEslint(babelEsX()));
} */
module.exports = (on, config) => {
  on('before:browser:launch', (browser, launchOptions) => {
    if (browser.family === 'chromium' && browser.name !== 'electron') {
      // in Chromium, preferences can exist in Local State, Preferences, or Secure Preferences
      // via launchOptions.preferences, these can be acccssed as `localState`, `default`, and `secureDefault`

      // for example, to set `somePreference: true` in Preferences:
      launchOptions.preferences.default['preference'] = true

      return launchOptions
    }

    if (browser.family === 'firefox') {
      // launchOptions.preferences is a map of preference names to values
      launchOptions.preferences['some.preference'] = true

      return launchOptions
    }

    if (browser.name === 'electron') {
      // launchOptions.preferences is a `BrowserWindow` `options` object
      launchOptions.preferences.darkTheme = true

      return launchOptions
    }
  })
}

