<script setup lang="ts">
interface Props {
  id: number;
  name: string;
  email: string;
  points: number;
  note?: string;
}

interface Emits {
  (event: "update:points", points: number): void
}

const props = withDefaults(defineProps<Props>(), { note: "--" });
const emit = defineEmits<Emits>();

const onInput = (event: Event): void => {
  const element = event.target as HTMLInputElement;
  const inputPoints = Number(element.value);
  emit("update:points", inputPoints);
}

// const pointUp = (): void => {
//   emit("incrementPoint", props.id);
// };
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
      <dd>
        <input type="number" v-bind:value="points" v-on:input="onInput" />
      </dd>
      <dt>備考</dt>
      <dd>{{ note }}</dd>
    </dl>
    <!-- <button v-on:click="pointUp">ポイント加算</button> -->
  </section>
</template>

<style scoped>
.box {
  border: green 1px solid;
  margin: 10px;
}
</style>