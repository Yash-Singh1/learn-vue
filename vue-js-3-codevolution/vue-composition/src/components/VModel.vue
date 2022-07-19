<template>
  <div>
    <!-- Options Api -->
    <input type="text" placeholder="First" v-model="first" />
    <input type="text" placeholder="Last" v-model="last" />

    <!-- Composition APi -->
    <input type="text" placeholder="Hero" v-model="heroName" />
    <input type="text" placeholder="First" v-model="firstName" />
    <input type="text" placeholder="Last" v-model="lastName" />
  </div>
</template>

<script>
import { ref, reactive, toRefs } from 'vue';

export default {
  name: 'VModel',
  data() {
    return {
      first: '',
      last: '',
    };
  },
  setup() {
    const heroName = ref('');
    const state = reactive({
      firstName: 'Bruce',
      lastName: 'Wayne',
    });
    return {
      heroName,
      ...toRefs(state),
    };
  },
};
</script>

<style scoped></style>
