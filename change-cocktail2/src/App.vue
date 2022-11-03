<script lang="ts">
import { defineComponent, ref, computed } from 'vue';

export default defineComponent({
  name: "App",
  setup() {
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

    return {
      cocktailNo,
      priceMsg
    }
  }
});

interface Cocktail {
  id: number,
  name: string,
  price: number,
}
</script>

<template>
  <p>現在のカクテル番号: {{ cocktailNo }}</p>
  <p>{{ priceMsg }}</p>
</template>