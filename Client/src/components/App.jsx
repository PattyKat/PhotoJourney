/* eslint-disable no-alert */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
import React from 'react';
import axios from 'axios';
import Login from './Login';
import Register from './Register';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: true,
    };
    this.loginHandler = this.loginHandler.bind(this);
    this.registerHandler = this.registerHandler.bind(this);
  }

  componentDidMount() {
    console.log('mounted');
  }

  loginHandler(loginInfo) {
    console.log(loginInfo);
    axios.post('user/login', loginInfo)
      .then((token) => console.log('login successful', token))
      .catch(() => alert('login failed, please try again'));
  }

  registerHandler({
    firstname, lastname, registerEmail, registerPassword,
  }) {
    const newUser = {
      firstname,
      lastname,
      email: registerEmail,
      password: registerPassword,
    };
    console.log(newUser);
    axios.post('/user/register', newUser)
      .then(() => console.log('registration successful'))
      .catch((err) => console.log('sorry, problem with registration', err));
  }

  render() {
    const { login } = this.state;
    return (
      <div>
        { login && (
        <div>
          <Login loginHandler={this.loginHandler} />
          <Register registerHandler={this.registerHandler} />
        </div>
        ) }
      </div>
    );
  }
}

export default App;
