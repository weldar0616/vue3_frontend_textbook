<!-- <script setup lang="ts">
import { computed } from "vue";

const showOrNot = computed((): boolean => {
  let showOrNot = false;
  const rand = Math.round(Math.random() * 100);
  if (rand >= 50) {
    showOrNot = true;
  }
  return showOrNot;
});
</script>

<template>
  <p v-if="showOrNot">v-if</p>
  <p v-show="showOrNot">v-show</p>
</template> -->

<!-- <script setup lang="ts">
import { ref } from "vue";

const listInit: string[] = ["A", "B", "C"];
const list = ref(listInit);
</script>

<template>
  <ul>
    <li v-for="elm in list" v-bind:key="elm">{{ elm }}</li>
  </ul>
  <ul>
    <li v-for="(elm, idx) in list" v-bind:key="elm">{{ elm }}:{{ idx }}</li>
  </ul>
</template> -->

<!-- <script setup lang="ts">
import { ref } from "vue";

const listInit: { [key: number]: string } = {
  2345: "A",
  4412: "B",
  6792: "C",
};
const list = ref(listInit);
</script>

<template>
  <ul>
    <li v-for="(elm, id) in list" v-bind:key="'list' + id">IDが{{ id }}のelmは{{ elm }}</li>
  </ul>
  <ul>
    <li v-for="(elm, id, idx) in list" v-bind:key="'listWithIdx' + id">[{{ idx + 1 }}] IDが{{ id }}のelmは{{ elm }}</li>
  </ul>
</template> -->

<!-- <script setup lang="ts">
import { ref } from "vue";

const whiteLadyInit: {
  id: number;
  name: string;
  price: number;
  recipe: string;
} = {
  id: 2345,
  name: "ホワイトレディ",
  price: 1200,
  recipe: "ほげほげ",
};
const whiteLady = ref(whiteLadyInit);
</script> 

<template>
  <dl>
    <template v-for="(value, key) in whiteLady" v-bind:key="key">
      <dt>{{ key }}</dt>
      <dd>{{ value }}</dd>
    </template>
  </dl>
</template> -->

<script setup lang="ts">
import { ref } from "vue";

const cocktailListInit: string[] = ["ホワイトレディ", "ブルーハワイ", "ニューヨーク"];
const cocktailList = ref(cocktailListInit);
const changeCocktailList = (): void => {
  cocktailList.value = ["バラライカ", "XYZ", "マンハッタン"];
};
const addCocktailList = (): void => {
  cocktailList.value.push("ブルームーン");
};
const deleteFromCocktailList = (): void => {
  cocktailList.value.pop();
};
</script>

<template>
  <ul>
    <li v-for="(cocktailName, index) in cocktailList" v-bind:key="cocktailName">{{ cocktailName }} [{{ index }}]</li>
  </ul>
  <p>
    CocktailListを<button v-on:click="changeCocktailList">変更</button>
  </p>
  <p>
    <button v-on:click="addCocktailList">追加</button>
  </p>
  <p>
    <button v-on:click="deleteFromCocktailList">削除</button>
  </p>
</template>
