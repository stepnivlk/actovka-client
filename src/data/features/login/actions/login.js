import Cookie from 'js-cookie'

import { common } from '../../../../constants';
import { postRequest } from '../../../../services/api';

const LOGIN_SUCCESS = 'LOGIN.SUCCESS';
const LOGIN_ERROR = 'LOGIN.ERROR';

const COOKIE_EXPIRES = 10;

const login = ({ email, password }) => {
  const onSuccess = (data) => ({ type: LOGIN_SUCCESS, data });
  const onError = () => ({ type: LOGIN_ERROR });

  return (dispatch) => {
    const handleSuccess = (response) => {
      Cookie.set(
        common.COOKIE_NAME,
        response.data.token,
        { expires: COOKIE_EXPIRES }
      );
      dispatch(onSuccess(response.data));
    };
    const handleError = (error) => dispatch(onError(error));

    return postRequest('login', [], { user: { email, password }})
      .then(handleSuccess)
      .catch(handleError)
  };
};

export default login;
export { LOGIN_SUCCESS, LOGIN_ERROR };
