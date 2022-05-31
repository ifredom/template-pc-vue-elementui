/** 二级菜单*/
export default [
  {
    name: "page1",
    path: "/page1",
    component: (r) =>
      require.ensure([], () => r(require("@/views/page1")), "page1"),
    children: [],
    meta: {
      id: "10002",
      title: "一级菜单",
      icon: "el-icon-notebook-1",
    },
  },
  {
    name: "page2other1",
    path: "/other1",
    component: (r) =>
      require.ensure(
        [],
        () => r(require("@/views/page2/otherpage1")),
        "other1"
      ),
    children: [],
    meta: {
      id: "10004",
      icon: "el-icon-notebook-2",
      title: "二级菜单-1",
    },
  },
  {
    name: "page2other2",
    path: "/page2/other2",
    component: (r) =>
      require.ensure(
        [],
        () => r(require("@/views/page2/otherpage2")),
        "other2"
      ),
    children: [],
    meta: {
      id: "10004",
      icon: "el-icon-toilet-paper",
      title: "二级菜单-2",
    },
  },
  {
    name: "page2other3",
    path: "/page2/other3",
    component: (r) =>
      require.ensure(
        [],
        () => r(require("@/views/page2/otherpage3")),
        "other3"
      ),
    children: [],
    meta: {
      id: "10005",
      icon: "el-icon-first-aid-kit",
      title: "二级菜单-3",
    },
  },
];
