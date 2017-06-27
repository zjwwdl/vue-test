/**
 * Created by zhengjinwen on 2017/5/16.
 */
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {
  count:3
}

const mutations = {
  add(state){
       state.count ++;
  },
  less(state){
  state.count --;
  }
}

export default new Vuex.Store({
  state,
  mutations
})
