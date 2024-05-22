<template>
  <div class="home">
    <h1>Home</h1>
    <PostList v-if="showPosts" :posts="posts" />
    <button @click="showPosts = !showPosts">Unmounted</button>
    <button @click="posts.pop()">Delete Post</button>
  </div>
</template>

<script>
import PostList from "../components/PostList.vue";
import { ref } from "vue";
export default {
  name: "Home",
  components: {
    PostList,
  },
  setup() {
    const posts = ref([
      {
        id: 1,
        title: "Post 1",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim saepe sint natus sequi eligendi! Iste ullam tempore adipisci commodi quaerat?",
      },
      {
        id: 2,
        title: "Post 2",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim saepe sint natus sequi eligendi! Iste ullam tempore adipisci commodi quaerat?",
      },
    ]);

    const showPosts = ref(true);
    return { posts, showPosts };
  },
};
</script>
