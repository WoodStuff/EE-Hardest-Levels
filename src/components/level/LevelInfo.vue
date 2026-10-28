<script setup lang="ts">
import type { Level } from '@/types/Level';
import LevelBanner from './LevelBanner.vue';
import TitleRow from './TitleRow.vue';
import TagList from './tags/TagList.vue';
import DetailPanels from './details/DetailPanels.vue';

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
			<DetailPanels :level />
		</div>
	</div>
</template>

<style lang="scss" scoped>
.level-info {
	position: relative;

	width: 100%;
	margin: auto;
	padding-bottom: 32px;

	border: solid 2px var(--panel-border-color);
	border-radius: 6px;
	box-shadow: 0 0 16px black;
	background-color: var(--panel-color);

	overflow: hidden;

	& > .content {
		padding: 0 40px;

		display: flex;
		flex-direction: column;
		gap: 16px;
	}
}
</style>