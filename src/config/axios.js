import axios from 'axios'

let baseUrl = ''
if (process.env.NODE_ENV === 'development') {
  baseUrl = 'https://test3-applet.wxyundian.com'
}

// axios baseUrl配置
axios.defaults.baseURL = baseUrl

//axios请求拦截器
axios.interceptors.request.use(
  (config) => {
    config.timeout = 100000

    // 拦截器token操作
    let _token = localStorage.token
    if(_token){
      config.headers.token  = _token
      console.log('本地token带入成功')
    } else {
      console.log('本地localStorage没有token')
    }

    return config
  },
  (error) => {
   return Promise.reject(error)
  }
)

// 添加响应拦截器
axios.interceptors.response.use(
  resp => {
    if ( resp.status === 200 ) {
      console.log('数据返回成功')
    } else {
      console.log('请求异常，返回code：', resp.status)
    }
    return resp
  }
)

//封装axios请求
export default function request(method, url, data) {
  method = method.toLocaleLowerCase()
  if (method == 'post') {
    return axios.post(url, data)
  } else if (method == 'get') {
    return axios.get(url, {
      params: data
    })
  } else if (method == 'delete') {
    return axios.delete(url, {
      params: data
    })
  } else if (method == 'put') {
    return axios.put(url, data)
  }
}