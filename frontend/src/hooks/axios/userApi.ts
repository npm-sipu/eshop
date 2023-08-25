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


export default instance;