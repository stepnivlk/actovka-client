import React from 'react';
import Snackbar from 'material-ui/Snackbar';

import { closeNotification } from '../../data/features/notificationEvent/actions';

const NotificationBar = ({ notificationEvent, dispatch }) => (
  <Snackbar
    open={notificationEvent.isActive}
    message={notificationEvent.message}
    autoHideDuration={4000}
    onRequestClose={() => dispatch(closeNotification)}
  />
);

export default NotificationBar;
