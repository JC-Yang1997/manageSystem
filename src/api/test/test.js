import request from '@/config/axios'

export const test = (params) => {
  return request('get','/api/applet/userActivity/queryActivity',params)
}