import { Record } from 'immutable'

const loginObject = {
  isAuthenticated: false,
  jwt: '',
}

const LoginRecord = Record(loginObject)

class Login extends LoginRecord {}

export default Login;
