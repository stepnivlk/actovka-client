import React from 'react';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import Dashboard from 'material-ui/svg-icons/action/dashboard';
import School from 'material-ui/svg-icons/social/school';
import NotificationsActive from 'material-ui/svg-icons/social/notifications-active';
import People from 'material-ui/svg-icons/social/people';
import EventNote from 'material-ui/svg-icons/notification/event-note';
import AccountBalance from 'material-ui/svg-icons/action/account-balance';

const forceNavDown = {'top': '64px'}

const Sidebar = () => (
  <Drawer width={60} open={true} containerStyle={forceNavDown}>
    <MenuItem leftIcon={<School />}>
      &nbsp;
    </MenuItem>
    <MenuItem leftIcon={<EventNote />}>
      &nbsp;
    </MenuItem>
    <MenuItem leftIcon={<People />}>
      &nbsp;
    </MenuItem>
  </Drawer>
)

export default Sidebar;
