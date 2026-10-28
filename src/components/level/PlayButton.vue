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
.play-button {
	width: 100%;
	height: 50px;

	display: flex;
	align-items: center;
	justify-content: center;
	gap: 8px;
	
	border: solid 2px var(--button-border-color);
	border-radius: 10px;
	box-shadow: 0 2px 8px black;
	background-color: var(--button-color);

	font-size: 1.25em;
	font-weight: bold;

	text-decoration: none;
	user-select: none;

	&:hover {
		filter: brightness(110%);
	}
	&:active {
		filter: brightness(90%);
	}
}
</style>