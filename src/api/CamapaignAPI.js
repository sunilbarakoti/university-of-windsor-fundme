import axios from 'axios';

export default axios.create({
    baseURL : 'http://192.168.5.125:8000',
    headers: {
      "Content-Type": 'multipart/form-data',
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTg0MTY5NzYxLCJqdGkiOiIzYjI1MzBmMzBhNDg0YTI1OGUyZjljNDVlYmYyNzk1ZSIsInVzZXJfaWQiOjF9.5B-5979phiSmC5GQJRTNzODjI-7U62r8Us4pPrjEQnI'
    },
    withCredentials: true,
});