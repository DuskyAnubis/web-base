import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.Base_API,
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
  return response
},
 error => {
   if (error.response) {
     switch (error.response.status) {
       case 401:
         Message({
           showClose: true,
           message: '身份验证失败，需重新登录!',
           type: 'warning'
         })
         store.dispatch('LogOut').then(() => {
           this.$router.replace('/login')
         })
         break
       case 403:
         Message({
           showClose: true,
           message: '你没有权限访问该资源!',
           type: 'warning'
         })
         break
       case 400:
         Message({
           showClose: true,
           message: error.response.data.value.error,
           type: 'error'
         })
         break
       case 404:
         Message({
           showClose: true,
           message: error.response.data.value.error,
           type: 'error'
         })
         break
     }
   }
   return Promise.reject(error.response.data)
 }
)

export default service
