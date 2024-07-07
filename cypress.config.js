const { defineConfig } = require("cypress");


//setup to call the cypress dependencies
module.exports = defineConfig({
  //setup to ignore chromewebsecurity if it isn't working well or it's causing a problem in the headers of Networking in inspect tools
  chromeWebSecurity: false,
  e2e: {
    //defining the baseURL to use in commands.js and call them in other application
    firstBaseUrl: 'https://www.saucedemo.com', // URL padrão
    secondBaseUrl: 'https://www.saucedemo.com/inventory.html',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
