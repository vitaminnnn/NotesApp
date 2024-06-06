<template>
  <div class="home">
    <h1>Notes App</h1>
    <div class="home__category-buttons">
      <CustomButton
        v-for="category in categories"
        :key="category"
        type="secondary"
        @click="setCategory(category)"
        :class="{ active: getSelectedCategory === category }"
      >
        {{ category }}
      </CustomButton>
      <CustomSelect
        :options="sortOptions"
        :value="getSortValue"
        @selectOption="handleSelectChange"
      />
      <CustomButton
        type="empty"
        @onClick="setIsAllFavorite"
        class="home__favorite"
        :class="{ favorite: getIsAllFavorite }"
      />
    </div>
    <div class="home__notes">
      <template v-if="!filteredNotes.length">
        <CustomPlaceholder />
      </template>
      <template v-else>
        <div v-for="note in filteredNotes" :key="note.id">
          <template v-if="isEditing(note.id)">
            <NoteEditItem
              :note="note"
              @save-note="updateCurrentNote"
              @cancel-edit="cancelEdit"
              @delete-note="deleteNote"
            />
          </template>
          <template v-else>
            <NoteItem
              :note="note"
              @edit-note="editNote(note)"
              @delete-note="deleteNote(note.id)"
              @toggle-favorite="toggleFavorite(note.id)"
            />
          </template>
        </div>
      </template>
    </div>
    <router-link to="/create" class="home__create-button">+</router-link>
  </div>
</template>

<script>
import NoteItem from '@/components/NoteItem.vue'
import NoteEditItem from '@/components/NoteEditItem.vue'
import CustomSelect from '@/components/ui/CustomSelect.vue'
import CustomButton from '@/components/ui/CustomButton.vue'
import CustomPlaceholder from '@/components/ui/CustomPlaceholder.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'HomePage',
  components: {
    CustomButton,
    NoteItem,
    NoteEditItem,
    CustomSelect,
    CustomPlaceholder
  },
  data() {
    return {
      editingNoteId: null,
      categories: ['All', 'General', 'Shopping'],
      sortOptions: ['Title', 'Date']
    }
  },
  computed: {
    ...mapGetters('notes', [
      'filteredNotes',
      'getSelectedCategory',
      'getIsAllFavorite',
      'getSortValue'
    ])
  },
  methods: {
    ...mapActions('notes', [
      'addNote',
      'updateNote',
      'deleteNote',
      'toggleFavorite',
      'setIsAllFavorite',
      'setCategory',
      'setSortValue'
    ]),
    ...mapActions('notifications', ['addToast']),
    handleSelectChange(option) {
      this.setSortValue(option)
    },
    isEditing(noteId) {
      return this.editingNoteId === noteId
    },
    editNote(note) {
      this.editingNoteId = note.id
    },
    updateCurrentNote(note) {
      this.updateNote(note)
      this.addToast({
        id: new Date().getTime(),
        message: 'Your note successfully updated!'
      })
      this.cancelEdit()
    },
    cancelEdit() {
      this.editingNoteId = null
    }
  }
}
</script>

<style scoped>
@import url('@/assets/home.css');
</style>
