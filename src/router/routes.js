/* 模块 */
import SingleStage from './modules/singlestage'
import MultStage from './modules/multistage'
import AsynStage from './modules/asynstage'

const constantRoutes = [{
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
      title: '示例',
      icon: 'icon-fenleiorguangchangorqitatianchong',
      affix: true
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
        component: resolve => require(['@/views/layout/PlatForm'], resolve),
        meta:{
          affix: true
        }
      },
      // 预设值，加载每一个业务模块
      ...SingleStage,
      ...MultStage,
    ],
    meta: {
      requiresAuth: false
    }
  }
]

export const asyncRoutes = [
  ...AsynStage
]

export default constantRoutes