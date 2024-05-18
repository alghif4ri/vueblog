<template>
  <div class="home">
    <!-- <p ref="p">Hi, I'm {{ name }}, heres my number {{ number }}</p> -->
    <!-- <p>Hi, I'm {{ name }}, heres my number {{ number }}</p>
    <button @click="handleClick">Click!</button>
    <button @click="number++">Increament</button>
    <input type="text" v-model="name" /> -->
    <!-- <h2>Ref</h2>
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
    </p> -->
    <h1>Home</h1>
    <PostList :posts="posts"/>
    <!-- <input type="text" v-model="search" /> -->
    <!-- <div v-for="(name, index) in resultSearch" :key="index">{{ name }}</div>
    <button @click="handleClick">stop</button> -->
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
// import { computed, ref, watch, watchEffect } from "vue";
// export default {
//   name: "Home",
//   setup() {
//     const search = ref("");
//     const names = ref([
//       "John Doe",
//       "Jane Smith",
//       "Alice Johnson",
//       "Bob Williams",
//       "Charlie Brown",
//       "David Lee",
//       "Eve Clark",
//       "Frank Miller",
//       "Grace Davis",
//       "Harry Wilson",
//     ]);

//     const stop = watch(search, () => {
//       console.log("search changed");
//     });

//     const stopEffect = watchEffect(() => {
//       console.log("search effect changed", search.value);
//     });
//     const resultSearch = computed(() => {
//       return names.value.filter((name) => name.includes(search.value));
//     });

//     const handleClick = () => {
//       stop()
//       stopEffect()
//     }

//     return { names, search, resultSearch, handleClick };
//   },
// };

// import { computed, reactive, ref } from "vue";
// export default {
//   name: "Home",
//   setup() {
//     const names = ref([
//       "John Doe",
//       "Jane Smith",
//       "Alice Johnson",
//       "Bob Williams",
//       "Charlie Brown",
//       "David Lee",
//       "Eve Clark",
//       "Frank Miller",
//       "Grace Davis",
//       "Harry Wilson",
//     ]);
//     return  { names };

// const name = computed(() => {
//   return "John Doe";
// });
// return { name };
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
// const contactOne = ref({ name: "alghi", number: "08789890065" });
// const contactTwo = reactive({ name: "Acim", number: "098090880" });

// kelemahan reactive
// const contactTwoReactive = reactive('ucup'); // nilai tidak bisa diubah dalam data primitif

// const handleClick = () => {
//   contactOne.value.name = "Aiman";
//   contactOne.value.number = "08314124";
// };

// const handleClickTwo = () => {
//   contactTwo.name = "aiman";
//   contactTwo.number = "0895348989";
// };
// return { contactOne, contactTwo, contactTwoReactive, handleClick, handleClickTwo };
//   },
// };
</script>
