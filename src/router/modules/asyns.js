/** 一级路由 */
export default [
  {
    name: "异步menu",
    path: "/asyncPage",
    component: (r) =>
      require.ensure([], () => r(require("@/views/asyns")), "asyns"),
    meta: {
      id: "10004",
      icon: "el-icon-news",
      title: "asyns",
    },
  },
];
