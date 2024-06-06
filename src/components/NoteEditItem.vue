<template>
  <form class="note-edit-item" @submit.prevent="saveNote">
    <CustomInput ref="titleField" label="Title" id="title" required v-model="editedNote.title" />
    <TextArea
      ref="contentField"
      label="Content"
      id="сontent"
      required
      v-model="editedNote.content"
    />
    <CustomInput
      ref="categoryField"
      label="Category"
      id="category"
      required
      v-model="editedNote.category"
    />
    <div class="note-edit-item__actions-btn">
      <CustomButton type="primary" button-type="submit">Save</CustomButton>
      <CustomButton type="red" @click="cancelEdit">Cancel</CustomButton>
    </div>
  </form>
</template>

<script>
import CustomButton from '@/components/ui/CustomButton.vue'
import TextArea from '@/components/ui/TextArea.vue'
import CustomInput from '@/components/ui/CustomInput.vue'

export default {
  name: 'NoteEditItem',
  components: { CustomInput, TextArea, CustomButton },
  props: {
    note: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      editedNote: { ...this.note }
    }
  },
  methods: {
    saveNote() {
      this.$emit('save-note', this.editedNote)
    },
    cancelEdit() {
      this.$emit('cancel-edit')
    }
  }
}
</script>

<style scoped>
@import url('@/assets/note-edit-item.css');
</style>
