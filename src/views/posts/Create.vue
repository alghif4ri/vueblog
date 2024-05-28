<template>
  <!-- Main Content-->
  <main class="mb-4">
    <div class="container px-4 px-lg-5">
      <div class="row gx-4 gx-lg-5 justify-content-center">
        <div class="col-md-10 col-lg-8 col-xl-7">
          <p class="text-center">Create Post</p>
          <div class="my-5">
            <form @submit.prevent="handleSubmit">
              <div class="form-floating">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Title"
                  v-model="title"
                />
                <label>Title</label>
              </div>
              <div class="form-floating">
                <textarea
                  class="form-control"
                  placeholder="Body"
                  style="height: 12rem"
                  v-model="body"
                ></textarea>
                <label>Body</label>
              </div>
              <div class="control-group">
                <div class="form-floating">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Tag"
                    v-model="tag"
                    @keydown.enter.prevent="handleKeydown"
                  />
                  <label>Tag</label>
                </div>
                <span v-for="tag in tags" :key="tag">#{{ tag }}</span>
              </div>
              <br />

              <!-- Submit Button-->
              <button class="btn btn-primary text-uppercase" type="submit">
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </main>
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
