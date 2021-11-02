import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import echarts from 'echarts'
import VueAMap from 'vue-amap'; // 高德地图

Vue.prototype.echarts = echarts

Vue.config.productionTip = false

Vue.use(ElementUI);

 
// 引用高德地图
Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
  // 高德的keye
  key: '3c16936cce23d06a31c5b17a8b4bbdc1',
  uiVersion: '1.0.11' ,// 版本号
  // 插件集合
  plugin: ['AMap.Geocoder','AMap.Autocomplete','AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.Geolocation','AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  // 高德 sdk 版本，默认为 1.4.4
  v: '1.4.4'
});


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
