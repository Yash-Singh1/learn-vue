<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Counter />
    <div class="buttons">
      <button @click="$store.commit('decrease')">-</button>
      <button @click="$store.commit('increase')">+</button>
    </div>
    <div>
      <button id="increaseX" @click="$store.dispatch('increaseX')">Increase by Random</button>
    </div>
    <div>
      <button id="decreaseX" @click="$store.dispatch('decreaseX')">Decrease by Random</button>
    </div>
    <div>
      <input v-model="color" placeholder="Enter color..." type="text" />
    </div>
  </div>
</template>

<script>
import Counter from '@/components/Counter.vue';

export default {
  name: 'HomeView',
  computed: {
    color: {
      get() {
        return this.$store.state.color;
      },
      set(newColor) {
        return this.$store.dispatch('setColor', newColor);
      },
    },
  },
  components: {
    Counter,
  },
};
</script>

<style>
div {
  margin-bottom: 10px;
}

.counter {
  font-size: 80px;
}

.buttons button {
  font-size: 40px;
  width: 100px;
  margin: 0 10px;
}

#increaseX,
#decreaseX {
  margin-top: 10px;
  width: max-content;
  padding: 10px 30px;
  font-size: 40px;
}
</style>
