<template>
  <!-- props.text also works -->
  <!-- <button>{{ props.text }}</button> -->
  <button @click="handleButtonClicked">{{ text }}</button>
</template>

<!-- <script>
export default {
  props: {
    text: {
      type: String,
      default: 'no text specified',
    },
  },
  emits: ['buttonClicked'],
  setup(_ /* props */, context) {
    function handleButtonClicked() {
      context.emit('buttonClicked', Math.floor(Math.random() * 10 + 1));
    }

    return { handleButtonClicked };
  },
};
</script> -->

<script setup>
// Does same logic as older script pattern but using newer setup pattern

const props = defineProps({
  text: {
    type: String,
    default: 'no text specified',
  },
});
const emit = defineEmits(['buttonClicked']);

function handleButtonClicked() {
  emit('buttonClicked', Math.floor(Math.random() * 10 + 1));
}
</script>
