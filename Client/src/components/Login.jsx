import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Login = ({ loginHandler }) => {
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };
  const submitForm = () => {
    loginHandler(state);
    setState((prevState) => ({
      ...prevState,
      email: '',
      password: '',
    }));
  };

  return (
    <div className="login">
      <h2>WELCOME BACK</h2>
      <label htmlFor="email">
        Email:
        <input type="email" id="email" value={state.email} onChange={(event) => handleChange(event)} />
      </label>
      <br />
      <label htmlFor="password">
        Password:
        <input type="text" id="password" value={state.password} onChange={(event) => handleChange(event)} />
      </label>
      <br />
      <button type="submit" onClick={() => submitForm()}>LOGIN</button>
    </div>
  );
};
Login.propTypes = {
  loginHandler: PropTypes.func.isRequired,
};

export default Login;
