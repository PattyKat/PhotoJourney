const mongoose = require('mongoose');

const db = mongoose.createConnection('mongodb://localhost:27017/photoj',
  { useNewUrlParser: true });

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  account_created: {
    type: String,
    default: Date.now(),
  },
  pictures: Array,
});

const User = db.model('User', userSchema);

module.exports = User;
