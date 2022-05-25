import axios from 'axios';
import instance from './ApiController';


const PROXY_URL = window.location.hostname === 'localhost' ? '' : '/proxy';


//메인 api 0
export const mainApi = (setData, id, loc, name, store) => {
    const url = `${PROXY_URL}/function/store`;
  
    const data = {
        last_idx: id,
        loc_keyword: loc,
        name_keyword: name,
        store_type: store,
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
      },
      (error) => {
        console.log(error.response.data);
        console.log(data);
        console.log(typeof(id))
      }
    );
  };