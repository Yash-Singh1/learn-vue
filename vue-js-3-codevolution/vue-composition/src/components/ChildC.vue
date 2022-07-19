<template>
  <h3>Child Component C</h3>
  <p>Username: {{ userName }}</p>
  <p>Comp Username: {{ c_userName }}</p>
  <p>Count: {{ c_count }}</p>
  <p>Hero First: {{ c_hero.firstName }}</p>
  <p>Hero Last: {{ c_hero.lastName }}</p>
  <button @click="incrementCount">Increment</button>
</template>

<script>
import { inject, toRefs } from 'vue';

export default {
  name: 'ChildC',
  inject: ['userName'],
  setup() {
    // Second argument is the default when inject loading
    const c_userName = inject('c_userName', 'Default Username');
    const c_count = inject('c_count', 0);
    const c_hero = inject('c_hero', {});
    const incrementCount = inject('incrementCount');

    return { c_userName, c_count, c_hero, incrementCount };
  },
};
</script>

<style scoped></style>
