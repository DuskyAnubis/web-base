import { getToken, setToken, removeToken } from '@/utils/auth'
import { login, getUserInfo } from '@/api/login'

const user = {
  state: {
    token: getToken(),
    id: '',
    name: '',
    organazitionId: '',
    organazitionCode: '',
    roleId: '',
    roleCode: '',
    status: ''
  },
  mutations: {
      
  },
  actions: {
      
  }
}

export default user
