<template>
  <div class="home">
    <h1>Home</h1>
    <div  v-if="error">{{ error }}</div>
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
    const posts = ref([]);
    const error = ref(null);

    const load = async () => {
      try {
        let data = await fetch("http://localhost:3000/posts");
        if (!data.ok) {
          throw Error("No Data");
        }
        posts.value = await data.json();
      } catch (err) {
        error.value = err.message;
      }
    };

    load();

    const showPosts = ref(true);
    return { posts, showPosts, error };
  },
};
</script>
