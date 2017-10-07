import { Record } from 'immutable'

const currentUserObject = {
  id: null,
  email: null,
  isAuthenticated: false,
}

const CurrentUserRecord = Record(currentUserObject)

class CurrentUser extends CurrentUserRecord {}

export default CurrentUser
