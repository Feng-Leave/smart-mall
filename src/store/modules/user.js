import { getInfo, setInfo } from '@/utils/storage'

export default {
  namespaced: true,
  state () {
    return {
      userinfo: getInfo()
    }
  },
  mutations: {
    setUserInfo (state, obj) {
      state.userinfo = obj
      setInfo(obj)
    }
  },
  actions: {

  }
}
