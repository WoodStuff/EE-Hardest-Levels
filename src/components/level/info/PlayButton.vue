<script setup lang="ts">
import { PlayIcon } from '@lucide/vue'; 

const { id } = defineProps<{
	id: string,
}>(); 
</script>

<template>
	<a
		class="play-button"
		:href="`https://pixelwalker.net/world/${id}`"
		target="_blank"
		rel="noopener noreferrer"
		draggable="false"
	>
		<PlayIcon fill="#ffffffe6" stroke-width="0" />
		Play in PixelWalker
	</a>
</template>

<style lang="scss" scoped>
@use "../../../styles/_mixins.scss";

.play-button {
	@include mixins.panel;
	@include mixins.hover;

	width: 100%;
	height: 50px;
	user-select: none;

	display: flex;
	align-items: center;
	justify-content: center;
	gap: 8px;
	
	border-color: var(--button-border-color);
	background-color: var(--button-color);
	border-radius: 10px;

	font-size: 1.25em;
	font-weight: bold;
	text-decoration: none;
}
</style>