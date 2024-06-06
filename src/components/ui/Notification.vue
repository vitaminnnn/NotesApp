<template>
  <div class="notification" v-if="toasts.length">
    <img
      src="https://cdn-icons-png.flaticon.com/512/16104/16104958.png"
      width="24"
      height="24"
      alt="success"
    />
    <p>{{ toasts[0].message }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'TheNotification',
  computed: {
    ...mapState('notifications', ['toasts'])
  }
}
</script>

<style scoped>
@import url('@/assets/notification.css');
</style>
