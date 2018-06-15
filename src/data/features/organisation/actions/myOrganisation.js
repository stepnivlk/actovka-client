import { getRequest } from '../../../../services/api';

const MY_ORGANISATION_SUCCESS = 'MY_ORGANISATION.SUCCESS';
const MY_ORGANISATION_ERROR = 'MY_ORGANISATION.ERROR';

const myOrganisation = () => {
  const onSuccess = (data) => ({ type: MY_ORGANISATION_SUCCESS, data });

  return (dispatch) => {
    const handleSuccess = (response) => dispatch(onSuccess(response.data.data));
    // TODO: handle error
    const handleError = () => console.trace('myOrganisation error');

    return getRequest('myOrganisation', [], {})
      .then(handleSuccess)
      .catch(handleError);
  };
};

export { MY_ORGANISATION_SUCCESS, MY_ORGANISATION_ERROR };
export default myOrganisation;
