<template>
  <h1>Hello Bro ({{name}})! You watched {{movieName}}</h1>
</template>

<script>
export default {
  name: 'Greet',
  props: ['name', 'movieName'],
};
</script>
