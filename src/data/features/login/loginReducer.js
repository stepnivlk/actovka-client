import { LOGIN_SUCCESS, LOGIN_ERROR } from './actions/login';
import Login from '../../models/Login';

const loginReducer = (state = { isAuthenticated: false }, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return new Login({ ...action.data, isAuthenticated: true })

    case LOGIN_ERROR:
      return { isAuthenticated: false }

    default:
      return state
  }
};

export default loginReducer;
