<template>
  <div>
    <h3 @mouseover="incrementCount">Hovered {{ count }} times</h3>
  </div>
</template>

<script>
import CounterMixin from '../mixins/counter';

export default {
  name: 'HoverCounter',
  mixins: [CounterMixin],
};
</script>

<style scoped></style>
