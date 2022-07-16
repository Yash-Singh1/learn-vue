<template>
  <h2>App Username {{ username }}</h2>
  <ComponentC />
  <button @click="showPopup = true">Show Popup</button>
  <Popup v-show="showPopup" @close="closePopup" />
  <Card>Card Content 1</Card>
  <Card>Card Content 2</Card>
  <Card />

  <!-- Use named slots instead -->
  <Card>
    <template v-slot:header>
      <h3>Header</h3>
    </template>
    <!-- default is the slot for the unnamed slot -->
    <template v-slot:default>
      <img src="https://picsum.photos/200" />
    </template>
    <template v-slot:footer>
      <button>View Details</button>
    </template>
  </Card>

  <NameList>
    <template v-slot:default="slotProps">{{ slotProps.firstName }} {{ slotProps.lastName }}</template>
  </NameList>
  <NameList>
    <template v-slot:default="slotProps">{{ slotProps.firstName }}</template>
  </NameList>
  <h4>App Component Test</h4>
  <ChildStyle />

  <button @click="activeTab = 'TabA'">Tab A</button>
  <button @click="activeTab = 'TabB'">Tab B</button>
  <button @click="activeTab = 'TabC'">Tab C</button>

  <!-- <TabA v-show="activeTab === 'TabA'" />
  <TabB v-show="activeTab === 'TabB'" />
  <TabC v-show="activeTab === 'TabC'" /> -->

  <!-- Below is same thing as above, searches for component for is attribute -->
  <KeepAlive>
    <component :is="activeTab"></component>
  </KeepAlive>

  <button @click="showPortal = !showPortal">Toggle Portal</button>
  <Portal />

  <TemplateRef />

  <ClickCounter />

  <HoverCounter />
</template>

<script>
import ComponentC from './components/ComponentC.vue';
import Popup from './components/Popup.vue';
import Card from './components/Card.vue';
import NameList from './components/NameList.vue';
import ChildStyle from './components/ChildStyle.vue';
import TabA from './components/TabA.vue';
import TabB from './components/TabB.vue';
import TabC from './components/TabC.vue';
import Portal from './components/Portal.vue';
import TemplateRef from './components/TemplateRef.vue';
import ClickCounter from './components/ClickCounter.vue';
import HoverCounter from './components/HoverCounter.vue';

export default {
  name: 'App',
  components: {
    ComponentC,
    Popup,
    Card,
    NameList,
    ChildStyle,
    TabA,
    TabB,
    TabC,
    Portal,
    TemplateRef,
    ClickCounter,
    HoverCounter,
  },
  data() {
    return {
      username: 'Vishwas',
      showPopup: false,
      activeTab: 'TabA',
      showPortal: true,
    };
  },
  provide() {
    return {
      username: this.username,
    };
  },
  methods: {
    closePopup(name) {
      this.showPopup = false;
      console.log('name', name);
    },
  },
  beforeCreate() {
    console.log('Parent beforeCreate()');
  },
  created() {
    console.log('Parent created()');
  },
  beforeMount() {
    console.log('Parent beforeMount()');
  },
  mounted() {
    console.log('Parent mounted()');
  },
  beforeUpdate() {
    console.log('Parent beforeUpdate()');
  },
  updated() {
    console.log('Parent updated()');
  },
  beforeUnmount() {
    console.log('Parent beforeUnmount()');
  },
  unmounted() {
    console.log('Parent unmounted()');
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

h4 {
  color: orange;
}
</style>

<style scoped>
h4 {
  color: orange;
}

/* Will apply to root of child components, so positioning can be done, also when using slots, the parent components styles are applied */
/* div {
  background: yellow;
} */
</style>
