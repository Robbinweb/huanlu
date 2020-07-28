export default {
  items: [{
    path: '/admin',
    name: 'Admin',
    fixed: false,
    meta: {
      title: '后台管理',
      keepAlive: false
    },
    blank: resolve => require(['@/views/Admin/index.vue'], resolve)
  }]
}