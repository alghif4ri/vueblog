<template>
  <div class="home">
    <p>Hi, I'm {{name}}, heres my number {{number}}</p>
  </div>
</template>

<script>
export default {
  name: "Home",
  setup() {
    const name = "Alghi";
    const number = "08713243184";

    return { name: name, number: number}
  },
};
</script>
