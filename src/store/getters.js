let getters = {
  listTours (state) {
    return state.tours
  },
  getDetail (state) {
    return id => {
      const tour = state.tours.find((item) => {
        return item.id === parseInt(id)
      })
      return tour
    }
  }
}

export default getters
