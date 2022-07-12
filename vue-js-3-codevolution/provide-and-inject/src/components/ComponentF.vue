<template>
  <h2>Component F</h2>
  <h2>Component F username {{ username }}</h2>
</template>

<script>
export default {
  name: 'ComponentF',
  inject: ['username'],
};
</script>

<style scoped></style>
