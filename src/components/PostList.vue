<template>
  <div class="post-list"></div>
  <div v-for="post in posts" :key="post.id">
    <PostSingle :post="post" />
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from "vue";
import PostSingle from "./PostSingle.vue";
export default {
  props: ["posts"],
  components: {
    PostSingle,
  },
  setup(props) {
    // console.log(props.posts);
    onMounted(() => console.log("component mounted"));
    onUnmounted(() => console.log("component unmounted"));
    onUpdated(() => console.log("component updated"));
  },
};
</script>

<style></style>
