<script setup lang="ts">
interface Props {
  id: number;
  name: string;
  email: string;
  points: number;
  note?: string;
}

interface Emits {
  (event: "incrementPoint", id: number): void
}

const props = withDefaults(defineProps<Props>(), { note: "--" });
const emit = defineEmits<Emits>();

const pointUp = (): void => {
  emit("incrementPoint", props.id);
};
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
      <dd>{{ points }}</dd>
      <dt>備考</dt>
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