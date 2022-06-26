<template>
  <div class="counter" :style="{ color: $store.state.color }">{{ $store.state.counter }}<sup>2</sup> = {{ $store.getters.square }}</div>
</template>

<script>
export default {};
</script>

<style></style>
