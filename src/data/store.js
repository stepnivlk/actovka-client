import thunk from 'redux-thunk';
import { applyMiddleware, createStore, compose } from 'redux';
import CurrentUser from './models/CurrentUser';
import rootReducer from './rootReducer';

const initialState = {
  currentUser: new CurrentUser,
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
