const User = require('./model.js');

module.exports = {
  login: (req, res) => {
    res.status(200).send({ msg: 'Login Successful' });
  },
  register: (req, res) => {
    const newUser = req.body;
    User.create(newUser, (err, result) => {
      if (err) {
        res.status(500).send({ msg: 'Registration Failed', err });
      } else {
        res.status(200).send({ msg: 'Registration Successful', user_id: 'id', result });
      }
    });
  },
};
