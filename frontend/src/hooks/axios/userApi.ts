import axios, {AxiosInstance, AxiosError} from 'axios';

let URL = "eshop-backend-three.vercel.app/";

if (process.env.NODE_ENV !== "production") {
  URL = "http://localhost:5000/";
}

const instance: AxiosInstance = axios.create({
  baseURL: URL,
  withCredentials: true,
  headers: {
            "Content-Type": "application/json",
          },
});

// instance.interceptors.response.use(
//   (response) => response,
//   (error: AxiosError) => {
//     if (error.response?.status === 401) {
//       // Handle token expiration or unauthorized access here
//       // For example, you can dispatch a logout action
//       dispatch(logout());
//     }
//     return Promise.reject(error);
//   }
// );

export default instance;