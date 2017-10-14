import { combineReducers } from 'redux';
import loginReducer from './features/login/loginReducer'

const rootReducer = combineReducers({
  currentUser: loginReducer,
});

export default rootReducer;
