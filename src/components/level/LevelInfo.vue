<script setup lang="ts">
import type { Level } from '@/types/Level';
import LevelBanner from './LevelBanner.vue';
import ClearVideo from './ClearVideo.vue';

const { level } = defineProps<{
	level: Level,
}>();
</script>

<template>
	<div class="level-info">
		<LevelBanner :level />
		<h1 class="title">{{ level.title }}</h1>
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
	
	& > .title {
		font-size: 2.5em;
		font-weight: 600;
		text-align: center;
	}
}
</style>