/* eslint-disable react/sort-comp */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-alert */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
import React from 'react';
import axios from 'axios';
import Login from './Login';
import Register from './Register';
import UserPage from './UserPage';
import MenuModal from './MenuModal';
import MyDropzone from './MyDropzone';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: '',
      userData: {},
      login: true,
      userPage: false,
      menu: false,
      dropzone: false,
    };
    this.loginHandler = this.loginHandler.bind(this);
    this.registerHandler = this.registerHandler.bind(this);
    this.handleMenuModal = this.handleMenuModal.bind(this);
    this.logout = this.logout.bind(this);
    this.dropzone = this.dropzone.bind(this);
    this.onPhotoUpload = this.onPhotoUpload.bind(this);
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
      .then(() => {
        alert('registration successful, please login');
        console.log('registration successful');
      })
      .catch((err) => {
        alert('registration failed: Email already in use.');
        console.log('sorry, problem with registration', err);
      });
  }

  handleMenuModal() {
    const { menu } = this.state;
    this.setState({ menu: !menu });
  }

  logout() {
    const { userPage, menu, login } = this.state;
    this.setState({ menu: !menu });
    this.setState({ userPage: !userPage });
    this.setState({ login: !login });
  }

  dropzone() {
    const { userPage, menu, dropzone } = this.state;
    this.setState({ menu: !menu });
    this.setState({ userPage: !userPage });
    this.setState({ dropzone: !dropzone });
  }

  onPhotoUpload(photo) {
    console.log(photo);
    //add handling for photo and text in here
    const { userPage, dropzone } = this.state;
    this.setState({ userPage: !userPage });
    this.setState({ dropzone: !dropzone });
  }

  render() {
    const {
      login, userPage, userData, menu, dropzone,
    } = this.state;
    return (
      <div id="uberContainer">
        {!userPage && <div id="title"><span>PhotoJourney</span></div>}
        {userPage
        && (
        <div id="userpage-header">
          <div className="hello">{`Hello, ${userData.firstname}!`}</div>
          <div className="iconContainer">
            <div className="userAvatar" />
            <div className="menuIcon" onClick={() => this.handleMenuModal()} />
          </div>
        </div>
        )}
        <div id={login === true ? 'appContainerLogin' : 'appContainerUser'}>
          { login && (
            <div id="flexLoginContainer">
              <Login loginHandler={this.loginHandler} />
              <button id="loginScreenButton" type="button">OR</button>
              <Register registerHandler={this.registerHandler} />
            </div>
          ) }
          { userPage && <UserPage user={userData} /> }
          { menu && (
          <MenuModal
            handleMenuModal={this.handleMenuModal}
            logout={this.logout}
            dropzone={this.dropzone}
          />
          )}
          { dropzone && (
            <div id="dropContainerMain">
              <MyDropzone onPhotoUpload={this.onPhotoUpload} />
              <input type="textarea" placeholder="Tell me about this photo" id="textarea" />
              <button type="submit" style={{ backgroundColor: 'lightblue' }} onClick={() => this.onPhotoUpload()}>UPLOAD</button>
            </div>
          )}
          <div id="iconAttribute">
            Icons made by
            <a href="https://icon54.com/" title="Pixel perfect">Pixel perfect</a>
            {' '}
            from
            <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
