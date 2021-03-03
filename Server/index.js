/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');
const expressStaticGzip = require('express-static-gzip');
const mongo = require('../Database/index.js');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/', (req, res, next) => {
  console.log(`Now Handling ${req.method} Request from ${req.path}`);
  next();
});
//put CRUD here

app.use('/', expressStaticGzip('./Client/public', {
  enableBrotli: true,
  orderPreference: ['br', 'gz'],
}));

app.listen(port, () => {
  console.log(`server now listening on port ${port}`);
});
