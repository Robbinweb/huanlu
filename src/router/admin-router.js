export default {
  items: [
    {
      path: '/admin',
      name: 'Admin',
      fixed: false,
      meta: {
        title: '后台',
        keepAlive: true
      },
      children: [
        {
          path: '/admin/dashboard',
          name: 'Admin',
          fixed: false,
          meta: {
            title: '首页',
            keepAlive: true
          },
          component: resolve => require(['@/views/Admin/Layout/dashboard.vue'], resolve)
        },
        {
          path: '/admin/index',
          name: 'Admin',
          fixed: false,
          meta: {
            title: '首页',
            keepAlive: true
          },
          component: resolve => require(['@/views/Admin/index.vue'], resolve)
        },
      ],
      component: resolve => require(['@/views/Admin/Layout/layout.vue'], resolve)
    },
  ]
}