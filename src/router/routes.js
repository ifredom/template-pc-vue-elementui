/* Layout */
import Layout from '@/views/layout'
import System from './system'

const routes = [{
    path: '/',
    name: 'default',
    redirect: '/index',
  },
  {
    name: 'login',
    path: '/login',
    component: (r) => require.ensure([], () => r(require('@/views/login/Login')), 'Login')
  },
  {
    name: '主页',
    path: '/index',
    redirect: '/index/workplat',
    component: Layout,
    children: [{
        name: '404',
        path: '404',
        component: resolve => require(['@/components/common/errorPage/404'], resolve)
      }, {
        name: '首页',
        path: 'workplat',
        component: resolve => require(['@/views/layout/PlatForm'], resolve)
      },
      ...System
    ],
    meta: {
      requiresAuth: true
    }
  }
];
export default routes;