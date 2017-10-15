import { patchRequest } from '../../../../services/api';

const UPDATE_MY_ORGANISATION_SUCCESS = 'UPDATE_MY_ORGANISATION.SUCCESS';
const UPDATE_MY_ORGANISATION_ERROR = 'UPDATE_MY_ORGANISATION.ERROR';
const UPDATE_MY_ORGANISATION_OPTIMISTIC = 'UPDATE_MY_ORGANISATION.OPTIMISTIC';

const updateMyOrganisation = (payload) => {
  const onSuccess = (data) => ({ type: UPDATE_MY_ORGANISATION_SUCCESS, data });

  return (dispatch) => {
    const handleSuccess = (response) => dispatch(onSuccess(response.data.data));
    // TODO: handle error
    const handleError = () => console.trace('UPDATE myOrganisation error');

    dispatch({ type: UPDATE_MY_ORGANISATION_OPTIMISTIC, data: payload })
    return patchRequest('myOrganisation', [], { organisation: payload })
      .then(handleSuccess)
      .catch(handleError);
  };
};

export {
  UPDATE_MY_ORGANISATION_SUCCESS,
  UPDATE_MY_ORGANISATION_ERROR,
  UPDATE_MY_ORGANISATION_OPTIMISTIC
};
export default updateMyOrganisation;
