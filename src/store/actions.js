import * as types from './mutation-types.js'

let actions = {
  addTour ({commit}, payload) {
    commit(types.ADD_NEW, payload)
  },
  deleteTour ({commit}, payload) {
    commit(types.DELETE_ITEM, payload)
  }
}

export default actions
