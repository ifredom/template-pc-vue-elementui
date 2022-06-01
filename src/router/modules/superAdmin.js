/** 二级菜单*/
export default [
  {
    name: "table",
    path: "/table",
    component: (r) =>
      require.ensure([], () => r(require("@/views/superAdmin/table")), "table"),
    children: [],
    meta: {
      id: "10002",
      title: "表格",
      icon: "el-icon-sugar",
    },
  },
  {
    name: "excel",
    path: "/excel",
    component: (r) =>
      require.ensure([], () => r(require("@/views/superAdmin/excel")), "excel"),
    children: [],
    meta: {
      id: "10004",
      icon: "el-icon-soccer",
      title: "Excel",
    },
  },
];
