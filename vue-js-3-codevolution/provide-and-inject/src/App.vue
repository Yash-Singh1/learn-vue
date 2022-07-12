<template>
  <h2>App Username {{ username }}</h2>
  <ComponentC />
</template>

<script>
import ComponentC from './components/ComponentC.vue';

export default {
  name: 'App',
  components: {
    ComponentC,
  },
  data() {
    return {
      username: 'Vishwas',
    };
  },
  provide() {
    return {
      username: this.username,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
