<!-- <script setup lang="ts">
import { ref } from 'vue';

const now = new Date();
const nowStr = now.toLocaleTimeString();

let timeStr = nowStr;
const timeStrRef = ref(timeStr);

function changeTime(): void {
  const newTime = new Date();
  const newTimeStr = newTime.toLocaleTimeString();
  timeStr = newTimeStr;
  timeStrRef.value = newTimeStr;
}

setInterval(changeTime, 1000);
</script>

<template>
  <p>現在時刻: {{ timeStr }}</p>
  <p>現在時刻(ref): {{ timeStrRef }}</p>
</template>
 -->

<script setup lang="ts">
import { reactive, computed } from "vue";

const data = reactive({
  PI: 3.14,
  radius: Math.round(Math.random() * 10),
});

const area = computed((): number => data.radius * data.radius * data.PI);

setInterval((): void => {
  data.radius = Math.round(Math.random() * 10);
}, 1000);
</script>

<template>
  <p>
    半径{{ data.radius }}の円の面積を円周率{{ data.PI }}で計算すると、{{ area }}
  </p>
</template>
