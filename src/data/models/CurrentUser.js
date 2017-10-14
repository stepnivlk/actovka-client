import { Record } from 'immutable'

const currentUserObject = {
  id: null,
  email: '',
  firstName: '',
  lastName: '',
  role: null,
  token: null,
  isAuthenticated: false,
}

const CurrentUserRecord = Record(currentUserObject)

class CurrentUser extends CurrentUserRecord {}

export default CurrentUser
