<template>
  <div class="post-list"></div>
  <div v-for="post in posts" :key="post.id">
    <PostSingle :post="post" />
  </div>
</template>

<script>
import PostSingle from "./PostSingle.vue";
export default {
  props: ["posts"],
  components: {
    PostSingle,
  },
  setup(props) {
    console.log(props.posts);
  },
};
</script>

<style></style>
