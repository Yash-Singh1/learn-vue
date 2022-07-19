<template>
  <h3>Child Component B</h3>
  <ChildC />
</template>

<script>
import ChildC from './ChildC.vue';

export default {
  name: 'ChildB',
  components: {
    ChildC,
  },
};
</script>

<style scoped></style>
