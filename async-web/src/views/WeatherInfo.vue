<script setup lang="ts">
import { computed } from 'vue';
import { RouterLink } from 'vue-router';
import { useeWeatherStore } from '@/stores/weather';
import type { City } from '@/stores/weather';

interface Props {
  id: string;
}
const props = defineProps<Props>();

const weatherStore = useeWeatherStore();
weatherStore.receiveWeatherInfo(props.id);

const isLoading = computed((): boolean => weatherStore.isLoading);
const selectedCity = computed((): City => weatherStore.selectedCity);
const weatherDescription = computed((): string => weatherStore.weatherDescription);
</script>

<template>
  <p v-if="isLoading">データ取得中...</p>
  <section v-else>
    <h2>{{ selectedCity.name }}</h2>
    <p>{{ weatherDescription }}</p>
  </section>
  <p>リストに<RouterLink v-bind:to="{ name: 'CityList' }">戻る</RouterLink>
  </p>
</template>