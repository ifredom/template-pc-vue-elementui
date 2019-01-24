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

router.afterEach((routeTo, routeFrom) => {
  // Complete the animation of the route progress bar.
  NProgress.done();
});

export default router;
