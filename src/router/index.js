import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMeta from 'vue-meta'
import NProgress from 'nprogress' // 进度条
import 'nprogress/nprogress.css' // 进度条样式
import routes from './routes'
import {
  getToken
} from '@/utils/auth'
Vue.use(VueRouter)
// Name的值为每一个vue组件的name属性值
Vue.use(VueMeta, {
  Name: 'page'
})
// 进度条配置
NProgress.configure({
  showSpinner: false
})

const whiteList = ['/login'] // 免登陆白名单

// 返回上一级页面的浏览位置
const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition
  } else {
    return {
      x: 0,
      y: 0
    }
  }
}

const router = new VueRouter({
  base: '/',
  mode: 'hash',
  routes,
  scrollBehavior
})

/**
 * 判断是否需要登录权限 以及是否登录
 * 鉴权方式有2种，此处采用方式一
 * 方式一. 统一对所有路由进行鉴权，全部需要登录权限
 * 方式二. 分别对每一个路由进行鉴权，判断该路由是否需要登录权限,路由是否需要登陆权限根据meta的requireAuth参数判断
 */
router.beforeEach((to, from, next) => {
  NProgress.start()

  // 方式一.
  if (getToken()) {
    if (to.path === '/login') {
      next({
        path: '/index'
      })
      NProgress.done()
    }
    NProgress.done()
    next()
  } else {
    /* 无token访问,在免登录白名单，直接进入*/
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
      NProgress.done()
    }
  }

  // 方式二.
  // if (to.matched.some(res => res.meta.requireAuth)) {}
})

/**
 * 创建一个无副作用的路由钩子函数: beforeResolve ，它会在任何页面跳转时触发
 * 出发时机介于' beforeRouteEnter '和' beforeRouteUpdate '之间。
 * 用处就是允许我们确保即使在router参数发生变化时也能提取到其中的数据，
 */
router.beforeResolve(async (routeTo, routeFrom, next) => {
  try {
    for (const route of routeTo.matched) {
      await new Promise((resolve, reject) => {
        // 如果beforeResolve钩子已经被官方vue-router库添加，那么直接调用官方钩子，参数保持跟routerEach相同
        if (route.meta && route.meta.beforeResolve) {
          route.meta.beforeResolve(routeTo, routeFrom, (...args) => {
            if (args.length) {
              // 如果从路由A跳到路由A，跳自己...
              if (routeFrom.name === args[0].name) {
                NProgress.done()
              }
              // 跳转
              next(...args)
              reject(new Error('Redirected'))
            } else {
              resolve()
            }
          })
        } else {
          resolve()
        }
      })
    }
  } catch (error) {
    return
  }
  next()
})

router.afterEach((routeTo, routeFrom) => {
  NProgress.done()
})

export default router
