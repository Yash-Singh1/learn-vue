<template>
  <input type="text" ref="inputRef" />
  <Popup v-show="false" ref="popup" />
</template>

<script>
import Popup from './Popup.vue';

export default {
  name: 'TemplateRef',
  mounted() {
    this.$refs.inputRef.focus();
    // We can now access the state of the popup component using refs
    console.log(this.$refs.popup);
  },
  components: {
    Popup,
  },
};
</script>

<style scoped></style>
