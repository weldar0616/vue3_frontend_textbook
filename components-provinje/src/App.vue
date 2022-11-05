<script setup lang="ts">
import { reactive, provide } from "vue";
import BaseSection from "./components/BaseSection.vue";
import type { Member } from "./interface";

const memberList = new Map<number, Member>();
memberList.set(33456, { id: 33456, name: "田中", email: "tanaka@hoge.com", points: 35, note: "初回特典あり" });
memberList.set(47783, { id: 47783, name: "鈴木", email: "suzuki@hoge.com", points: 53, });

provide("memberList", reactive(memberList));
</script>

<template>
  <BaseSection />
</template>