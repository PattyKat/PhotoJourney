import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Register = ({ registerHandler }) => {
  const [state, setState] = useState({
    firstname: '',
    lastname: '',
    registerEmail: '',
    registerPassword: '',
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };
  const submitHandler = () => {
    registerHandler(state);
    setState((prevState) => ({
      ...prevState,
      firstname: '',
      lastname: '',
      registerEmail: '',
      registerPassword: '',
    }));
  };

  return (
    <div className="login">
      <h2>REGISTER HERE</h2>
      <label htmlFor="firstname">
        First Name:
        <input type="text" id="firstname" value={state.firstname} onChange={(event) => handleChange(event)} />
      </label>
      <br />
      <label htmlFor="lastname">
        Last Name:
        <input type="text" id="lastname" value={state.lastname} onChange={(event) => handleChange(event)} />
      </label>
      <br />
      <label htmlFor="registerEmail">
        Email:
        <input type="email" id="registerEmail" value={state.registerEmail} onChange={(event) => handleChange(event)} />
      </label>
      <br />
      <label htmlFor="registerPassword">
        Password:
        <input type="text" id="registerPassword" value={state.registerPassword} onChange={(event) => handleChange(event)} />
      </label>
      <br />
      <button type="submit" onClick={() => submitHandler()}>REGISTER</button>
    </div>
  );
};
Register.propTypes = {
  registerHandler: PropTypes.func.isRequired,
};

export default Register;
