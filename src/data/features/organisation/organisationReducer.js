import Organisation from '../../models/Organisation';
import { MY_ORGANISATION_SUCCESS } from './actions/myOrganisation';
import {
  UPDATE_MY_ORGANISATION_SUCCESS,
  UPDATE_MY_ORGANISATION_OPTIMISTIC,
} from './actions/updateMyOrganisation';

const organisationReducer = (state = new Organisation, action) => {
  switch (action.type) {
    case MY_ORGANISATION_SUCCESS:
      return new Organisation({ ...action.data, isLoaded: true })

    case UPDATE_MY_ORGANISATION_OPTIMISTIC:
      return state.merge(action.data)

    default:
      return state;
  };
};

export default organisationReducer;
