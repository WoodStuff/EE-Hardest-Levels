<script setup lang="ts">
import type { Level } from '@/types/Level';
import LevelBanner from './LevelBanner.vue';
import TitleRow from './TitleRow.vue';
import TagList from './tags/TagList.vue';

const { level, placement } = defineProps<{
	level: Level,
	placement: number,
}>();
</script>

<template>
	<div class="level-info">
		<LevelBanner :level />
		<div class="content">
			<TitleRow :level :placement />
			<TagList :tags="level.tags" />
		</div>
	</div>
</template>

<style lang="scss" scoped>
.level-info {
	position: relative;

	width: 800px;
	margin: auto;
	padding-bottom: 32px;

	border: solid 2px var(--panel-border-color);
	border-radius: 6px;
	box-shadow: 0 0 16px black;
	background-color: var(--panel-color);

	overflow: hidden;

	& > .content {
		padding: 0 40px;
	}
}
</style>