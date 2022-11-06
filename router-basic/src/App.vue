<script setup lang="ts">
import { reactive, provide } from "vue";
import { RouterView } from "vue-router";
import type { Member } from "@/interfaces";

const memberList = new Map<number, Member>();
memberList.set(33456, { id: 33456, name: "田中", email: "tanaka@hoge.com", points: 35, note: "初回特典あり" });
memberList.set(47783, { id: 47783, name: "鈴木", email: "suzuki@hoge.com", points: 53, });
provide("memberList", memberList);
</script>

<template>
  <header>
    <h1>Vue Routerサンプル</h1>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style>
main {
  border: blue 1px solid;
  padding: 10px;
}
#breadcrumbs ul li {
  display: inline;
  list-style-type: none;
}
#breadcrumbs {
  margin-left: 0px;
}
#breadcrumbs ul {
  padding-left: 0px;
}
#breadcrumbs ul .current {
  color: red;
}
#breadcrumbs ul li:before {
  content: " > ";
}
#breadcrumbs ul li:first-child::before {
  content: none;
}
</style>