
<template>
  <div id="container">
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      //要标记的所有点的经纬度
      lnglats: [
        // 01基地 02区域
        { name: "张家口", location: "114.89421, 40.79795", type: '01', popNum: '100', color: 1 },
        { name: "万龙滑雪场",location: "115.398525,40.963835", type: '02', popNum: '120',color: 2 },
        { name: "密苑云顶大酒店", location: "115.436111,40.948440", type: '01',popNum: '102', color: 1 },
        { name: '云顶滑雪场', location: "115.42574029274647,40.95230495748012", type: '02',popNum: '133', color: 2 },
      ],
    };
  },
  mounted() {
    this.setMapChart();
  },
  methods: {
    //创建地图实例
    setMapChart() {
        //地图实例
      // eslint-disable-next-line no-undef
      let map = new AMap.Map("container", {
        resizeEnable: true, //自适应大小
        zoom: 10, //初始化视窗
        pitch: 70, // 地图俯仰角度，有效范围 0 度- 83 度
        // viewMode: "3D", // 地图模式
      });
      // AMap是高德地图的构造函数，这里.Map是创建地图，.Marker是创建坐标点
      //信息窗口实例
      // eslint-disable-next-line no-undef
      var infoWindow = new AMap.InfoWindow({ offset: new AMap.Pixel(0, -30) });
      //遍历生成多个标记点
      for (var i = 0, marker; i < this.lnglats.length; i++) {
        var lnglatsArr = this.lnglats[i].location.split(',')
        // eslint-disable-next-line no-redeclare
        var marker = ''
        // eslint-disable-next-line no-undef
        marker = new AMap.Marker({
          position: lnglatsArr, //不同标记点的经纬度
          map: map,
        });
        //内部样式
        let type = this.lnglats[i].type
        if(type === '01'){
          marker.content = `
            <div style="width: 160px; height: 100px;font-size: 14px;">
              <div class="center_title" style="border-bottom: 1px solid #000">${this.lnglats[i].name}</div>
              <div style="display: flex; flex-direction: column; margin-top: 30px">
                <div class="center_body_item_left">当日排班人数:${this.lnglats[i].popNum}</div>
                <div class="center_body_item_left">当日用餐人数:${this.lnglats[i].popNum}</div>
              </div>
            </div
          `
        }else if(type === '02'){
          marker.content = `
            <div style="width: 160px; height: 100px;font-size: 14px;">
              <div class="center_title" style="border-bottom: 1px solid #000">${this.lnglats[i].name}</div>
              <div style="display: flex; flex-direction: column; margin-top: 30px">
                <div class="center_body_item_left">当日入住人数:${this.lnglats[i].popNum}</div>
                <div class="center_body_item_left">物资总数:${this.lnglats[i].popNum}</div>
                <div class="center_body_item_left">车辆总数:${this.lnglats[i].popNum}</div>
              </div>
            </div
          `
        }
        marker.on("click", markerClick);
        // marker.emit("click", { target: marker }); //默认初始化不出现信息窗体,打开初始化就出现信息窗体
      }
 
      function markerClick(e) {
        console.log('markerClick ====', e)
        infoWindow.setContent(e.target.content);
        infoWindow.open(map, e.target.getPosition());
      }
      map.setFitView();
       //函数内的事件
      window.getLen = ()=>{
        console.log('点击了')
      }
    },
    
  },
};
</script>
 
<style scoped>
#container {
  width: 100%;
  height: 100vh;
}
.center {
}
.center_body {
}
.center_body_item {
}
.center_btn {
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>