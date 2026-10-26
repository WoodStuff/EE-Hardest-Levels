<script setup lang="ts">
import type { Level } from '@/types/Level';

const { level } = defineProps<{
	level: Level,
}>();
</script>

<template>
	<div class="title-author">
		<h1 class="title">{{ level.title }}</h1>
		<p class="author">by {{ level.author }}</p>
	</div>
</template>

<style lang="scss" scoped>
.title-author {
	margin-top: 20px;
	margin-bottom: 40px;

	& > .title {
		font-size: 2.5em;
		font-weight: 600;
		text-align: center;
	}

	& > .author {
		text-align: center;
	}
}
</style>