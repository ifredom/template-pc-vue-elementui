import axios from "axios";
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
  timeout: 5000,
  // withCredentials: true, // 允许跨域 cookie
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  }
});

service.interceptors.request.use(
  config => {
    if (config.method === "get") {
      // axios要求get请求使用params传参，post请求使用data传参.
      config.params = { ...config.data }
    }
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
    // 返回错误
    if (response.data && response.data.code !== 0) {
      Message({
        type: 'error',
        msg: response.data.msg
      });
      return Promise.reject(new Error(response.data.msg));
    }
    return response.data;
  },
  error => {
    // 网络异常时
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