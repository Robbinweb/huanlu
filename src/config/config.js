var devApiUrl = 'http://localhost:4000'
var proApiUrl = 'http://www.huanlublog.com:4000'
export default {
  siteName: '欢鹿博客',
  apiUrl: process.env.NODE_ENV === 'development' ? devApiUrl : proApiUrl,
  isPermission: true, // 开关，是否开启权限
  isLogin: true, // 是需要登录
  basePath: 'http://localhost:4000', // 本地开发
}