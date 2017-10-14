import axios from 'axios';
import Cookie from 'js-cookie';

import { common } from '../../constants';

const clientHeaders = () => {
  const token = Cookie.get(common.COOKIE_NAME);

  return token ? { Authorization: `Bearer ${token}` } : {};
};

const baseURL = () => {
  // if (process.env.ENVIRONMENT === 'production') {
    // return process.env.API_BASE_URL
  // }

  // const hostname = [window.location.protocol, window.location.hostname].join('//')

  // return [hostname, process.env.API_BASE_PORT].join(':')

  return 'http://localhost:4000';
};

const client = axios.create({ baseURL: baseURL() });

export { client, clientHeaders };
