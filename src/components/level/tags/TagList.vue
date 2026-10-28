<script setup lang="ts">
import type { Tag } from '@/data/tags';
import TagChip from './TagChip.vue';

const { tags } = defineProps<{
	tags: Tag[],
}>();
</script>

<template>
	<div class="tag-list">
		<TagChip
			v-for="tag in tags"
			:tag
		/>
	</div>
</template>

<style lang="scss" scoped>
.tag-list {
	display: flex;
	gap: 8px;

	margin-bottom: 16px;
}
</style>