<script setup lang="ts">
const { video } = defineProps<{
	video: string,
}>();
</script>

<template>
	<iframe
		class="clear-video"
		:src="`https://www.youtube.com/embed/${video}`"
		title="Everybody Edits: A Real Trisaster (TOP 1)"
		frameborder="0"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
		referrerpolicy="strict-origin-when-cross-origin"
		allowfullscreen
	></iframe>
</template>

<style lang="scss" scoped>
.clear-video {
	width: 100%;
	aspect-ratio: 16/9;
}
</style>