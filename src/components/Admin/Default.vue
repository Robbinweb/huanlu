<!-- 首页 -->
<template>
  <div class="wrap">
    <div class="wrap_header">
      <div class="logo">
        <img src="@/assets/images/dongao.png" />
      </div>
      <div class="wrap_title">冬奥后勤保障全息图</div>
    </div>
    <div class="wrap_main">
      <div class="main_one">
        <div class="item">
          <span class="text-bg">天气预报</span>
        </div>
        <div class="item">
          <span class="text-bg">赛事日程</span>
        </div>
        <div class="item">
          <span class="text-bg">应急预案</span>
          <div style="padding: 10px"><a>《国网地质灾害防治方案》</a></div>
          <div style="padding: 10px"><a>《国网地质灾害防治方案》</a></div>
          <div style="padding: 10px"><a>《国网地质灾害防治方案》</a></div>
        </div>
        <div class="item">
          <span class="text-bg">排班数据</span>
          <div id="scheduling" style="width: 100%; height: 300px"></div>
        </div>
        <div class="item">
          <span class="text-bg">应急物资</span>
          <div id="supplies" style="width: 100%; height: 200px"></div>
        </div>
      </div>
      <div class="main_tow">
        <div class="main-header shadow">
          <div class="main-header-item">
            <div class="item-img" >
              <img src="@/assets/images/p1.png" alt="" srcset="">
            </div>
            <div class="item-content">
              <span style="color:#666666">应急物资总数</span>
              <span style="font-size:20px;font-weight: bold;">24</span>
            </div>
          </div>
          <div class="main-header-item">
            <div class="item-img" >
              <img src="@/assets/images/p2.png" alt="" srcset="">
            </div>
            <div class="item-content">
              <span style="color:#666666">应急保障总人数</span>
              <span style="font-size:20px;font-weight: bold;">24</span>
            </div>
          </div>
          <div class="main-header-item">
            <div class="item-img" >
              <img src="@/assets/images/p3.png" alt="" srcset="">
            </div>
            <div class="item-content">
              <span style="color:#666666">应急保障车辆总数</span>
              <span style="font-size:20px;font-weight: bold;">24</span>
            </div>
          </div>
          <div class="main-header-item">
            <div class="item-img" >
              <img src="@/assets/images/p4.png" alt="" srcset="">
            </div>
            <div class="item-content">
              <span style="color:#666666">当日排班人数</span>
              <span style="font-size:20px;font-weight: bold;">24</span>
            </div>
          </div>
          <div class="main-header-item">
            <div class="item-img" >
              <img src="@/assets/images/p5.png" alt="" srcset="">
            </div>
            <div class="item-content">
              <span style="color:#666666">当日用餐数</span>
              <span style="font-size:20px;font-weight: bold;">118 人</span>
            </div>
          </div>
        </div>
        <div class="main-body">
          <div class="map-area" :id="mapId" style="width:100%;height:100%"></div>
        </div>
      </div>
      <div class="main_three">
        <div class="three-box">
          <div class="box-title">基地一保障资源</div>
          <div class="box-header">
            <div class="hrader-item">
              <span class="box-icon blue">
                <img src="@/assets/images/p1.png" alt="">
              </span>
              <span style="color:#666666;padding:5px">物资总数</span>
              <span>1237.08万</span>  
            </div>
            <div class="hrader-item">
              <span class="box-icon blue">
                <img src="@/assets/images/p2.png" alt="">
              </span>
              <span style="color:#666666;padding:5px">保障人员</span>
              <span>1237.08万</span>
            </div>
            <div class="hrader-item">
              <span class="box-icon blue">
                <img src="@/assets/images/p3.png" alt="">
              </span>
              <span style="color:#666666;padding:5px">车辆总数</span>
              <span>1237.08万</span>
            </div>
          </div>
          <div class="box-body">
            <span>当日排班率：</span>
            <el-progress :percentage="70" :color="'#009CFE'"></el-progress>
            <span>车辆使用率：</span>
            <el-progress :percentage="60" :color="'#009CFE'"></el-progress>
            <span>房间入住率：</span>
            <el-progress :percentage="90" :color="'#009CFE'"></el-progress>
          </div>
        </div>
        <div class="three-box">
          <div class="box-title">基地二保障资源</div>
          <div class="box-header">
            <div class="hrader-item">
              <span class="box-icon yellow">
                <img src="@/assets/images/p1.png" alt="">
              </span>
              <span style="color:#666666;padding:5px">物资总数</span>
              <span>1237.08万</span>  
            </div>
            <div class="hrader-item">
              <span class="box-icon yellow">
                <img src="@/assets/images/p2.png" alt="">
              </span>
              <span style="color:#666666;padding:5px">保障人员</span>
              <span>1237.08万</span>
            </div>
            <div class="hrader-item">
              <span class="box-icon yellow">
                <img src="@/assets/images/p3.png" alt="">
              </span>
              <span style="color:#666666;padding:5px">车辆总数</span>
              <span>1237.08万</span>
            </div>
          </div>
          <div class="box-body">
            <span>当日排班率：</span>
            <el-progress :percentage="70" :color="'#FAC343'"></el-progress>
            <span>车辆使用率：</span>
            <el-progress :percentage="60" :color="'#FAC343'"></el-progress>
            <span>房间入住率：</span>
            <el-progress :percentage="90" :color="'#FAC343'"></el-progress>
          </div>
        </div>
        <div class="three-box">
          <div class="box-title">基地三保障资源</div>
          <div class="box-header">
            <div class="hrader-item">
              <span class="box-icon purple">
                <img src="@/assets/images/p1.png" alt="">
              </span>
              <span style="color:#666666;padding:5px">物资总数</span>
              <span>1237.08万</span>  
            </div>
            <div class="hrader-item">
              <span class="box-icon purple">
                <img src="@/assets/images/p2.png" alt="">
              </span>
              <span style="color:#666666;padding:5px">保障人员</span>
              <span>1237.08万</span>
            </div>
            <div class="hrader-item">
              <span class="box-icon purple">
                <img src="@/assets/images/p3.png" alt="">
              </span>
              <span style="color:#666666;padding:5px">车辆总数</span>
              <span>1237.08万</span>
            </div>
          </div>
          <div class="box-body">
            <span>当日排班率：</span>
            <el-progress :percentage="70" :color="'#7366B9'"></el-progress>
            <span>车辆使用率：</span>
            <el-progress :percentage="60" :color="'#7366B9'"></el-progress>
            <span>房间入住率：</span>
            <el-progress :percentage="90" :color="'#7366B9'"></el-progress>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import loadBMap from '../../Api/loadBMap.js'
export default {
  
  data() {
    return {
      mapId: 'BMap-' + parseInt(Date.now() + Math.random()),
      myMap: null
    };
  },
  computed: {},
  created() {},
  mounted() {
    setTimeout(() => {
      this.mapInit()
    }, 500)
    // this.schedulingData();
    // this.suppliesData();
  },
  methods: {
    mapInit() {
      loadBMap('uMpVGmTGy4tlsjgM7xUdnGtKsBLYfFX1')
        .then(() => {
          // 百度地图API功能
          // eslint-disable-next-line no-undef
          this.myMap = new BMap.Map(this.mapId) // 创建Map实例
          // eslint-disable-next-line no-undef
          this.myMap.centerAndZoom(new BMap.Point(114.87,40.82), 11) // 初始化地图,设置中心点坐标和地图级别
          //添加地图类型控件
          this.myMap.addControl(
            // eslint-disable-next-line no-undef
            new BMap.MapTypeControl({
              // eslint-disable-next-line no-undef
              mapTypes: [BMAP_NORMAL_MAP, BMAP_HYBRID_MAP]
            })
          )
          // eslint-disable-next-line no-undef
          // var marker1 = new BMapGL.Marker(new BMapGL.Point(114.87,40.82));
          // this.myMap.addOverlay(marker1);
          this.myMap.setCurrentCity('张家口') // 设置地图显示的城市 此项是必须设置的
          this.myMap.enableScrollWheelZoom(true) //开启鼠标滚轮缩放
        })
        .catch(() => {
          console.log('地图加载失败')
        })
    }
  },
};
</script>
<style lang="scss" scoped>
.wrap {
  background: #eff0f3;
  width: 100%;
  height: calc(100vh - 84px);
  padding: 0 10px;
  .wrap_header {
    // display: -webkit-box;
    // display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    // -ms-flex-pack: justify;
    // justify-content: space-between;
    justify-content: center;
    padding: 12px 20px;
    // border-bottom: 1px solid #dfe6ec;
    .logo {
      & img {
        width: 79px;
      }
    }
  }
  .wrap_main {
    display: flex;
    -webkit-box-pack: justify;
    // -ms-flex-pack: justify;
    justify-content: space-between;
    // justify-content: center;
    padding: 0 10px;
    .item {
      width: 100%;
      // padding: 10px;
      .text-bg {
        font-size: 20px;
        font-weight: bold;
        padding-left: 10px;
        border-left: 4px solid;
        border-left-color: #0075e4;
      }
    }
    .main_one {
      width: 27%;
      display: flex;
      -webkit-box-pack: justify;
      flex-direction: column;
    }
    .main_tow {
      width: 66%;
      padding: 0px 10px;
      .main-header{
        display: flex;
        -webkit-box-pack: justify;
        // -ms-flex-pack: justify;
        justify-content: space-between;
        background: #fff;
        padding: 20px;
        border-radius: 10px;
        margin-bottom: 20px;
        box-shadow: 0 0 8px #ccc;
        // // color: #fff;
        // background-image: -webkit-linear-gradient(30deg, #feffff, #f6fffa);
        // -webkit-background-clip: text;
        // -webkit-text-fill-color: transparent;
        // -webkit-animation: hue 60s infinite linear;
        // border: 2px solid #ccc;
        // box-shadow:0px 5px 8px 2px #ccc;
        .main-header-item{
          display: flex;
          -webkit-box-pack: justify;
          // -ms-flex-pack: justify;
          justify-content: space-between;
          align-items: center;
          .item-img {
            padding: 10px;
            background: #009CFE;
            border-radius: 50%;
            img{
              width: 35px;
            }
          }
          .item-content{
            padding: 5px;
            display: flex;
            flex-direction: column;
          }
        }
      }
      .main-body{
        height: 75vh;
        padding: 10px;
        border-radius: 15px;
        border: 1px solid #ccc;
        box-shadow: 0 0 8px #ccc;
      }
    }
    .main_three {
      width: 27%;
      display: flex;
      flex-direction: column;
      align-items: center;
      .three-box{
        width: 100%;
        margin-bottom: 20px;
        .box-title{
          width: 100%;
          font-size: 20px;
          font-weight: bold;
          padding: 10px 0px;
          text-align: center;
          background: #fff;
          border:1px solid #ccc;
          border-radius: 5px;
        }
        .box-header{
          display: flex;
          -webkit-box-pack: justify;
          // -ms-flex-pack: justify;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          padding: 10px 0px;
          
          .hrader-item{
            width: 31%;
            display: flex;
            flex-direction: column;
            align-items: center;
            background: #ffffff;
            padding: 10px 0px;
            border: 1px solid #ccc;
            border-radius: 10px;
            box-shadow: 0 0 8px #ccc;
            .box-icon{
              border-radius: 50%;
              padding: 10px;
              align-items: center;
              img{
                width: 30px;
                height: 30px;
              }
            }
            .blue{
              background: #009CFE;
            }
            .yellow{
              background: #FAC343;
            }
            .purple{
              background: #7366B9;
            }
          }
        }
        .box-body{
          padding: 10px 0px;
        }

      }
    }
  }

  .wrap_title {
    text-align: center;
    padding: 10px;
    font-size: 38px;
    font-weight: bold;
    color: #009bf8;
    background-image: -webkit-linear-gradient(270deg, #9ad9ff, #0069de);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-animation: hue 60s infinite linear;
  }

}
</style>
