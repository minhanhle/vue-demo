import * as types from './mutation-types.js'

let mutations = {
  [types.ADD_NEW] (state, payload) {
    const tour = payload
    state.tours.push(tour)
  },
  [types.DELETE_ITEM] (state, payload) {
    state.todos.splice(state.todos.indexOf(payload), 1)
  }
}

export default mutations
