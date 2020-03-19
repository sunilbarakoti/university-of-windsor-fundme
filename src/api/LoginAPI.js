import axios from 'axios';

export default axios.create({
    baseURL : 'http://192.168.5.125:8000',
    headers : {
        "Content-Type" : "application/json",
        'Authorization': 'Bearer ' + localStorage.getItem('access_token')
      },
    withCredentials: true,
});