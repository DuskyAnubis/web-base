import fetch from '@/utils/fetch'

export function login (username, password) {
  const data = {
    'userName': username,
    'passWord': password
  }
  return fetch({
    url: '/Token',
    method: 'post',
    data
  })
}

export function getUserInfo () {
  return fetch({
    url: '/Login',
    method: 'get'
  })
}
