<script setup lang="ts">
const { description, value } = defineProps<{
	description: string,
	value: any,
}>();
</script>

<template>
	<div class="panel">
		<p class="value">{{ value }}</p>
		<p class="description">{{ description }}</p>
	</div>
</template>

<style lang="scss" scoped>
.panel {
	width: 100%;
	height: 100px;
	
	border: solid 2px var(--chip-border-color);
	border-radius: 6px;
	box-shadow: 0 2px 8px black;
	background-color: var(--chip-color);

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	& > .value {
		font-size: 2em;
		font-weight: bold;
	}
}
</style>