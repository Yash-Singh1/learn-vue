<!-- This is just a messy playground to try basic concepts -->

<template>
  {{ greet }} {{ name }}
  <div v-text="channel"></div>
  <div>{{ channelHtml }}</div>
  <div v-html="channelHtml"></div>
  <!-- The shorthand for v-bind is nothing just a colon -->
  <h2 :id="headingId">Heading</h2>
  <h2 :class="[headingClasses, promoted && 'promoted']">Heading</h2>
  <h2 :class="promoted ? 'promoted' : 'not-promoted'">Congratulations!</h2>
  <!-- Can be a data object or an array of objects -->
  <button
    v-bind:disabled="buttonDisabled"
    v-bind:style="{
      background: buttonBg,
      color: buttonColor,
      cursor: 'not-allowed',
      fontSize: 30 + 'px',
    }"
  >
    Bind
  </button>
  <h2 v-if="num === 0">failure</h2>
  <h2 v-else-if="name < 10">c'mon</h2>
  <h2 v-else>amazing</h2>
  <!-- v-show just changes whether the element is shown or not, while v-if destroys the element -->
  <!-- use v-show when possible to make the Virtual DOM stuff faster -->
  <h3 v-show="num < 0">Gimme a pos num</h3>
  <div>
    <h1>The following people are wanted alive</h1>
    <!-- eslint-disable-next-line vue/require-v-for-key -->
    <h3 v-for="(person, index) in wanted" :key="index">{{ person }}</h3>
  </div>
  <p v-for="(value, key, index) in objectEx" :key="key">{{ key }}: {{ value }} is the {{ index + 1 }}th key-value pair</p>
  <template v-if="promoted">
    <h5>Guess What! Template is the same thing as React.Fragment in VueJS, but you need a directive specified</h5>
  </template>
  <div>1 + 2 + 3 = {{ add(1, 2, 3) }}</div>
  <br />
  <div>{{ num }}</div>
  <button v-on:click="decrement">Decrement</button>
  <!-- Shorthand is v-on: replaced with @. Also v-on directives have access to an identifier named $event -->
  <button @click="increment($event)">Increment</button>
  <h2>{{ fullName }}</h2>
  <button @click="changeFullName">Change Full Name</button>
  <!-- <template v-for="item in items" :key="item.id">
    <h2 v-if="item.price >= 500">{{ item.title }} - ${{ item.price }}</h2>
  </template> -->
  <!-- Instead use computed property for filtering -->
  <template v-for="item in expensiveItems" :key="item.id">
    <h2>{{ item.title }} - ${{ item.price }}</h2>
  </template>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      greet: 'Hello',
      name: 'Yash',
      channel: 'Codevolution',
      channelHtml: `<b onclick="alert('Redirecting to channel...')">Codevolution</b>`,
      headingId: 'heading',
      buttonDisabled: true,
      headingClasses: ['underline', 'yellow'],
      promoted: true,
      buttonBg: 'black',
      buttonColor: 'white',
      num: 0,
      wanted: ['Bruce Lee', 'John Cena', 'Diana Clark'],
      objectEx: {
        a: '1',
        b: '2',
        c: '3',
      },
      firstName: 'Yash',
      lastName: 'Singh',
      items: [
        {
          id: 1,
          title: 'TV',
          price: '1000',
        },
        {
          id: 2,
          title: 'Phone',
          price: '500',
        },
        {
          id: 3,
          title: 'Laptop',
          price: '2000',
        },
      ],
    };
  },
  // Computed properties don't take parameters
  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
    // Instead use getter setter for computed property
    fullName: {
      get() {
        return `${this.firstName} ${this.lastName}`;
      },
      set(value) {
        const names = value.split(' ');
        this.firstName = names[0];
        this.lastName = names[1];
      },
    },
    expensiveItems() {
      return this.items.filter((item) => item.price >= 500);
    },
  },
  methods: {
    add(...addends) {
      if (addends.length === 1) {
        return addends[0];
      }
      return addends[0] + this.add(...addends.slice(1));
    },
    increment(event) {
      console.log(event);
      this.num++;
    },
    decrement(event) {
      console.log(event);
      this.num--;
    },
    changeFullName() {
      this.fullName = 'Clark Kent';
    },
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
.promoted {
  color: green;
  font-size: 40px;
}
.not-promoted {
  color: red;
}
#heading {
  background: red;
}
#heading::after {
  content: 'Id binded: headingId';
  font-size: 14px;
}
.underline {
  text-decoration: underline;
}
.yellow {
  color: yellow;
}
</style>
