<script setup lang="ts">
import type { Level } from '@/types/Level';
import Stars from '../misc/Stars.vue';
import { computed } from 'vue';

const { level } = defineProps<{
	level: Level,
}>();

const clearsText = computed(() => {
	const amount = level.clears.length;
	return `${amount} clear${amount === 1 ? '' : 's'}`
});
const minigamesText = computed(() => {
	const amount = level.minigames;
	return `${amount} minigame${amount === 1 ? '' : 's'}`
});
</script>

<template>
	<div class="info">
		<Stars class="stars" :amount="level.stars" />
		<p>{{ clearsText }}</p>
		<p>{{ minigamesText }}</p>
	</div>
</template>

<style lang="scss" scoped>
.info {
	position: absolute;
	top: 12px;
	right: 12px;
	text-shadow: black 0 0 10px;

	display: flex;
	flex-direction: column;
	align-items: end;

	& > .stars {
		font-size: 1.33em;
		font-weight: bold;
	}
}
</style>