import Vue from 'vue'
import VueRouter from 'vue-router'
import Config from '../config/config';
import AdminRouter from './admin-router';
Vue.use(VueRouter)
// 添加这下面一段代码，就可以解决重复点击路由报错
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
};

let RouteList = [
  {
    path: '/',
    fixed: false,
    component: resolve => require(['@/views/Home/layout/Layout.vue'], resolve),
    meta: {
      title: '首页',
      keepAlive: false
    },
    children: [
      {
        path: '/',
        name: 'Home',
        fixed: false,
        meta: {
          title: '首页',
          keepAlive: true
        },
        component: resolve => require(['@/views/Home/index.vue'], resolve)
      },
      {
        path: '/helloworld',
        name: 'HelloWorld',
        fixed: false,
        meta: {
          title: '你好世界',
          keepAlive: true
        },
        component: resolve => require(['../components/HelloWorld.vue'], resolve)
      }
    ]
  },
  {
    path: '*',
    name: '404',
    fixed: false,
    meta: {
      title: '404',
      keepAlive: false
    },
    components: {
      blank: resolve => require(['@/components/common/404.vue'], resolve)
    }
  }
]
// admin后台
AdminRouter.items.forEach(v => {
  if (!Config.isPermission) {
    RouteList[0].children.push(v)
  } else {
    if (v.fixed) {
      RouteList[0].children.push(v)
    }
  }
})
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: RouteList
})

export default router
