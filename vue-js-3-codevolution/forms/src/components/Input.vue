<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <input type="text" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" placeholder="More Info..." />
</template>

<script>
// This file is for working with v-model with a custom input component.

export default {
  name: 'Input'.
  data() {
    return {};
  },
  props: {
    // The value of the input when using v-model directive
    modelValue: String,
  },
};
</script>

<style scoped>
input[type='text'] {
  display: block;
  width: 400px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.4;
  color: #555;
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  margin-bottom: 1rem;
}
</style>
