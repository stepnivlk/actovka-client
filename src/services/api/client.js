import axios from 'axios'

const clientHeaders = () => {
  // const token = Cookie.get('api-token')
  const token = false

  return token ? { Authorization: `Bearer ${token}` } : {};
};

const baseURL = () => {
  // if (process.env.ENVIRONMENT === 'production') {
    // return process.env.API_BASE_URL
  // }

  // const hostname = [window.location.protocol, window.location.hostname].join('//')

  // return [hostname, process.env.API_BASE_PORT].join(':')

  return 'http://localhost:3004';
};

const client = axios.create({ baseURL: baseURL() });

export { client, clientHeaders };
