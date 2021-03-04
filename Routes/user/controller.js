/* eslint-disable no-underscore-dangle */
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const User = require('./model.js');

module.exports = {
  login: (req, res) => {
    User.findOne({ email: req.body.email }, (err, user) => {
      if (err) return err;
      bcrypt.compare(req.body.password, user.password, (err, isMatch) => {
        if (err) {
          throw err;
        }
        if (isMatch) {
          const token = jwt.sign({ id: user._id }, process.env.SECRET, { expiresIn: 86400 });
          //res.status(200).send({ msg: 'Login Successful', token });
          res.status(200).send(token);
        } else {
          res.status(404).send('password did not match');
        }
      });
    });
  },
  register: (req, res) => {
    const person = req.body;
    const { password } = person;
    const saltRounds = 10;
    bcrypt.hash(password, saltRounds, (err, hash) => {
      if (err) console.log(err);
      person.password = hash;
      const newUser = person;
      User.create(newUser, (err, result) => {
        if (err) {
          res.status(500).send({ msg: 'Registration Failed', err });
        } else {
          res.status(200).send({ msg: 'Registration Successful', user_id: result._id });
        }
      });
    });
  },
};
