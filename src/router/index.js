import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/hello',
      component: resolve => require(['../components/Hello.vue'], resolve)
    },
    {
      path: '/login',
      component: resolve => require(['../views/login/Login.vue'], resolve)
    }
  ]
})
