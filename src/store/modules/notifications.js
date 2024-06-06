export default {
  namespaced: true,
  state: () => ({
    toasts: []
  }),
  actions: {
    addToast({ commit }, toast) {
      commit('ADD_TOAST', toast)
      setTimeout(() => {
        commit('REMOVE_TOAST')
      }, 3000)
    }
  },
  mutations: {
    ADD_TOAST(state, toast) {
      state.toasts.push(toast)
    },
    REMOVE_TOAST(state) {
      state.toasts.shift()
    }
  }
}
