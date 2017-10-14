import Cookie from 'js-cookie'

import { common } from '../../../../constants';

const LOGOUT_SUCCESS = 'LOGOUT.SUCCESS';

const logout = () => {
  Cookie.remove(common.COOKIE_NAME);

  return (dispatch) => {
    dispatch({ type: LOGOUT_SUCCESS });
  }
};

export { LOGOUT_SUCCESS };
export default logout;
