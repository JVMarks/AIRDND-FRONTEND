import axios from 'axios';

const api = axios.create({
   baseURL: "http://localhost:1119" ,
});

//http://192.168.0.6:1119

// .env REACT_APP_API_URL=http://localhost:1119

export default api;