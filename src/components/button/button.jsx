import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

import './button.scss';

export function Button(props) {
  const handleLogout = (e) => {
    e.preventDefault();
    props.logoutUser('useless param');
  };

  return (
    <Button id='logout-button' type='button' onClick={handleLogout}>
      Logout
    </Button>
  );
}

//prop-types
// give informational warnings in browser if data does not match required shape
LogoutButton.proptypes = {
  logoutUser: PropTypes.func.isRequired,
};