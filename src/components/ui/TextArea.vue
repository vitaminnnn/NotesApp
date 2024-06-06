<template>
  <div class="textarea">
    <label :for="id">{{ label }}</label>
    <textarea
      class="textarea__item"
      :id="id"
      :value="modelValue"
      @input="updateValue"
      :rows="rows"
      :required="required"
    ></textarea>
  </div>
</template>

<script>
export default {
  name: 'TextArea',
  props: {
    label: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      default: ''
    },
    rows: {
      type: String,
      default: '5'
    },
    required: {
      type: Boolean,
      default: false
    },
    modelValue: {
      type: [String, Number],
      default: ''
    }
  },
  methods: {
    updateValue(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style scoped>
@import url('@/assets/ui/textarea.css');
</style>
