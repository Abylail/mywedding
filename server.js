// const express = require('express');
// const { Nuxt, Builder } = require('nuxt');
//
// const config = require('./nuxt.config.js');
//
// // Create new express app
// const app = express();
//
// // Listen to port 3000 or PORT env if provided
// app.listen(process.env.PORT || 80);
//
// // Enable production mode
// config.dev = false;
//
// // Create instance of nuxt
// const nuxt = new Nuxt(config);
//
// // Add nuxt middleware
// app.use(nuxt.render);
//
// // Build on start
// new Builder(nuxt).build().catch(err => {
//   console.error(err);
//   process.exit(1);
// });

// require('@nuxt/cli').run(['start'])
(async function () {
  const {Nuxt} = require('nuxt');
  const app = require('express')();
  const port = process.env.PORT || 80;
  const config = require('./nuxt.config.js');
  config.dev = false;
  const nuxt = new Nuxt(config);
  app.use(nuxt.render);
  app.listen(port);
})();
