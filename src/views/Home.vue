<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList v-if="showPosts" :posts="posts" />
      <button @click="posts.pop()">Delete Post</button>
    </div>
    <div v-else>
      <Loading />
    </div>
  </div>
</template>

<script>
import PostList from "../components/PostList.vue";
import Loading from "@/components/Loading";
import getPosts from "../composable/getPosts";
export default {
  name: "Home",
  components: {
    PostList,
    Loading,
  },
  setup() {
    const { posts, showPosts, error, load } = getPosts();
    load();

    return { posts, showPosts, error, load };
  },
};
</script>
