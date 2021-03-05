/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const MenuModal = ({ handleMenuModal, logout }) => (
  <div id="menuModalContainer">
    <div id="menuModalHeader">
      <div id="menuheader">Menu</div>
      <button type="button" id="menuModalButton" onClick={() => handleMenuModal()}>X</button>
    </div>
    <div id="allyContainer">
      {/* <span>Allies</span> */}
      <ol id="allies">
        <li>
          <div>Role: Mentor</div>
          <div>Name: Micheal</div>
          <div id="phoneimg" />
          <button type="button" style={{ backgroundColor: 'lightgreen' }}>remove</button>
        </li>
        <li>
          <div>Role: Mental Health Professional</div>
          <div>Name: Dr. Ava Caprio</div>
          <div id="phoneimg" />
          <button type="button" style={{ backgroundColor: 'lightgreen' }}>remove</button>
        </li>
      </ol>
    </div>
    <div>
      <button type="button" id="uploadPhotoActivate" style={{ backgroundColor: 'lightblue' }}>Upload New Photo</button>
    </div>
    <div>
      <button type="button" id="logout" style={{ backgroundColor: 'lightred' }} onClick={() => logout()}>LOGOUT</button>
    </div>
  </div>
);

MenuModal.propTypes = {
  handleMenuModal: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
};
export default MenuModal;
