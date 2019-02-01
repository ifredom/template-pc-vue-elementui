import request from '../commonUtils'

// 同步
export const sync = (params) => {
  return request('/sync', params, 'post')
}
