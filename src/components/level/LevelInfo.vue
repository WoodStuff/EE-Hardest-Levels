<script setup lang="ts">
import type { Level } from '@/types/Level';
import LevelBanner from './LevelBanner.vue';
import ClearVideo from './ClearVideo.vue';
import TitleAuthor from './TitleAuthor.vue';

const { level } = defineProps<{
	level: Level,
}>();
</script>

<template>
	<div class="level-info">
		<LevelBanner :level />
		<TitleAuthor :level />
		<ClearVideo :video="level.video" />
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