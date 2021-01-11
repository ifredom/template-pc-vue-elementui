/** 二级菜单*/
export default [
{
  name: '页面1',
  path: '/page1',
  component: (r) => require.ensure([], () => r(require('@/views/page2')), 'HelloWorld'),
  icon: 'icon-fenleiorguangchangorqitatianchong',
},
{
  name: '页面2',
  path: '/page2/other1',
  component: (r) => require.ensure([], () => r(require('@/views/page2/otherpage3')), 'userList'),
  icon: 'icon-gengduotianchong'
},
{
  name: '页面3',
  path: '/page2/other2',
  component: (r) => require.ensure([], () => r(require('@/views/page2/otherpage1')), 'userList'),
  icon: 'icon-gengduotianchong'
},
{
  name: '页面4',
  path: '/page2/other3',
  component: (r) => require.ensure([], () => r(require('@/views/page2/otherpage2')), 'userList'),
  icon: 'icon-gengduotianchong'
},
]