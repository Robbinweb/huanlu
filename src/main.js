import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import axios from 'axios';
import Config from './config/config'
import RouterInterceptor from './router/routerInterceptor'  // 全局路由守卫

Vue.config.productionTip = false

RouterInterceptor(router)
Vue.prototype.$Config = Config
// 打印当前所处的环境
console.log("当前环境 ====> ", process.env.VUE_APP_URL);

if (process.env.VUE_APP_URL === 'production') {
  axios.defaults.baseURL = 'http://www.huanlublog.com:4000';
} else {
  axios.defaults.baseURL = 'http://localhost:4000'; 
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
