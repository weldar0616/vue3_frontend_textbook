<script setup lang="ts">
import { ref, computed } from "vue";

interface Props {
  id: number;
  name: string;
  email: string;
  points: number;
  note?: string;
}

const props = withDefaults(defineProps<Props>(), { note: "--" });

const localPoints = ref(props.points);
// const localNote = computed((): string => props.note ?? "--");

const pointUp = (): void => {
  localPoints.value++;
}
</script>

<template>
  <section class="box">
    <h4>{{ name }}さんの情報</h4>
    <dl>
      <dt>ID</dt>
      <dd>{{ id }}</dd>
      <dt>メールアドレス</dt>
      <dd>{{ email }}</dd>
      <dt>保有ポイント</dt>
      <dd>{{ localPoints }}</dd>
      <dt>備考</dt>
      <!-- <dd>{{ localNote }}</dd> -->
      <dd>{{ note }}</dd>
    </dl>
    <button v-on:click="pointUp">ポイント加算</button>
  </section>
</template>

<style scoped>
.box {
  border: green 1px solid;
  margin: 10px;
}
</style>