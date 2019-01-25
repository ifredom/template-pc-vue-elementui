import Qs from 'qs';
import request from '../commonUtils';

export const loginByUsername = (data) => {
  return request({
    url: '/login/login',
    method: 'post',
    data: data
  });
}
export const logout = (data) => {
  return request({
    url: '/login/logout',
    data: data,
    method: 'post'
  });
}
export const getUserInfo = (data) => {
  return request({
    url: '/user/info',
    data: data,
    method: 'get'
  });
}