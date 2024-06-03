import axios from "axios";
import Cookies from "js-cookie";
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + Cookies.get("token"),
  }
});

export default axiosInstance;