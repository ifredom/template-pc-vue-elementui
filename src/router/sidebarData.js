// 模拟接口返回数据
export default [{
    children: [],
    meta: {
      id: '10001',
      title: '登陆',
      path: '/login',
      icon: 'icon-fenleiorguangchangorqitatianchong',
    }
  },
  {
    meta: {
      id: '10002',
      title: '一级菜单',
      path: '/page1',
      icon: 'icon-fenleiorguangchangorqitatianchong',
    },
    children: []
  },
  {
    meta: {
      id: '10003',
      title: '多级菜单',
      path: '/page2',
      icon: 'icon-gengduotianchong',
    },
    children: [{
        meta: {
          id: '10004',
          path: '/page2/other1',
          icon: 'icon-wenbenbianjitianchong',
          title: '二级菜单-1',
        },
        children: []
      },
      {
        meta: {
          id: '10004',
          path: '/page2/other2',
          icon: 'icon-wenbenbianjitianchong',
          title: '二级菜单-2',
        },
        children: []
      },
      {
        meta: {
          id: '10005',
          path: '/page2/other3',
          icon: 'icon-wenbenbianjitianchong',
          title: '二级菜单-3',
        },
        children: [{
            meta: {
              id: '10006',
              path: '/page2/other3',
              icon: 'icon-wenbenbianjitianchong',
              title: '三级菜单-1',
            },
            children: []
          },
        ]
      }
    ]
  },
]