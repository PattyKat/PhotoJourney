/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');
const expressStaticGzip = require('express-static-gzip');
const db = require('../Database/index.js');
const userRouter = require('../Routes/user');

const app = express();
const port = process.env.PORT || 3000;
const cors = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next();
};

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors);

app.use('/', (req, res, next) => {
  console.log(`Now Handling ${req.method} Request from ${req.path}`);
  next();
});

app.use('/user', userRouter);
//put CRUD here

app.use('/', expressStaticGzip('./Client/public', {
  enableBrotli: true,
  orderPreference: ['br', 'gz'],
}));

app.listen(port, () => {
  console.log(`server now listening on port ${port}`);
});
