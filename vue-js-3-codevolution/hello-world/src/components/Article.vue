<template>
  <div>
    <h2>Article Component</h2>
    <h2>{{ title }}</h2>
    <span>👍 {{ likes }}</span>
    <p v-if="published">Public</p>
    <p v-else>Private</p>
  </div>
</template>

<script>
export default {
  name: 'Article',
  props: {
    title: { type: String, required: true, default: 'Article Title Default' },
    likes: Number,
    published: Boolean,
  },
};
</script>

<style scoped></style>
