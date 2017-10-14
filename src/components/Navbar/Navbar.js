import React from 'react';
import { withRouter } from 'react-router-dom';
// Material UI
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';
import { blue300, indigo900, cyan500 } from 'material-ui/styles/colors';

import { routes } from '../../constants';
import logout from '../../data/features/logout/actions';

const styles = {
  chip: {
    margin: 4,
  },
};

const MenuWrapper = ({ children, firstName, lastName }) => (
  <IconMenu
    iconButtonElement={
      <Chip style={styles.chip} backgroundColor={cyan500} labelColor='#fff'>
        <Avatar size={32}>{firstName.charAt(0)}</Avatar>
        {`${firstName} ${lastName}`}
      </Chip>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    {children}
  </IconMenu>
)

const menu = ({ firstName, lastName, history, dispatch }) => (
  <MenuWrapper firstName={firstName} lastName={lastName}>
    <MenuItem
      primaryText="Profile"
      onClick={() => history.push(routes.PROFILE)}
    />
    <MenuItem
      primaryText="Log out"
      onClick={() => dispatch(logout())}
    />
  </MenuWrapper>
)

const menuOrNull = (props) => {
  if (!props.isAuthenticated) { return null };

  return menu(props);
};

const Navbar = (props) => (
  <AppBar
    title="actovka"
    showMenuIconButton={false}
    iconElementRight={menuOrNull(props)}
  />
);

export default withRouter(Navbar);
