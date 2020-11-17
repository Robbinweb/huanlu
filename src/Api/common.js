import request from '@/utils/request';

export function getData1() {
  return request({
    url: '/data1',
    method: 'get',
    // params: param
  })
}
// export function louysbtjfxList(query) {
//   return request({
//     url: '/zcgl/analysis/getLouyFx',
//     method: 'get'
//   })
// }