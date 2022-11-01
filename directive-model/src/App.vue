<!-- <script setup lang="ts">
import { ref } from 'vue';

const inputNameBind = ref("しんちゃん");
const inputNameOn = ref("ななし");
const onInputName = (event: Event): void => {
  const element = event.target as HTMLInputElement;
  inputNameOn.value = element.value;
};
</script>

<template>
  <section>
    <input type="text" v-bind:value="inputNameBind" />
  </section>
  <br />
  <section>
    <input type="text" v-on:input="onInputName" />
    <p>{{ inputNameOn }}</p>
  </section>
</template> -->

<!-- <script setup lang="ts">
import { ref } from 'vue';

const inputName2Way = ref("双方向");
const onInputName2Way = (event: Event): void => {
  const element = event.target as HTMLInputElement;
  inputName2Way.value = element.value;
};
</script>

<template>
  <section>
    <input
      type="text"
      v-bind:value="inputName2Way"
      v-on:input="onInputName2Way"
    />
    <p>{{ inputName2Way }}</p>
  </section>
</template> -->

<script setup lang="ts">
import { ref } from 'vue';

const inputTextArea = ref("テキストエリアへの入力文字。\n改行あり。");
const memberType = ref(1);
const memberTypeSelect = ref(1);
const isAgreed = ref(false);
const isAgreed01 = ref(0);
const selectedOS = ref([]);
const selecetdOSSelect = ref([]);
</script>

<template>
  <textarea v-model="inputTextArea"></textarea>
  <br />
  <section>
    <label><input type="radio" name="memberType" value="1" v-model="memberType" />通常会員</label>
    <label><input type="radio" name="memberType" value="2" v-model="memberType" />特別会員</label>
    <label><input type="radio" name="memberType" value="3" v-model="memberType" />優良会員</label>
    <br>
    <p>選択されたボタン: {{ memberType }}</p>
  </section>
  <!-- 省略 -->
</template>
