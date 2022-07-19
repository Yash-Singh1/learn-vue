<template>
  <div>
    <hr />
    <h2>Watch</h2>
    <input type="text" placeholder="Name" v-model="name" />
    <input type="text" placeholder="First name" v-model="firstName" />
    <input type="text" placeholder="Last name" v-model="lastName" />
    <input type="text" placeholder="Reactive First name" v-model="fName" />
    <input type="text" placeholder="Reactive Last name" v-model="lName" />
    <input type="text" placeholder="Reactive Hero name" v-model="options.heroName" />
  </div>
</template>

<script>
import { ref, watch, reactive, toRefs } from 'vue';
import _ from 'lodash';

export default {
  name: 'Watch',
  data() {
    return {
      name: '',
    };
  },
  watch: {
    name(oldVal, newVal) {
      console.log(`Old Value: ${oldVal}`);
      console.log(`New Value: ${newVal}`);
    },
  },
  setup() {
    const firstName = ref('');
    const lastName = ref('');
    const state = reactive({
      fName: '',
      lName: '',
      options: {
        heroName: '',
      },
    });

    // watch(
    //   () => ({ ...state }),
    //   (newValue, oldValue) => {
    //     console.log('fName New Value:', newValue.fName);
    //     console.log('fName Old Value:', oldValue.fName);
    //     console.log('lName New Value:', newValue.lName);
    //     console.log('lName Old Value:', oldValue.lName);
    //   }
    // );

    watch(
      () => _.cloneDeep(state.options),
      (newValue, oldValue) => {
        console.log('options New Value:', newValue);
        console.log('options Old Value:', oldValue);
      },
      { deep: true }
    );

    watch(
      [firstName, lastName],
      (oldVals, newVals) => {
        // newVals are undefined when first called in immediate watchers
        console.log(`First Name Old Value: ${oldVals[0]}`);
        console.log(`Last Name Old Value: ${oldVals[1]}`);
        console.log(`First Name New Value: ${newVals[0]}`);
        console.log(`Last Name New Value: ${newVals[1]}`);
      },
      { immediate: true }
    );

    return {
      firstName,
      lastName,
      ...toRefs(state),
    };
  },
};
</script>

<style scoped></style>
