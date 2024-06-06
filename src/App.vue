<template>
  <div id="app" class="app">
    <Transition>
      <Notification />
    </Transition>
    <router-view></router-view>
  </div>
</template>

<script>
import Notification from '@/components/ui/Notification.vue'
import { mapActions } from 'vuex'
export default {
  name: 'App',
  components: {
    Notification
  },
  created() {
    this.getStateFromLocalStorage()
  },
  methods: {
    ...mapActions('notes', [
      'setStorageIsAllFavorite',
      'setCategory',
      'setSortValue',
      'setIsAllFavorite',
      'setNotes'
    ]),
    getStateFromLocalStorage() {
      const notes = localStorage.getItem('notes')
      const selectedCategory = localStorage.getItem('selectedCategory')
      const sortValue = localStorage.getItem('sortValue')
      const isAllFavorite = localStorage.getItem('isAllFavorite')

      if (notes) {
        this.setNotes(JSON.parse(notes))
      }

      if (selectedCategory) {
        this.setCategory(selectedCategory)
      }

      if (sortValue) {
        this.setSortValue(sortValue)
      }

      if (isAllFavorite) {
        this.setStorageIsAllFavorite(JSON.parse(isAllFavorite))
      }
    }
  }
}
</script>

<style src="@/assets/app.css"></style>
