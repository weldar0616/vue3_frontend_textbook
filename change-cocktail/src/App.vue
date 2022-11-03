<!-- <script setup lang="ts">
import { ref, computed } from "vue";

const cocktailDataListInit = new Map<number, Cocktail>();
cocktailDataListInit.set(1, { id: 1, name: "ホワイトレディ", price: 1200 });
cocktailDataListInit.set(2, { id: 2, name: "ブルーハワイ", price: 1500 });
cocktailDataListInit.set(3, { id: 3, name: "ニューヨーク", price: 1100 });
cocktailDataListInit.set(4, { id: 4, name: "マティーニ", price: 1500 });

const cocktailNo = ref(1);

const priceMsg = computed(
  (): string => {
    const cocktail = cocktailDataListInit.get(cocktailNo.value);
    let msg = "該当カクテルはありません";
    if (cocktail != undefined) {
      msg = `該当するカクテルは${cocktail.name}で、価格は${cocktail.price}です`;
    }
    return msg;
  }
);

setInterval(
  (): void => {
    cocktailNo.value = Math.round(Math.random() * 3) + 1;
  }, 1000
);

interface Cocktail {
  id: number,
  name: string,
  price: number,
}
</script>

<template>
  <p>現在のカクテル番号: {{ cocktailNo }}</p>
  <p>{{ priceMsg }}</p>
</template> -->

<!-- watchEffect -->
<!-- <script setup lang="ts">
import { ref, watchEffect } from "vue";

const cocktailNo = ref(1);
const priceMsg = ref("");

watchEffect(
  (): void => {
    priceMsg.value = getCocktailInfo(cocktailNo.value);
  }
)

setInterval(
  (): void => {
    cocktailNo.value = Math.round(Math.random() * 3) + 1;
  }, 1000
);

interface Cocktail {
  id: number,
  name: string,
  price: number,
}

function getCocktailInfo(cocktailNo: number): string {
  const cocktailDataListInit = new Map<number, Cocktail>();
  cocktailDataListInit.set(1, { id: 1, name: "ホワイトレディ", price: 1200 });
  cocktailDataListInit.set(2, { id: 2, name: "ブルーハワイ", price: 1500 });
  cocktailDataListInit.set(3, { id: 3, name: "ニューヨーク", price: 1100 });
  cocktailDataListInit.set(4, { id: 4, name: "マティーニ", price: 1500 });

  const cocktail = cocktailDataListInit.get(cocktailNo);
  let msg = "該当カクテルはありません";
  if (cocktail != undefined) {
    msg = `該当するカクテルは${cocktail.name}で、価格は${cocktail.price}です`;
  }
  return msg;

}
</script>

<template>
  <p>現在のカクテル番号: {{ cocktailNo }}</p>
  <p>{{ priceMsg }}</p>
</template> -->

<!-- watch -->
<script setup lang="ts">
import { ref, watch } from "vue";

const cocktailNo = ref(1);
const priceMsg = ref("");

// - watchはwatchEffectと異なり、初回起動時にコールバック関数を実行しない
// - watchの第一引数には配列の指定が可能だが、それならwatchEffectを使った方が良い
// watch(cocktailNo,
//   (): void => {
//     priceMsg.value = getCocktailInfo(cocktailNo.value);
//   },
//   // { immediate: true } // 初回起動時からコールバック関数が実行される
// )

// - watchEffectとは異なり、newVal / oldVal を受け取れる
watch(cocktailNo,
  (newVal: number, oldVal: number): void => {
    const msg = `前のカクテル: ${getCocktailInfo(oldVal)} 現在のカクテル: ${getCocktailInfo(newVal)}`;
    priceMsg.value = msg;
  },
  // { immediate: true } // 初回起動時からコールバック関数が実行される
)

setInterval(
  (): void => {
    cocktailNo.value = Math.round(Math.random() * 3) + 1;
  }, 1000
);

interface Cocktail {
  id: number,
  name: string,
  price: number,
}

function getCocktailInfo(cocktailNo: number): string {
  const cocktailDataListInit = new Map<number, Cocktail>();
  cocktailDataListInit.set(1, { id: 1, name: "ホワイトレディ", price: 1200 });
  cocktailDataListInit.set(2, { id: 2, name: "ブルーハワイ", price: 1500 });
  cocktailDataListInit.set(3, { id: 3, name: "ニューヨーク", price: 1100 });
  cocktailDataListInit.set(4, { id: 4, name: "マティーニ", price: 1500 });

  const cocktail = cocktailDataListInit.get(cocktailNo);
  let msg = "該当カクテルはありません";
  if (cocktail != undefined) {
    msg = `該当するカクテルは${cocktail.name}で、価格は${cocktail.price}です`;
  }
  return msg;

}
</script>

<template>
  <p>現在のカクテル番号: {{ cocktailNo }}</p>
  <p>{{ priceMsg }}</p>
</template>