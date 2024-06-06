<template>
  <div class="custom-select" :tabindex="tabindex" @blur="handleBlur">
    <div class="custom-select__field" :class="{ open: open }" @click="toggleDropdown">
      {{ selected }}
    </div>
    <div class="custom-select__dropdown" :class="{ hidden: !open }">
      <div v-for="(option, i) of options" :key="i" @click="selectOption(option)">
        {{ option }}
      </div>
    </div>
  </div>
</template>

<script>
import { SELECTED_CATEGORY } from '@/constants/index.js'

export default {
  name: 'CustomSelect',
  props: {
    options: {
      type: Array,
      required: true
    },
    value: {
      type: String,
      required: true,
      default: SELECTED_CATEGORY.all
    },
    tabindex: {
      type: Number,
      required: false,
      default: 0
    }
  },
  data() {
    return {
      open: false
    }
  },
  computed: {
    selected() {
      return this.value
    }
  },
  methods: {
    handleBlur() {
      this.open = false
    },
    toggleDropdown() {
      this.open = !this.open
    },
    selectOption(option) {
      this.$emit('selectOption', option)
      this.open = false
    }
  }
}
</script>

<style scoped>
@import url('@/assets/ui/custom-select.css');
</style>
