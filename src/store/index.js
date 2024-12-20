import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  getters: {
    token (state) {
      return state.user.userinfo.token
    }
  },
  modules: {
    user
  }
})
