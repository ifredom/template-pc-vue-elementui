import {
  param2Obj
} from '@/utils'
import {
  resolve
} from 'when'

const responseModule = {
  code: -1,
  msg: '',
  data: {}
}
const userMap = {
  admin: {
    code: 0,
    msg: 'success',
    data: {
      roles: ['admin'],
      token: 'admin',
      introduction: '我是超级管理员',
      avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
      name: 'Super Admin'
    }
  },
  ifredom: {
    code: 0,
    msg: 'success',
    data: {
      token: '48e5db151fe84d16b079e4bbaafd54d8',
      roles: ['user'],
      introduction: '我是ifredom',
      avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
      name: 'ifredom'
    }
  }
}
const logoutResponse = {
  code: 0,
  msg: '登出成功',
  data: {}
}

export const loginByUsername = data => {
  return resolve(userMap[data.username])
}
export const getUserInfo = data => {
  return resolve(userMap[data.username])
}
export const logout = () => {
  return resolve(logoutResponse)
}

export default {
  loginByUsername: loginByUsername,
  getUserInfo: loginByUsername,
  logout: loginByUsername
}
