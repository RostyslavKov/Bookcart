module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      //
    },
    env: {
      username: '',
      password: 'Aa123123', 
      baseUrl: 'https://bookcart.azurewebsites.net/',
    },
    reporter: 'mochawesome',
      reporterOptions: {
      reportDir: 'cypress/results',
      overwrite: true,
      html: true,
      json: true,
    },
  },
};
