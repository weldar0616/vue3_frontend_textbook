<script setup lang="ts">
import { ref } from 'vue';

const url = ref("https://vuejs.org/");

const isSendButtonDisabled = ref(true);

const widthOrHeight = ref("height");
const widthOrHeightValue = ref(100);

const imgAttributes = ref({
  src: "/images/logo.svg",
  alt: "Vueのロゴ",
  width: 75,
  height: 75,
});
</script>

<template>
  <p><a v-bind:href="url" target="_blank">Vue.jsのサイト</a></p>
  <p><a :href="url" target="_blank">Vue.jsのサイト(省略形)</a></p>
  <p>
    <a v-bind:href="url + 'guide/introduction.html'" target="_blank">
      Vue.jsのガイドページ
    </a>
  </p>
  <p>
    <button type="button" v-bind:disabled="isSendButtonDisabled">送信</button>
  </p>
  <p>
    <img
      alt="VueLogo"
      src="./assets/logo.svg"
      v-bind:[widthOrHeight]="widthOrHeightValue"
    />
  </p>
  <p>
    <img v-bind="imgAttributes" />
  </p>
  <p>
    <img v-bind="imgAttributes" title="ロゴです！" />
  </p>
  <p>
    <img v-bind="imgAttributes" alt="ロゴです！" />
  </p>
</template>
