import { ref } from "vue";

const getPosts = () => {
  const posts = ref([]);
  const showPosts = ref(true);
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

  return { posts, showPosts, error, load };
};

export default getPosts;
