import axios from 'axios';
import instance from './ApiController';


const PROXY_URL = window.location.hostname === 'localhost' ? '' : '/proxy';


//메인 api 0
export const mainApi = (setData) => {
    const url = `${PROXY_URL}/function/store`;
  
    const data = {
      loginId: id,
      password: pw,
      email: email,
    };
  
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
      url,
    };
    axios(options).then(
      (r) => {
        console.log('connect');
        console.log(r.data);
        setData(r.data);
        setLoading(true);
      },
      (error) => {
        console.log(error.response.data);
        console.log(data);
      }
    );
  };