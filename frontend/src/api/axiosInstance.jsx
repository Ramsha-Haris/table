import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000', // your backend base URL
 
 withCredentials: true,            // ✅ send cookies with requests
});

export default axiosInstance;
