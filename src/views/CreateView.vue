<template>
  <div>
    <h1>Create your note</h1>
    <router-link to="/" class="create__back-button">←</router-link>
    <NoteForm @add-note="addNewNote" />
  </div>
</template>

<script>
import NoteForm from '@/components/NoteForm.vue'
import { mapActions } from 'vuex'

export default {
  name: 'CreatePage',
  components: {
    NoteForm
  },
  methods: {
    ...mapActions('notes', ['addNote']),
    addNewNote(note) {
      note.createdAt = new Date()
      this.addNote(note)
    }
  }
}
</script>

<style scoped>
@import url('@/assets/create.css');
</style>
