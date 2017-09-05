import router from './router'
import store from './store'
import { getToken } from '@/utils/auth'

router.beforeEach((to, from, next) => {
  if (getToken()) {
    if (to.path === '/login') {
      next('/home')
    } else {
      if (store.getters.name.length === 0) {
        store.dispatch('GetUserInfo').then(res => {
          next()
        })
      } else {
        next()
      }
    }
  } else {
    next('/login')
  }
})
