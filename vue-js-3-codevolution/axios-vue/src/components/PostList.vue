<template>
  <div>
    <!-- <button @click="loadPosts">Load Posts</button> -->
    <h3 v-if="errorMsg">{{ errorMsg }}</h3>
    <details v-if="posts.length > 0">
      <summary>Results</summary>
      <div v-for="post in posts" :key="post.id">
        <h3>{{ post.id }}. {{ post.title }}</h3>
        <p>{{ post.body }}</p>
        <hr />
      </div>
    </details>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'PostList',
  data() {
    return {
      posts: [],
      errorMsg: '',
    };
  },
  created() {
    this.loadPosts();
  },
  methods: {
    loadPosts() {
      axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
          this.errorMsg = '';
          this.posts = response.data;
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
          this.errorMsg = 'Error Retrieving Data';
        });
    },
  },
};
</script>

<style scoped></style>
