/** 一级路由 */
export default [{
  name: '一级菜单',
  path: '/page1',
  component: (r) => require.ensure([], () => r(require('@/views/page1')), 'HelloWorld'),
  icon: 'icon-fenleiorguangchangorqitatianchong'
}
]