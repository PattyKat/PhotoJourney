/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const UserPage = ({ user }) => {
  const { firstname, pictures } = user;
  const picArr = pictures;
  const listItems = picArr.map(({ url, description }, idx) => (
    <li className="feed" key={idx}>
      <img src={url} data-value={idx} className="feed-image" alt="feelings" />
      <div className="imagedesc">{description}</div>
    </li>
  ));
  return (
    <div id="userpage">
      <div id="picture-display">
        <ul>{listItems}</ul>
      </div>
    </div>
  );
};

UserPage.propTypes = {
  user: PropTypes.shape({
    firstname: PropTypes.string,
    pictures: PropTypes.arrayOf(PropTypes.shape({
      url: PropTypes.string,
      description: PropTypes.string,
    })),
  }).isRequired,
};
export default UserPage;
