<script setup lang="ts">
import { LEVELS } from '@/data/levels';
import LevelInfo from './level/LevelInfo.vue';
import { computed } from 'vue';

const { id } = defineProps<{
	id: number,
}>();

const level = computed(() => LEVELS[id - 1]);
</script>

<template>
	<LevelInfo v-if="level" :level />
</template>