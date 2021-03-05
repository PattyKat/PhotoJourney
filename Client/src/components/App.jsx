/* eslint-disable react/no-unused-state */
/* eslint-disable no-alert */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
import React from 'react';
import axios from 'axios';
import Login from './Login';
import Register from './Register';
import UserPage from './UserPage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: '',
      userData: {},
      login: true,
      userPage: false,
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
      .then((data) => {
        this.setState({ token: data.data.token });
        this.setState({ userData: data.data.user });
        this.setState({ login: false });
        this.setState({ userPage: true });
      })
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
      pictures: [{
        url: 'https://source.unsplash.com/400x400/?corgi',
        description: 'Perferendis et dignissimos dicta sint ea nam accusamus blanditiis. Eos sit omnis odit. At expedita fugit alias. Et iste fuga odit omnis ea. Aliquam id placeat quisquam et quis labore. Nesciunt et dignissimos eius optio hic.',
      }],
    };
    axios.post('/user/register', newUser)
      .then(() => console.log('registration successful'))
      .catch((err) => console.log('sorry, problem with registration', err));
  }

  render() {
    const { login, userPage, userData } = this.state;
    return (
      <div id="uberContainer">
        {!userPage && <div id="title"><span>PhotoJourney</span></div>}
        <div id={login === true ? 'appContainerLogin' : 'appContainerUser'}>
          { login && (
            <div id="flexLoginContainer">
              <Login loginHandler={this.loginHandler} />
              <button id="loginScreenButton" type="button">OR</button>
              <Register registerHandler={this.registerHandler} />
            </div>
          ) }
          { userPage && <UserPage user={userData} /> }
        </div>
      </div>
    );
  }
}

export default App;
