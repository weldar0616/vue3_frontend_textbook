// import { ref, computed } from 'vue'
// import { defineStore } from 'pinia'

// export const useCounterStore = defineStore('counter', () => {
//   const count = ref(0)
//   const doubleCount = computed(() => count.value * 2)
//   function increment() {
//     count.value++
//   }

//   return { count, doubleCount, increment }
// })

import { defineStore } from "pinia";
import { computed, ref } from "vue";

// interface State {
//   counter: number;
// }

export const useCounterStore = defineStore("counter", () => {
  const counter = ref(0);
  const doubleCount = computed(() => counter.value * 2);

  function incrementCount() {
    counter.value++;
  }

  return {
    counter,
    doubleCount,
    incrementCount,
  };
});
