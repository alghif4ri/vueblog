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
    <button class="btn btn-primary">Button</button>
    <p class="para">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolorum
      nobis corporis fugit iure exercitationem amet nostrum laudantium quidem
      possimus.
    </p>
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
  mounted() {
    console.log($(".para").text());
  },
};
</script>
