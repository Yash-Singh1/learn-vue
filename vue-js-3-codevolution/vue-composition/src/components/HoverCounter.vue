<template>
  <div>
    <h2 @mouseover="incrementCount">Hovered {{ count }} times</h2>
  </div>
</template>

<script>
// import CounterMixin from '../mixins/counter';
import useCounter from '../composables/useCounter';

export default {
  name: 'HoverCounter',
  // mixins: [CounterMixin],
  setup() {
    const { count, incrementCount } = useCounter(5);
    return {
      count,
      incrementCount,
    };
  },
};
</script>

<style scoped></style>
