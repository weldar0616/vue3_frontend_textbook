<script setup lang="ts">
import { computed, inject } from "vue";
import type { Member } from "../interface";

interface Props {
  id: number;
}

const props = defineProps<Props>();

const memberList = inject("memberList") as Map<number, Member>;
const member = computed((): Member => memberList.get(props.id) as Member);

const localNote = computed((): string => member.value.note ?? "--");
</script>

<template>
  <section class="box">
    <h4>{{ member.name }}さんの情報</h4>
    <dl>
      <dt>ID</dt>
      <dd>{{ id }}</dd>
      <dt>メールアドレス</dt>
      <dd>{{ member.email }}</dd>
      <dt>保有ポイント</dt>
      <dd>
        <input type="number" v-model.number="member.points" />
      </dd>
      <dt>備考</dt>
      <dd>{{ localNote }}</dd>
    </dl>
  </section>
</template>

<style scoped>
.box {
  border: green 1px solid;
  margin: 10px;
}
</style>