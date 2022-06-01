/** 一级路由 */
export default [
  {
    name: "仪表盘",
    path: "/dashboard/default",
    component: (r) =>
      require.ensure([], () => r(require("@/views/dashboard")), "dashboard"),
    meta: {
      id: "10004",
      icon: "el-icon-bicycle",
      title: "dashboard",
    },
  },
];
