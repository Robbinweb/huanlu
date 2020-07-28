import Config from '../config/config'
import store from '../store/index'
// import {initRouter} from '../utils/routerutils'

export default function (router) {
  /*
    全局路由钩子
 */
  router.beforeEach((to, from, next) => {
    // 网站标题
    window.document.title = Config.siteName ? Config.siteName + ' - ' + to.meta.title : to.meta.title
    if (Config.isLogin) {
      // console.log(to.path, "Config.isLogin", Config.isLogin)
      if(localStorage.getItem('Flag') === 'isLogin'){
        store.dispatch("setUser", true);
      }else{
        store.dispatch("setUser", false);
      }
      // console.log('Flag ====>',store.state.isLogin)
        // 开启权限开关
        next()
    } else {
      next()
    }
  })
}