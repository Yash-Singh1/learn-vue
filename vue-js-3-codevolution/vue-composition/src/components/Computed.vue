<template>
  <div>
    <hr />
    <h2>Computed Properties</h2>
    <input type="text" v-model="fName" placeholder="First Name" />
    <input type="text" v-model="lName" placeholder="Last Name" />
    <h3>Options: {{ fullName }}</h3>

    <input type="text" v-model="refFirstName" placeholder="First Name" />
    <input type="text" v-model="refLastName" placeholder="Last Name" />
    <h3>Composition: {{ c_fullName }}</h3>

    <input type="text" v-model="reactiveFirstName" placeholder="First Name" />
    <input type="text" v-model="reactiveLastName" placeholder="Last Name" />
    <h3>Reactive Composition: {{ r_fullName }}</h3>
  </div>
</template>

<script>
import { ref, computed, reactive, toRefs } from 'vue';

export default {
  name: 'Computed',
  data() {
    return {
      fName: '',
      lName: '',
    };
  },
  setup() {
    const refFirstName = ref('');
    const refLastName = ref('');
    const c_fullName = computed(() => `${refFirstName.value} ${refLastName.value}`);

    const state = reactive({
      reactiveFirstName: '',
      reactiveLastName: '',
    });

    const r_fullName = computed(() => `${state.reactiveFirstName} ${state.reactiveLastName}`);

    return {
      refFirstName,
      refLastName,
      c_fullName,
      r_fullName,
      ...toRefs(state),
    };
  },
  computed: {
    fullName() {
      return `${this.fName} ${this.lName}`;
    },
  },
};
</script>

<style scoped></style>
