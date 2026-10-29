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
@use "@/styles/_mixins.scss";

.tag-chip {
	@include mixins.chip;

	font-size: 0.9em;
	padding: 4px 8px;
	border-radius: 100px;
}
</style>