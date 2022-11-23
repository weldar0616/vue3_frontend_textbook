<script setup lang="ts">
import {ref} from "vue";

const isVisible = ref(false);
const onShowButtonClick = (): void => {
  isVisible.value = true;
};
</script>

<template>
  <p>
    隠し要素を
    <button data-testid="showButton" v-on:click="onShowButtonClick">表示</button>
  </p>
  <p v-if="isVisible" data-testid="invisible">表示されました！</p>
</template>