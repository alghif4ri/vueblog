<template>
  <div class="home">
    <!-- <p ref="p">Hi, I'm {{ name }}, heres my number {{ number }}</p> -->
    <p>Hi, I'm {{ name }}, heres my number {{ number }}</p>
    <button @click="handleClick">Click!</button>
    <button @click="number++">Increament</button>
    <input type="text" v-model="name">
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Home",
  setup() {
    // const p = ref(null);
    const name = ref("Alghi");
    const number = ref("08713243184");

    const handleClick = () => {
      // console.log(p, p.value);
      // p.value.classList.add("paragraph");
      // p.value.textContent = `hi, alghi!`

      name.value = "Aiman";
      number.value = "08098888";
    };
    return { name, number, handleClick };
  },
  data() {
    return {
      nilai: 5,
    };
  },
};
</script>
