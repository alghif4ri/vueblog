<template>
  <div class="home">
    <!-- <p ref="p">Hi, I'm {{ name }}, heres my number {{ number }}</p> -->
    <!-- <p>Hi, I'm {{ name }}, heres my number {{ number }}</p>
    <button @click="handleClick">Click!</button>
    <button @click="number++">Increament</button>
    <input type="text" v-model="name" /> -->
    <h2>Ref</h2>
    <p>
      Hi, I'm {{ contactOne.name }}, heres my number {{ contactOne.number }}
    </p>
    <button @click="handleClick">Click!</button>
    <h2>Reactive</h2>
    <p>
      Hi, I'm {{ contactTwo.name }}, heres my number {{ contactTwo.number }}
    </p>
    <button @click="handleClickTwo">Click!</button>
    <p>
      Hi, I'm {{ contactTwoReactive }}
    </p>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
export default {
  name: "Home",
  setup() {
    // const p = ref(null);
    // const name = ref("Alghi");
    // const number = ref("08713243184");

    // const handleClick = () => {
    //   // console.log(p, p.value);
    //   // p.value.classList.add("paragraph");
    //   // p.value.textContent = `hi, alghi!`

    //   name.value = "Aiman";
    //   number.value = "08098888";
    // };
    // return { name, number, handleClick };
    const contactOne = ref({ name: "alghi", number: "08789890065" });
    const contactTwo = reactive({ name: "Acim", number: "098090880" });

    // kelemahan reactive
    const contactTwoReactive = reactive('ucup'); // nilai tidak bisa diubah dalam data primitif


    const handleClick = () => {
      contactOne.value.name = "Aiman";
      contactOne.value.number = "08314124";
    };

    const handleClickTwo = () => {
      contactTwo.name = "aiman";
      contactTwo.number = "0895348989";
    };
    return { contactOne, contactTwo, contactTwoReactive, handleClick, handleClickTwo };
  },
};
</script>
