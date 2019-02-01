export default [{
    children: [],
    meta: {
      id: '10001',
      title: '登陆',
      path: '/login',
      icon: 'icon-fenleiorguangchangorqitatianchong'
    }
  },
  {
    meta: {
      id: '10002',
      title: 'HelloWorld',
      path: '/HelloWorld',
      icon: 'icon-fenleiorguangchangorqitatianchong',
    },
    children: [{
      meta: {
        id: '10009',
        title: '二级菜单',
        path: '/HelloWorld',
        icon: 'icon-gengduotianchong',
      },
      children: []
    }]
  },
  {
    meta: {
      id: '10003',
      title: '多级菜单',
      path: '/HelloWorld',
      icon: 'icon-gengduotianchong',
    },
    children: [{
        meta: {
          id: '10004',
          path: '/system/userList',
          icon: 'icon-wenbenbianjitianchong',
          title: '二级菜单1',
        },
        children: []
      },
      {
        meta: {
          id: '10005',
          path: '/system/userList',
          icon: 'icon-wenbenbianjitianchong',
          title: '二级菜单2',
        },
        children: [{
            meta: {
              id: '10006',
              path: '/system/userList',
              icon: 'icon-wenbenbianjitianchong',
              title: '三级菜单1',
            },
            children: []
          },
          {
            meta: {
              id: '10007',
              path: '/system/userList',
              icon: 'icon-wenbenbianjitianchong',
              title: '三级菜单2',
            },
            children: []
          },
        ]
      }
    ]
  },
]