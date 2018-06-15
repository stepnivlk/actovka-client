import thunk from 'redux-thunk';
import { applyMiddleware, createStore, compose } from 'redux';
import rootReducer from './rootReducer';

import CurrentUser from './models/CurrentUser';
import Organisation from './models/Organisation';
import NotificationEvent from './models/NotificationEvent';

const initialState = {
  currentUser: new CurrentUser,
  organisation: new Organisation,
  notificationEvent: new NotificationEvent,
};

const composeEnhancers = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose);

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(
    applyMiddleware(
      thunk,
    ),
  ),
);

export default store;
