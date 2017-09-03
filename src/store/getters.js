const getters = {
  token: state => state.user.token,
  name: state => state.user.name,
  org: state => state.user.organazitionCode,
  role: state => state.user.roleCode
}

export default getters
