import Api from '../commonUtils';

export const loginByUsername = (params)=> {
  return Api.request('/login/login', params, 'post');
}
export const logout = (params)=> {
  return Api.request('/login/logout', params, 'post');
}
export const getUserInfo = (params)=> {
  return Api.request('/user/info', params, 'get');
}
