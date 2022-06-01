/* Layout */
import Layout from "@/layout";

/* 模块 */
import Dashboard from "./modules/dashboard";
import SuperAdmin from "./modules/superAdmin";
import AsynRoutes from "./modules/asyns";

export const constantRoutes = [
  {
    path: "/redirect",
    component: Layout,
    hidden: true,
    children: [
      {
        path: "/redirect/:path(.*)",
        component: () => import("@/views/redirect/index"),
      },
    ],
  },
  {
    path: "/",
    name: "default",
    redirect: "/login",
  },
  {
    name: "login",
    path: "/login",
    component: (resolve) => require(["@/views/login/Login"], resolve),
    hidden: true,
    meta: {
      title: "登录",
    },
  },
  {
    name: "首页",
    path: "/index",
    component: (resolve) => require(["@/layout"], resolve),
    meta: {
      title: "首页",
      icon: "el-icon-menu",
      affix: true,
      requiresAuth: false,
    },
    children: [
      {
        name: "404",
        path: "404",
        component: (resolve) =>
          require(["@/components/common/errorPage/404"], resolve),
        meta: {
          title: "404",
          icon: "el-icon-scissors",
        },
        hidden: true,
      },
      {
        name: "500",
        path: "500",
        component: (resolve) =>
          require(["@/components/common/errorPage/500"], resolve),
        hidden: true,
        meta: {
          title: "500",
          icon: "el-icon-umbrella",
        },
      },
      // 加载每一个业务模块
      ...SuperAdmin,
    ],
  },
  {
    name: "仪表盘",
    path: "/dashboard",
    component: (resolve) => require(["@/layout"], resolve),
    meta: {
      title: "仪表盘",
      icon: "el-icon-menu",
      requiresAuth: false,
    },
    children: [
      // 加载每一个业务模块
      ...Dashboard,
    ],
  },
];

export const asyncRoutes = [...AsynRoutes];

export default constantRoutes;
