<template>
  <button class="custom-button" :class="buttonClasses" :type="buttonType" @click="onClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'CustomButton',
  props: {
    type: { type: String, default: 'primary' },
    buttonType: { type: String, default: 'button' },
    disabled: { type: Boolean, default: false }
  },
  computed: {
    buttonClasses() {
      return {
        [this.type]: this.type,
        disabled: this.disabled
      }
    }
  },
  methods: {
    onClick() {
      this.$emit('onClick')
    }
  }
}
</script>

<style scoped>
@import url('@/assets/ui/custom-button.css');
</style>
