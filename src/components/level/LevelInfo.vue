<script setup lang="ts">
import type { Level } from '@/types/Level';

const { level } = defineProps<{
	level: Level,
}>();
</script>

<template>
	<div class="level-info">
		<h1>{{ level.title }}</h1>
	</div>
</template>