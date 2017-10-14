import { getRequest } from '../../../../services/api';

const CURRENT_USER_SUCCESS = 'CURRENT_USER.SUCCESS';
const CURRENT_USER_ERROR = 'CURRENT_USER.ERROR';

const currentUser = () => {
  const onSuccess = (data) => ({ type: CURRENT_USER_SUCCESS, data });
  const onError = () => ({ type: CURRENT_USER_ERROR });

  return (dispatch) => {
    const handleSuccess = (response) => dispatch(onSuccess(response.data.data));
    const handleError = (error) => dispatch(onError(error));

    return getRequest('me', [], {})
      .then(handleSuccess)
      .catch(handleError);
  };
};

export { CURRENT_USER_SUCCESS, CURRENT_USER_ERROR };
export default currentUser;
