/* eslint-disable no-console */
const mongoose = require('mongoose');
require('dotenv').config();

const db = mongoose.createConnection(process.env.MONGO_URI,
  { useNewUrlParser: true })
  .then(() => console.log('mongoose connected successfully'))
  .catch((err) => console.log(`mongoose connection error ${err}`));

module.exports = db;
