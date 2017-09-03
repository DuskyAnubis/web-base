import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 15000
})

// request拦截器
service.interceptors.request.use(config => {
  if (store.getters.token) {
    config.headers['Authorization'] = 'Bearer ' + getToken()
  }
  return config
}, error => {
  console.log(error)
  Promise.reject(error)
}
)

// response拦截器
service.interceptors.response.use(response => {
  const res = response.data
  if (res.code !== 200 && res.code !== 201 && res.code !== 204) {
    Message({
      message: res.data,
      type: 'error',
      duration: 5000
    })
      // 401身份验证失败，重新登录
    if (res.code === 401) {
      MessageBox.confirm('Token认证失败，请重新登录', '确定', {
        confirmButtonText: '重新登录',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        store.dispatch('').then(() => {
          location.reload()
        })
      })
    }
    return Promise.reject('error')
  } else {
    return response.data
  }
},
 error => {
   console.log('err' + error)
   Message({
     message: error.message,
     type: 'error',
     duration: 5000
   })
   return Promise.reject(error)
 }
)

export default service
