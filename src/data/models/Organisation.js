import { Record } from 'immutable';

const organisationObject = {
  id: null,
  name: '',
  isLoaded: false,
};

const OrganisationRecord = Record(organisationObject);

class Organisation extends OrganisationRecord {};

export default Organisation;
