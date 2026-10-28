<script setup lang="ts">
const { video } = defineProps<{
	video: string,
}>();
</script>

<template>
	<div class="clear-video">
		<iframe
			class="frame"
			:src="`https://www.youtube.com/embed/${video}`"
			title="Everybody Edits: A Real Trisaster (TOP 1)"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			referrerpolicy="strict-origin-when-cross-origin"
			allowfullscreen
		></iframe>
	</div>
</template>

<style lang="scss" scoped>
.clear-video {
	width: 100%;
	aspect-ratio: 16/9;
	
	border: solid 2px var(--panel-border-color);
	border-radius: 6px;
	box-shadow: 0 0 16px black;
	background-color: var(--panel-color);

	overflow: hidden;

	.frame {
		width: calc(100% + 4px);
		aspect-ratio: 16/9;
		transform: translate(-2px, -2px);
	}
}
</style>