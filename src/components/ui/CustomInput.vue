<template>
  <div class="custom-input">
    <label class="custom-input__label" :for="id">{{ label }}</label>
    <input
      class="custom-input__input"
      :type="type"
      :id="id"
      :value="modelValue"
      :placeholder="placeholder"
      @input="updateValue"
      :required="required"
    />
  </div>
</template>

<script>
export default {
  name: 'CustomInput',
  props: {
    label: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: 'text'
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
@import url('@/assets/ui/custom-input.css');
</style>
