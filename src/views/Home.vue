<template>
  <div class="home">
    <p ref="p">Hi, I'm {{ name }}, heres my number {{ number }}</p>
    <button @click="handleClick">Click!</button>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Home",
  setup() {
    const p = ref(null);
    const name = "Alghi";
    const number = "08713243184";

    const handleClick = () => {
      console.log(p, p.value);
      p.value.classList.add("paragraph");
      p.value.textContent = `hi, alghi!`
    };
    return { name, number, p, handleClick };
  },
};
</script>
