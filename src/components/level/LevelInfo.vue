<script setup lang="ts">
import type { Level } from '@/types/Level';
import LevelBanner from './LevelBanner.vue';
import TitleRow from './TitleRow.vue';

const { level, placement } = defineProps<{
	level: Level,
	placement: number,
}>();
</script>

<template>
	<div class="level-info">
		<LevelBanner :level />
		<TitleRow :level :placement />
	</div>
</template>

<style lang="scss" scoped>
.level-info {
	width: 800px;
	margin: auto;

	border: solid 2px var(--border-color);
	border-radius: 6px;
	box-shadow: 0 0 16px black;
	background-color: var(--panel-color);

	overflow: hidden;
}
</style>