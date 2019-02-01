/** 系统管理 权限认证路由 */
export default [{
    name: 'HelloWorld',
    path: '/HelloWorld',
    component: (r) => require.ensure([], () => r(require('@/views/HelloWorld')), 'HelloWorld'),
  },
  {
    path: 'system/userList',
    name: '用户列表',
    component: (r) => require.ensure([], () => r(require('@/views/system/authority/userList')), 'userList')
  }
]