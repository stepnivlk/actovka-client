import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
// Material UI
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Dashboard from 'material-ui/svg-icons/action/dashboard';
import School from 'material-ui/svg-icons/social/school';
import NotificationsActive from 'material-ui/svg-icons/social/notifications-active';
import People from 'material-ui/svg-icons/social/people';
import EventNote from 'material-ui/svg-icons/notification/event-note';
import AccountBalance from 'material-ui/svg-icons/action/account-balance';
import { cyan500, blue500, red500, greenA200 } from 'material-ui/styles/colors';

import { routes } from '../../constants';

const forceNavDown = {'top': '64px'}

const colorFor = (route) => {
  return route === window.location.pathname ? cyan500 : null;
}

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = { activeItem: window.location.pathname };
  }

  handleClick = (route) => {
    this.setState(() => ({ activeItem: window.location.pathname }));
    this.props.history.push(route);
  }

  colorFor = (route) => route === this.state.activeItem ? cyan500 : null

  render() {
    const { isAuthenticated } = this.props;

    if (!isAuthenticated) { return null };

    return (
      <Drawer width={60} open={true} containerStyle={forceNavDown}>
        <MenuItem
          onClick={() => this.handleClick(routes.DASHBOARD)}
          leftIcon={<Dashboard color={this.colorFor(routes.DASHBOARD)} />}
        >
          &nbsp;
        </MenuItem>
        <MenuItem
          onClick={() => this.handleClick(routes.CLIENTS)}
          leftIcon={<People color={this.colorFor(routes.CLIENTS)} />}
        >
          &nbsp;
        </MenuItem>
        <MenuItem
          leftIcon={<School />}
        >
          &nbsp;
        </MenuItem>
        <MenuItem
          leftIcon={<EventNote />}
        >
          &nbsp;
        </MenuItem>
      </Drawer>
    );
  }
}

export default withRouter(Sidebar);
