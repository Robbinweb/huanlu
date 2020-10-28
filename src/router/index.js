import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

let RouteList = [
  {
    path: '/',
    fixed: false,
    component: resolve => require(['@/views/Layout/layout.vue'], resolve),
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
        component: resolve => require(['@/views/Layout/main.vue'], resolve)
      },
      {
        path: '/index',
        name: 'Index',
        fixed: false,
        meta: {
          title: '首页',
          keepAlive: true
        },
        component: resolve => require(['@/views/Layout/main.vue'], resolve)
      },
      {
        path: '/article',
        name: 'article',
        fixed: false,
        meta: {
          title: '文章列表',
          keepAlive: true
        },
        component: resolve => require(['@/views/Article/List.vue'], resolve)
      },
      
      {
        path: '/onfile',
        name: 'Onfile',
        fixed: false,
        meta: {
          title: '归档',
          keepAlive: true
        },
        component: resolve => require(['@/views/Onfile/index.vue'], resolve)
      },
      {
        path: '/about',
        name: 'About',
        fixed: false,
        meta: {
          title: '关于我',
          keepAlive: true
        },
        component: resolve => require(['@/views/About/index.vue'], resolve)
      },
    ]
  },
  {
    path: '/admin',
    name: 'Admin',
    fixed: false,
    meta: {
      title: '后台管理',
      keepAlive: false
    },
    components: {
      blank: resolve => require(['../components/Admin/Layout/layout.vue'], resolve)
    },
    children: [
      {
        path: '/',
        name: 'Default',
        fixed: false,
        meta: {
          title: '首页',
          keepAlive: true
        },
        component: resolve => require(['../components/Admin/Default.vue'], resolve)
      },
      {
        path: '/dashboard',
        name: 'Dashboard',
        fixed: false,
        meta: {
          title: '首页',
          keepAlive: true
        },
        component: resolve => require(['../components/Admin/Dashboard/index.vue'], resolve)
      },
      {
        path: '/userinfo',
        name: 'UserInfo',
        fixed: false,
        meta: {
          title: '个人中心',
          keepAlive: true
        },
        component: resolve => require(['../components/Admin/User/userInfo.vue'], resolve)
      },
    ]
  },
  {
    path: '/article/list',
    name: 'ArticleList',
    fixed: false,
    meta: {
      title: '文章列表',
      keepAlive: false
    },
    components: {
      blank: resolve => require(['../components/Admin/Article/List.vue'], resolve)
    }
  },
  {
    path: '/login',
    name: 'Login',
    fixed: false,
    meta: {
      title: '发表文章',
      keepAlive: false
    },
    components: {
      blank: resolve => require(['../components/Admin/User/Login.vue'], resolve)
    }
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
      blank: resolve => require(['../components/Admin/404.vue'], resolve)
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: RouteList
})

export default router
