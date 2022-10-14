'use strict';

require('dotenv').config(); 

const express = require('express');

const data = require('./data.json');

const app = express();

app.use('/', express.static('public'));

app.set('view engine', 'pug');

// Generating routes for all planets
const planetsNames = data.map(({ name }) => name);

data.forEach(planet => {
  app.get(`/${planet.name.toLowerCase()}`, (_, res) => {
    res.render('index', {
      planet,
      planetsNames 
    });
  });
});

// Redirecting to first planet on a list
app.get('/', (_, res) => {
  res.redirect(`/${data[0].name.toLowerCase()}`);
});

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
