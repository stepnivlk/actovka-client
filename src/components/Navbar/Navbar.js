import React from 'react';

// Material UI
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

const menuRight = (isAuthenticated) => {
  if (!isAuthenticated) { return null };

  return <FlatButton label="User" />;
};

const Navbar = ({ isAuthenticated }) => (
  <AppBar
    title="actovka"
    iconElementRight={menuRight(isAuthenticated)}
  />
);

export default Navbar;
