<template>
  <h1 @click="handleClick">My name is {{ name }}, I am {{ age }} years old.</h1>
  <MyButton text="My button text" @buttonClicked="showAlert" />
</template>

<!-- <script>
import { ref } from 'vue';
import MyButton from '@/components/MyButton.vue';

export default {
  setup() {
    const name = ref('Yash');
    const age = ref(14);

    function handleClick() {
      name.value = 'Yosh';
      age.value = 19;
    }

    function showAlert(age) {
      alert(`Child button clicked with age ${age}`);
    }

    return {
      name,
      age,
      handleClick,
      showAlert,
    };
  },
  components: {
    MyButton,
  },
};
</script> -->

<script setup>
// This will do the same in the original older script pattern but using the setup pattern

import { ref } from 'vue';
import MyButton from '@/components/MyButton.vue';

const name = ref('Yash');
const age = ref(14);

function handleClick() {
  name.value = 'Yosh';
  age.value = 19;
}

function showAlert(age) {
  alert(`Child button clicked with age ${age}`);
}
</script>
