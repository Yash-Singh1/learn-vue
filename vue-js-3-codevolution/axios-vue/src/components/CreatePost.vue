<template>
  <div>
    <form @submit.prevent="createPost">
      <div>
        <label for="userId">User ID</label>
        <input type="text" id="userId" v-model="formData.userId" />
      </div>
      <div>
        <label for="title">Title</label>
        <input type="text" id="title" v-model="formData.title" />
      </div>
      <div>
        <label for="body">Body</label>
        <input type="text" id="body" v-model="formData.body" />
      </div>
      <button>Create Post</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'CreatePost',
  data() {
    return {
      formData: {
        userId: '',
        title: '',
        body: '',
      },
    };
  },
  methods: {
    createPost() {
      axios('https://jsonplaceholder.typicode.com/posts', { method: 'POST', data: this.formData })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

<style scoped></style>
