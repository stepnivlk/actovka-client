import { Record } from 'immutable';

const notificationEventObject = {
  isActive: false,
  message: ''
};

const NotificationEventRecord = Record(notificationEventObject);

class NotificationEvent extends NotificationEventRecord {};

export default NotificationEvent;
