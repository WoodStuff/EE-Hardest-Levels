<script setup lang="ts">
import { LEVELS } from '@/data/levels.ts';
import LevelCard from './LevelCard.vue';
import { PLACEMENTS } from '@/data/placements.ts';

const levels = PLACEMENTS.map(name => LEVELS[name]);
</script>

<template>
	<div class="level-list">
		<LevelCard
			v-for="level, i in levels"
			:level
			:placement="i + 1"
		/>
	</div>
</template>

<style lang="scss" scoped>
.level-list {
	width: var(--content-width);
	margin: auto;

	display: flex;
	flex-direction: column;
	gap: 18px;
}
</style>