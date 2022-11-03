<script lang="ts">
import { defineComponent, reactive, computed, toRefs } from 'vue';

export default defineComponent({
  name: "App",
  setup() {
    const data = reactive({
      PI: 3.14,
      radius: Math.round(Math.random() * 10)
    });
    const area = computed((): number => data.radius * data.radius * data.PI);

    setInterval((): void => {
      data.radius = Math.round(Math.random() * 10);
    }, 1000);

    return {
      ...toRefs(data),
      area,
    };
  }
})
</script>

<template>
  <p>半径{{ radius }}の円の面積を円周率{{ PI }}で計算すると{{ area }}</p>
</template>