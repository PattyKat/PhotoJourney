/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const MenuModal = ({ handleMenuModal }) => (
  <div id="menuModalContainer">
    <span>Menu</span>
    <button type="button" onClick={() => handleMenuModal()}>X</button>
  </div>
);

MenuModal.propTypes = {
  handleMenuModal: PropTypes.func.isRequired,
};
export default MenuModal;
