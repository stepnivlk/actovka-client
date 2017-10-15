import { LOGIN_SUCCESS, LOGIN_ERROR } from './actions/login';
import {
  CURRENT_USER_SUCCESS,
  CURRENT_USER_ERROR
} from '../currentUser/actions/currentUser';
import { LOGOUT_SUCCESS } from '../logout/actions/logout';
import CurrentUser from '../../models/CurrentUser';


const loginReducer = (state = new CurrentUser, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
    case CURRENT_USER_SUCCESS:
      return new CurrentUser({ ...action.data, isAuthenticated: true });

    case LOGIN_ERROR:
    case CURRENT_USER_ERROR:
      return new CurrentUser({ loginError: true });

    case LOGOUT_SUCCESS:
      return new CurrentUser({ isAuthenticated: false });

    default:
      return state;
  };
};

export default loginReducer;
