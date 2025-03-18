const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    video: true, // grabar video
    screenshots: true, // capturar pantallas
    baseUrl: "https://institutoweb.com.ar", // url base de la aplicación
    viewportWidth: 1200, // ancho de la ventana
    viewportHeight: 600, // alto de la ventana
    defaultCommandTimeout: 4000, // tiempo de espera por defecto
    retries: 1, // cantidad de reintentos

    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    experimentalStudio:true,
  },
});
