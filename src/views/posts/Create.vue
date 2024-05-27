<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="">Title</label>
        <input type="text" v-model="title" />
      </div>
      <div>
        <label for="">Body</label>
        <textarea cols="30" rows="10" v-model="body"></textarea>
      </div>
      <div>
        <label for="">Tags</label>
        <input
          type="text"
          v-model="tag"
          @keydown.enter.prevent="handleKeydown"
        />
      </div>
      <button type="submit">Create</button>
    </form>
    <div>
      {{ title }}
    </div>
    <div>
      {{ body }}
    </div>
    <div v-for="tag in tags" :key="tag">#{{ tag }}</div>
  </div>
</template>

<script>
import putPost from "@/composable/putPost";

export default {
  setup() {
    const { title, body, tag, tags, handleKeydown, handleSubmit } = putPost();

    return { title, body, tag, tags, handleKeydown, handleSubmit };
  },
};
</script>

<style></style>
