import Vue from "vue";
import VueRouter from "vue-router";
import VueMeta from "vue-meta";
import NProgress from "nprogress";
import routes from "./routes";

Vue.use(VueRouter);
Vue.use(VueMeta, {
  // 每一个组建的的name属性值
  keyName: "page"
});

// 返回上一级页面的浏览位置
const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition;
  } else {
    return {
      x: 0,
      y: 0
    };
  }
};

const router = new VueRouter({
  base: "/",
  mode: "hash",
  routes,
  scrollBehavior
});

//  判断是否需要登录权限 以及是否登录
router.beforeEach((to, from, next) => {
  NProgress.start();
  if (to.matched.some(res => res.meta.requireAuth)) {
    // 判断是否需要登录权限
    if (localStorage.getItem("user")) {
      // 判断是否登录
      next();
    } else {
      // 没登录则跳转到登录界面
      next({
        path: "/login",
        query: {
          redirect: to.fullPath
        }
      });
    }
  } else {
    next();
  }
});


router.beforeResolve(async (routeTo, routeFrom, next) => {
// 创建一个“beforeResolve”钩子，它会在任何页面跳转时候触发
// 介于' beforeRouteEnter '和' beforeRouteUpdate '之间。
// 用处就是允许我们确保即使在参数发生变化时也能提取数据，
  try {
    // 匹配路由...
    for (const route of routeTo.matched) {
      await new Promise((resolve, reject) => {
        // 如果beforeResolve钩子已经被官方vue-router添加，那么直接调用
        // 参数保持跟routerEach相同
        if (route.meta && route.meta.beforeResolve) {
          route.meta.beforeResolve(routeTo, routeFrom, (...args) => {
            // 如果执行重定向redirect...
            if (args.length) {
              // 如果从路由A跳到路由A...
              if (routeFrom.name === args[0].name) {
                // 进度条动画.
                NProgress.done()
              }
              // 跳转.
              next(...args)
              reject(new Error('Redirected'))
            } else {
              resolve()
            }
          })
        } else {
          // Otherwise, continue resolving the route.
          resolve()
        }
      })
    }
    // 如果beforeResolve钩子选择跳转，立刻返回
  } catch (error) {
    return
  }
  // 运行到这里,继续解析路由.
  next()
})

router.afterEach((routeTo, routeFrom) => {
  NProgress.done();
});

export default router;
