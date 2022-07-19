<template>
  <h3>Hello {{ fullName }}</h3>
  <button @click="sendEvent">Call Heroes</button>
</template>

<script>
import { computed } from 'vue';

export default {
  name: 'PersonGreeting',
  // computed: {
  //   fullName() {
  //     return `${this.firstName} ${this.lastName}`;
  //   },
  // },
  setup(props, context) {
    const fullName = computed(() => `${props.firstName} ${props.lastName}`);

    function sendEvent() {
      context.emit('callHeroes', fullName.value);
    }

    return {
      fullName,
      sendEvent,
    };
  },
  props: ['firstName', 'lastName'],
  emits: ['callHeroes'],
};
</script>

<style scoped></style>
