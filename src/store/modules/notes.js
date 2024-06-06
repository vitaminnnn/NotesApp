import { SELECTED_CATEGORY, SORT_VALUE } from '@/constants/index.js'

export default {
  namespaced: true,
  state: () => ({
    selectedCategory: 'All',
    sortValue: 'Date',
    notes: [
      {
        id: 1,
        title: 'First note',
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        category: 'General',
        createdAt: new Date()
      },
      {
        id: 2,
        title: 'Second note',
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        category: 'Shopping',
        createdAt: new Date().setDate(new Date().getDate() - 1)
      },
      {
        id: 3,
        title: 'Тhird note',
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        category: 'Shopping',
        createdAt: new Date().setDate(new Date().getDate() - 1)
      },
      {
        id: 4,
        title: 'Forth note',
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        category: 'Shopping',
        createdAt: new Date().setDate(new Date().getDate() - 2)
      },
      {
        id: 5,
        title: 'Fifth note',
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        category: 'Shopping',
        createdAt: new Date().setDate(new Date().getDate() - 3),
        updatedAt: new Date().setDate(new Date().getDate() - 3)
      }
    ],
    isAllFavorite: false
  }),
  mutations: {
    ADD_NOTE(state, note) {
      state.notes.push(note)
      localStorage.setItem('notes', JSON.stringify(state.notes))
    },
    UPDATE_NOTE(state, updatedNote) {
      const index = state.notes.findIndex((note) => note.id === updatedNote.id)
      if (index !== -1) {
        const updatedNoteWithTimestamp = {
          ...state.notes[index],
          ...updatedNote,
          updatedAt: new Date()
        }
        state.notes.splice(index, 1, updatedNoteWithTimestamp)
      }
      localStorage.setItem('notes', JSON.stringify(state.notes))
    },
    DELETE_NOTE(state, noteId) {
      state.notes = state.notes.filter((note) => note.id !== noteId)
      localStorage.setItem('notes', JSON.stringify(state.notes))
    },
    TOGGLE_FAVORITE(state, noteId) {
      const index = state.notes.findIndex((note) => note.id === noteId)
      if (index !== -1) {
        state.notes[index].isFavorite = !state.notes[index].isFavorite
      }
      localStorage.setItem('notes', JSON.stringify(state.notes))
    },
    SET_CATEGORY(state, category) {
      state.selectedCategory = category
      localStorage.setItem('selectedCategory', state.selectedCategory)
    },
    SET_SORT_VALUE(state, sortValue) {
      state.sortValue = sortValue
      localStorage.setItem('sortValue', state.sortValue)
    },
    SET_IS_ALL_FAVORITE(state) {
      state.isAllFavorite = !state.isAllFavorite
      localStorage.setItem('isAllFavorite', state.isAllFavorite)
    },
    SET_STORAGE_IS_ALL_FAVORITE(state, isAllFavorite) {
      state.isAllFavorite = isAllFavorite
    },
    SET_NOTES(state, notes) {
      state.notes = notes
    }
  },
  actions: {
    addNote({ commit }, note) {
      commit('ADD_NOTE', note)
    },
    setNotes({ commit }, notes) {
      commit('SET_NOTES', notes)
    },
    updateNote({ commit }, updatedNote) {
      commit('UPDATE_NOTE', updatedNote)
    },
    deleteNote({ commit }, noteId) {
      commit('DELETE_NOTE', noteId)
    },
    toggleFavorite({ commit }, noteId) {
      commit('TOGGLE_FAVORITE', noteId)
    },
    setCategory({ commit }, category) {
      commit('SET_CATEGORY', category)
    },
    setSortValue({ commit }, sortValue) {
      commit('SET_SORT_VALUE', sortValue)
    },
    setIsAllFavorite({ commit }) {
      commit('SET_IS_ALL_FAVORITE')
    },
    setStorageIsAllFavorite({ commit }, isAllFavorite) {
      commit('SET_STORAGE_IS_ALL_FAVORITE', isAllFavorite)
    }
  },
  getters: {
    filteredNotes(state) {
      let filteredNotes = [...state.notes]

      if (state.selectedCategory && state.selectedCategory !== SELECTED_CATEGORY.all) {
        filteredNotes = filteredNotes.filter(
          (note) => note.category.toLowerCase() === state.selectedCategory.toLowerCase()
        )
      }

      if (state.isAllFavorite) {
        filteredNotes = filteredNotes.filter((note) => note.isFavorite)
      }

      if (state.sortValue === SORT_VALUE.title) {
        return filteredNotes.sort((a, b) => a.title.localeCompare(b.title))
      } else if (state.sortValue === SORT_VALUE.date) {
        return filteredNotes.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      }

      return filteredNotes
    },
    getSelectedCategory(state) {
      return state.selectedCategory
    },
    getIsAllFavorite(state) {
      return state.isAllFavorite
    },
    getSortValue(state) {
      return state.sortValue
    }
  }
}
