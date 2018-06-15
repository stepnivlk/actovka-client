import { Record } from 'immutable';

const currentUserObject = {
  id: null,
  email: '',
  firstName: '',
  lastName: '',
  username: '',
  role: null,
  token: null,
  isAuthenticated: false,
  loginError: false,
  isManager: false,
};

const CurrentUserRecord = Record(currentUserObject);

class CurrentUser extends CurrentUserRecord {};

export default CurrentUser;
