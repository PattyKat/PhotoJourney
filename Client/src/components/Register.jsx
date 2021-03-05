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
    <div className="loginReg">
      <h2>REGISTER HERE</h2>
      <input type="text" id="firstname" value={state.firstname} placeholder="first name" onChange={(event) => handleChange(event)} />
      <br />
      <input type="text" id="lastname" value={state.lastname} placeholder="last name" onChange={(event) => handleChange(event)} />
      <br />
      <input type="email" id="registerEmail" value={state.registerEmail} placeholder="email@gmail.com" onChange={(event) => handleChange(event)} />
      <br />
      <input type="password" id="registerPassword" value={state.registerPassword} placeholder="secret password" onChange={(event) => handleChange(event)} />
      <br />
      <button type="submit" onClick={() => submitHandler()}>REGISTER</button>
    </div>
  );
};
Register.propTypes = {
  registerHandler: PropTypes.func.isRequired,
};

export default Register;
