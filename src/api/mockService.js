import axios from "axios";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

const mockService = axios.create({
  baseURL: "/mock",
  timeout: 5000,
});

mockService.interceptors.request.use((config) => {
  NProgress.start();
  return config;
});

mockService.interceptors.response.use(
  (res) => {
    NProgress.done();
    return res.data;
  },
  (err) => {
    return Promise.reject(new Error("failed"));
  }
);

export default mockService;
