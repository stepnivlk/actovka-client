import NotificationEvent from '../../models/NotificationEvent';
import { CLOSE_NOTIFICATION } from './actions/closeNotification';
import { UPDATE_MY_ORGANISATION_SUCCESS } from '../organisation/actions/updateMyOrganisation';

const notificationEventReducer = (state = new NotificationEvent, action) => {
  switch (action.type) {
    case CLOSE_NOTIFICATION:
      return new NotificationEvent;

    case UPDATE_MY_ORGANISATION_SUCCESS:
      return new NotificationEvent({
        isActive: true,
        message: 'Organisation has been saved!'
      });

    default:
      return state;
  };
};

export default notificationEventReducer;
