import axios from 'axios';


const PROXY_URL = '';

const instance = axios.create({
  baseURL: `${PROXY_URL}`,
  timeout: 5000,
});

instance.interceptors.request.use(
  function (config) {
    config.headers['Content-Type'] = 'application/json';

    return config;
  },
  function (error) {
    //request 에러
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
      console.log(response.data.data)
    return response.data.data;
  },
  async (error) => {
   
    return Promise.reject(error);
  }
);

export default instance;
