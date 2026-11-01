<script setup lang="ts">
import type { Level } from '@/types/Level';
import { computed } from 'vue';

const { level } = defineProps<{
	level: Level,
}>();

const filename = computed(() => level.title.replaceAll(':', ''));
</script>

<template>
	<img
		class="banner"
		:src="`/EE-Hardest-Levels/banners/${filename}.png`"
		draggable="false"
	>
</template>

<style lang="scss" scoped>
.banner {
	height: 128px;
	mask: linear-gradient(black 50%, transparent 100%);
	image-rendering: pixelated;

	user-select: none;
}
</style>