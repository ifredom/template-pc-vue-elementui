import Qs from 'qs';
import request from '../commonUtils';

export const loginByUsername = (data) => {
  return request({
    url: '/login/login',
    method: 'get',
    data: data,
  });
}
export const logout = (data) => {
  return request({
    url: '/login/logout',
    method: 'post',
    data: data,
  });
}
export const getUserInfo = (data) => {
  return request({
    url: '/user/info',
    method: 'get',
    data: data,
  });
}