<template>
  <div class="home">
    <h1>Home</h1>
    <PostList :posts="posts"/>
  </div>
</template>

<script>
import PostList from '../components/PostList.vue'
import {ref} from 'vue'
export default {
  name: 'Home',
  components: {
    PostList
  },
  setup(){
    const posts = ref([
  
      {id: 1, title: 'Post 1', body:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim saepe sint natus sequi eligendi! Iste ullam tempore adipisci commodi quaerat?'},
      {id: 2, title: 'Post 2', body:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim saepe sint natus sequi eligendi! Iste ullam tempore adipisci commodi quaerat?'},
    ])
    return {posts}
  }
}
</script>
