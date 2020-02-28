import axios from 'axios';

export default axios.create({
    baseURL : 'http://3.87.64.135:8000',
    headers : {
        "Content-Type" : "application/json"
      }
});