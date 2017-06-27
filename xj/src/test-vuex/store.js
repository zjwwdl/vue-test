import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'

Vue.use(Vuex)

const state = {
  testtitle:'测试页vuex标题'
}

const mutations = {
  CHANGE_TITLE(state){
    state.testtitle = '小金最牛逼'
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
