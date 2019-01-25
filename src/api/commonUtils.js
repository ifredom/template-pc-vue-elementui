import axios from "axios";
import NProgress from "nprogress";
import Qs from "qs";
import router from "@/router";
import {
  Message
} from "element-ui";
import {
  baseURL
} from "@/api";


const service = axios.default.create({
  baseURL: baseURL, // api请求的baseURL
  timeout: 0,
  // withCredentials: true, // 允许跨域 cookie
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  maxContentLength: 2000,

});

service.interceptors.request.use(
  config => {
    // 对请求参数做加密
    if (config.method === "post" || config.method === "get") {}
    console.log(config);

    return config;
  },
  error => {
    Message({
      type: 'error',
      msg: error
    });
    return Promise.reject(error);
  }
);

// 返回数据的判断校验
service.interceptors.response.use(
  response => {
    // 返回错误标志
    console.log(response);

    if (response.data && response.data.code + "" !== 0) {
      Message({
        type: 'error',
        msg: response.data.msg
      });
      return Promise.reject(new Error(response.data.msg));
    }
    return response;
  },
  error => {
    let requestData = eval("(" + error.response.config.data + ")");
    if (error.response.status === 404) {
      router.push("/index/404");
    } else if (error.response.status === 500) {
      router.push("/index/500");
    } else {
      return Promise.reject(error);
    }
  }
);

export default service