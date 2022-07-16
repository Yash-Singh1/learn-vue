<template>
  <!-- v-once treats an element as static content and doesn't rerender -->
  <h1 v-once>Form</h1>
  <!-- v-pre skips templating for input HTML or speeding up static non-templated content compilation -->
  <p v-pre>I am not templated: {{ name }}</p>
  <pre><code>{{JSON.stringify(formValues, null, 2)}}</code></pre>
  <!-- Instead we can use the .prevent modifier -->
  <!-- <form @submit="submitForm"> -->
  <form @submit.prevent="submitForm">
    <div class="form-group">
      <label for="name">Name</label>
      <!-- There are modifiers shown by the .{{modifier}} syntax to intercept binding -->
      <input type="text" id="name" v-model.trim.lazy="formValues.name" />
    </div>
    <div class="form-group">
      <label for="profile">Profile Summary</label>
      <textarea id="profile" v-model="formValues.summary"></textarea>
    </div>
    <div class="form-group">
      <label for="country">Country</label>
      <select id="country" v-model="formValues.country">
        <option value="">Select a country</option>
        <option value="india">India</option>
        <option value="usa">United States of America</option>
      </select>
    </div>
    <div class="form-group">
      <label for="job_location">Job Location</label>
      <select id="job_location" multiple v-model="formValues.job_location">
        <option value="">Select a Job Location</option>
        <option value="india">India</option>
        <option value="usa">United States of America</option>
      </select>
    </div>
    <div class="form-group">
      <input type="checkbox" id="remoteWork" v-model="formValues.remoteWork" true-value="yes" false-value="no" />
      <label for="remoteWork">Remote Work</label>
    </div>
    <fieldset class="form-group">
      <legend>Skill Set</legend>
      <input type="checkbox" value="html" id="html" v-model="formValues.skillSet" />
      <label for="html">HTML</label>
      <br />
      <input type="checkbox" value="javascript" id="javascript" v-model="formValues.skillSet" />
      <label for="javascript">JavaScript</label>
      <br />
      <input type="checkbox" value="css" id="css" v-model="formValues.skillSet" />
      <label for="css">CSS</label>
    </fieldset>
    <fieldset class="form-group">
      <legend>Years of Experience</legend>
      <input type="radio" id="0-2" value="0-2" v-model="formValues.yearsOfExperience" />
      <label for="0-2">0-2</label>
      <br />
      <input type="radio" id="3-5" value="3-5" v-model="formValues.yearsOfExperience" />
      <label for="3-5">3-5</label>
      <br />
      <input type="radio" id="6-10" value="6-10" v-model="formValues.yearsOfExperience" />
      <label for="6-10">6-10</label>
      <br />
      <input type="radio" id="10+" value="10+" v-model="formValues.yearsOfExperience" />
      <label for="10+">10+</label>
    </fieldset>
    <div class="form-group">
      <label for="age">Age</label>
      <!-- There are event modifiers for different keys in the keyboard events -->
      <input type="number" id="age" v-model.number="formValues.age" @keyup.enter="submitForm" />
    </div>
    <Input v-model="moreInfo" />
    <div>
      <button>Submit</button>
    </div>
  </form>
</template>

<script>
import Input from './components/Input.vue';

export default {
  name: 'App',
  data() {
    return {
      formValues: {
        name: '',
        summary: '',
        country: '',
        job_location: [],
        remoteWork: 'no',
        skillSet: [],
        yearsOfExperience: '',
        age: null,
      },
      moreInfo: '',
    };
  },
  methods: {
    submitForm(event) {
      event.preventDefault();
      console.log('Submitted values', this.formValues);
    },
  },
  components: {
    Input,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  width: 25%;
  margin: 60px auto;
}
input[type='checkbox'],
input[type='radio'] {
  display: inline-block;
  margin-right: 5px;
}
label:not([for='remoteWork'], [for='html'], [for='javascript'], [for='css'], [for='0-2'], [for='3-5'], [for='6-10'], [for='10+']) {
  display: block;
}
</style>
