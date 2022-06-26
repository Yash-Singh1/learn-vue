import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    counter: 0,
    color: 'blue',
  },
  getters: {
    square(state) {
      return state.counter * state.counter;
    },
  },
  mutations: {
    increase(state, num = 1) {
      state.counter += num;
    },
    decrease(state, num = 1) {
      state.counter -= num;
    },
    setColor(state, newColor) {
      state.color = newColor;
    },
  },
  actions: {
    increaseX({ commit }) {
      axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new').then((response) => {
        commit('increase', response.data);
      });
    },
    decreaseX({ commit }) {
      axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new').then((response) => {
        commit('decrease', response.data);
      });
    },
    setColor({ commit }, newColor) {
      commit('setColor', newColor);
    },
  },
  modules: {},
});
