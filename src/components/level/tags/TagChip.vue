<script setup lang="ts">
import type { Tag } from '@/data/tags';

const { tag } = defineProps<{
	tag: Tag,
}>();
</script>

<template>
	<div class="tag-chip">
		{{ tag }}
	</div>
</template>

<style lang="scss" scoped>
.tag-chip {
	font-size: 0.9em;
	padding: 4px 8px;
	
	border: solid 2px var(--border-color);
	border-radius: 100px;
	box-shadow: 0 2px 8px black;
	background-color: var(--panel-double-color);
}
</style>