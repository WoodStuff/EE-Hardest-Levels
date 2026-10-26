<script setup lang="ts">
import { LEVELS } from '@/data/levels';
import LevelInfo from './level/LevelInfo.vue';
import { computed } from 'vue';

const { placement } = defineProps<{
	placement: number,
}>();

const level = computed(() => LEVELS[placement - 1]);
</script>

<template>
	<LevelInfo v-if="level" :level :placement />
</template>