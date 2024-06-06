import { createStore } from 'vuex'
import notes from './modules/notes.js'
import notifications from './modules/notifications.js'

export default createStore({
  modules: {
    notes,
    notifications
  }
})
