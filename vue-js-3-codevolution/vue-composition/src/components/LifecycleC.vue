<template>
  <div></div>
</template>

<script>
import { onBeforeMount, onMounted, onUpdated, onUnmounted } from 'vue';

export default {
  setup() {
    onBeforeMount(() => {
      console.log('before mont');
    });

    onMounted(() => {
      console.log('mounted');
    });

    onUpdated(() => {
      console.log('updated');
    });

    onUnmounted(() => {
      console.log('unmounted');
    });
  },
};
</script>

<style scoped></style>
