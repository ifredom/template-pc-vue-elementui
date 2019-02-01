/* 模块 */
import System from './system'

const constantRouterMap = [{
    path: '/',
    name: 'default',
    redirect: '/login'
  },
  {
    name: 'login',
    path: '/login',
    component: resolve => require(['@/views/login/Login'], resolve)
  },
  {
    name: '主页',
    path: '/index',
    redirect: '/index/workplat',
    component: resolve => require(['@/views/layout/Index'], resolve),
    meta: {
      title: 'Example',
      icon: 'icon-fenleiorguangchangorqitatianchong'
    },
    children: [{
        name: '404',
        path: '404',
        component: resolve => require(['@/components/common/errorPage/404'], resolve),
        meta: {
          title: '404',
          icon: 'icon-fenleiorguangchangorqitatianchong'
        },
      },
      {
        name: '500',
        path: '500',
        component: resolve => require(['@/components/common/errorPage/500'], resolve)
      },
      {
        name: '首页',
        path: 'workplat',
        component: resolve => require(['@/views/layout/PlatForm'], resolve)
      },
      // 加载每一个业务模块
      ...System
    ],
    meta: {
      requiresAuth: true
    }
  }
]

export const asynAddRouterMap = [{
    name: '404',
    path: '/404',
    component: () => import('@/components/common/errorPage/404')
  },
  {
    name: 'HelloWorld',
    path: '/HelloWorld',
    component: () => import('@/views/HelloWorld'),
    children: [...System],
  },
]

export default constantRouterMap