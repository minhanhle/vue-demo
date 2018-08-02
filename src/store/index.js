import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters.js'
import mutations from './mutations.js'
import actions from './actions.js'
import tours from '../data/tours'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tours: tours
  },
  getters,
  mutations,
  actions
})
