/** 一级路由 */
export default [
  {
    name: "异步菜单",
    path: "/asyncPage",
    component: (r) =>
      require.ensure([], () => r(require("@/views/page1")), "HelloWorld"),
    icon: "icon-fenleiorguangchangorqitatianchong",
  },
];
