import { postRequest } from '../../../../services/api';

const LOGIN_SUCCESS = 'LOGIN.SUCCESS';
const LOGIN_ERROR = 'LOGIN.ERROR';

const login = ({ email, password }) => {
  const onSuccess = (data) => ({ type: LOGIN_SUCCESS, data });

  const onError = () => ({ type: LOGIN_ERROR });

  return (dispatch) => {
    const handleSuccess = (response) => {
      console.log(response)
      dispatch(onSuccess(response.data))
    };

    const handleError = (error) => {
      dispatch(onError(error))
    };

    return postRequest('login', [], { auth: { email, password }})
      .then(handleSuccess)
      .catch(handleError)
  };
};

export default login;
export { LOGIN_SUCCESS, LOGIN_ERROR };
