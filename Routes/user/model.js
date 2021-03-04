const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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
});

userSchema.methods.comparePassword = (candidatePassword, cb) => {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    if (err) {
      return cb(err);
    }
    return cb(null, isMatch);
  });
};
const User = db.model('User', userSchema);

module.exports = User;
