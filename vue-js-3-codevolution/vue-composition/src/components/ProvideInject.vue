<template>
  <h3>Parent Component {{ nameMe }}</h3>
  <h3>Provided reactive state: {{ count }}, {{ state }}</h3>
  <button @click="incrementCount">Increment Count</button>
  <ChildA />
</template>

<script>
import { provide, ref, reactive } from 'vue';
import ChildA from './ChildA.vue';

export default {
  name: 'ProvideInject',
  components: {
    ChildA,
  },
  data() {
    return {
      nameMe: 'Yoshy',
    };
  },
  provide() {
    return {
      userName: this.nameMe,
    };
  },
  setup() {
    provide('c_userName', 'Yoshy');

    const count = ref(0);
    const state = reactive({
      firstName: 'Bruce',
      lastName: 'Wayne',
    });

    provide('c_count', count);
    provide('c_hero', state);
    provide('incrementCount', incrementCount);

    function incrementCount() {
      ++count.value;
    }

    return {
      count,
      state,
      incrementCount,
    };
  },
};
</script>

<style scoped></style>
