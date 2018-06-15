import { combineReducers } from 'redux';
import loginReducer from './features/login/loginReducer';
import organisationReducer from './features/organisation/organisationReducer';
import notificationEventReducer from './features/notificationEvent/notificationEventReducer';

const rootReducer = combineReducers({
  currentUser: loginReducer,
  organisation: organisationReducer,
  notificationEvent: notificationEventReducer,
});

export default rootReducer;
