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
@use "../../../styles/_mixins.scss";

.panel {
	@include mixins.chip;

	width: 100%;
	height: 100px;

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