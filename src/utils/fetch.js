import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'

// 创建axios实例
const Service = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 5000
})

// request拦截器
Service.interceptors.request.use(config => {
  if(store.getters: {
      
  })
})
