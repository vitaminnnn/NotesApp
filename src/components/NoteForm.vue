<template>
  <div class="note-form">
    <form @submit.prevent="submitForm" class="note-form__form">
      <CustomInput
        label="Title"
        id="title"
        placeholder="Enter your title"
        required
        v-model="title"
      />
      <TextArea
        label="Content"
        id="сontent"
        rows="10"
        placeholder="Enter your content"
        required
        v-model="content"
      />
      <CustomInput
        label="Category"
        id="category"
        placeholder="Enter your category"
        required
        v-model="category"
      />
      <CustomButton class="note-form__button" button-type="submit">Add Note</CustomButton>
    </form>
  </div>
</template>

<script>
import TextArea from '@/components/ui/TextArea.vue'
import CustomButton from '@/components/ui/CustomButton.vue'
import { mapActions } from 'vuex'
import CustomInput from '@/components/ui/CustomInput.vue'

export default {
  name: 'NoteForm',
  components: { CustomInput, CustomButton, TextArea },
  data() {
    return {
      title: '',
      content: '',
      category: ''
    }
  },
  methods: {
    ...mapActions('notifications', ['addToast']),
    submitForm() {
      this.$emit('add-note', {
        title: this.title,
        content: this.content,
        category: this.category,
        favorite: false
      })
      this.addToast({
        id: new Date().getTime(),
        message: 'Your note successfully added!'
      })
      this.resetForm()
    },
    resetForm() {
      this.title = ''
      this.content = ''
      this.category = ''
    }
  }
}
</script>

<style scoped>
@import url('@/assets/note-form.css');
</style>
