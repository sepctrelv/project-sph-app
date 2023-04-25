/*
 * ------------------------------
 * 对于axios进行二次封装
 * ------------------------------
 */
import axios from "axios";
import store from "@/store";
// 引入进度条
import NProgress from "nprogress";
// 引入进度条样式
import "nprogress/nprogress.css";
// start: 进度条开始  done: 进度条结束

// 1: 利用axios对象的方法create，去创建一个axios实例
// 2: request就是axios，只不过稍微配置一下
const service = axios.create({
  // 基础路径，发请求的时候，路径当中会出现api
  baseURL: "/api",
  // 代表请求超时的时间5s
  timeout: 5000,
});

// 请求拦截器: 在发请求之前，请求拦截器可以检测到，可以在请求发出去之前做一些事情
service.interceptors.request.use((config) => {
  // config: 配置对象，对象里面有一个属性很重要，header请求头
  if (store.state.detail.nanoid_token) {
    // 请求头添加一个字段(userTempId)，和后台沟通好
    config.headers.userTempId = store.state.detail.nanoid_token;
  }
  // 进度条开始
  NProgress.start();
  return config;
});

// 响应拦截器
service.interceptors.response.use(
  (res) => {
    // 成功的回调函数：服务器响应数据回来以后，响应拦截器可以检测到，可以做一些事情
    // 进度条结束
    NProgress.done();
    return res.data;
  },
  (err) => {
    // 响应失败的回调函数
    return Promise.reject(new Error("failed"));
  }
);

export default service;
