import Qs from 'qs';
import  { client, clientHeaders } from './client';
import endpoints from './endpoints';

const paramsSerializer = queryParams =>
  Qs.stringify(queryParams, { arrayFormat: 'brackets' });

const getRequest = (resources, urlArguments, params = {}) => {
  const url = endpoints[resources](...urlArguments);
  return client.get(url, { headers: clientHeaders(), params, paramsSerializer });
};

const postRequest = (resources, urlArguments, params = {}) => {
  const url = endpoints[resources](...urlArguments);
  return client.post(url, { headers: clientHeaders(), ...params });
};

const patchRequest = (resources, urlArguments, params = {}) => {
  const url = endpoints[resources](...urlArguments);
  return client.patch(url, params, { headers: clientHeaders() });
};

export {
  getRequest,
  postRequest,
  patchRequest,
}
