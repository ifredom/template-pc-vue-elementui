
/** 系统管理 权限认证路由 */
export default [
  {
    path: 'system/userList',
    name: '用户列表',
    component: (r) => require.ensure([], () => r(require('@/views/system/authority/userList')), 'userList')
  },
  {
    path: '/login',
    component: (r) => require.ensure([], () => r(require('@/views/login/Login')), 'Login'),
  }
]
