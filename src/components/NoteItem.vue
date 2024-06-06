<template>
  <div class="note-item">
    <div class="note-item__header">
      <h3 class="note-item__title">{{ note.title }}</h3>
      <div class="note-item__actions">
        <CustomButton type="empty" @onClick="editNote" class="note-item__edit" />
        <CustomButton type="empty" @onClick="deleteNote" class="note-item__delete" />
      </div>
    </div>
    <div class="note-item__content">{{ note.content }}</div>
    <div class="note-item__label category">{{ note.category }}</div>
    <div class="note-item__footer">
      <div class="note-item__labels">
        <div class="note-item__label">Created: {{ formatDate(note.createdAt) }}</div>
        <div v-if="note.updatedAt" class="note-item__label">
          Updated: {{ formatDate(note.updatedAt) }}
        </div>
      </div>
      <CustomButton
        type="empty"
        @onClick="toggleFavorite"
        class="note-item__favorite"
        :class="{ favorite: note.isFavorite }"
      />
    </div>
  </div>
</template>

<script>
import CustomButton from '@/components/ui/CustomButton.vue'
import formatDate from '@/utils/formatDate.js'

export default {
  name: 'NoteItem',
  components: { CustomButton },
  props: {
    note: {
      type: Object,
      required: true
    }
  },
  methods: {
    formatDate,
    editNote() {
      this.$emit('edit-note')
    },
    deleteNote() {
      this.$emit('delete-note')
    },
    toggleFavorite() {
      this.$emit('toggle-favorite')
    }
  }
}
</script>

<style scoped>
@import url('@/assets/note-item.css');
</style>
