const User = require('./model.js');

module.exports = {
  login: (req, res) => {
    res.status(200).send({ msg: 'Login Successful' });
  },
  register: (req, res) => {
    const newUser = new User({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      password: req.body.password,
      email: req.body.email,
    });
    newUser.save()
      .then(() => res.status(200).send({ msg: 'Registration Successful', user_id: 'id' }))
      .catch((err) => res.status(500).send({ msg: 'Registration Failed', err }));
  },
};
