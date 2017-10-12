import { combineReducers } from 'redux';
import loginReducer from './features/login/loginReducer'

const rootReducer = combineReducers({
  login: loginReducer,
});

export default rootReducer;
