<script setup lang="ts">
import Clear from './Clear.vue';
import TooManyClears from './TooManyClears.vue';

const { clears } = defineProps<{
	clears: string[] | 'too many to count',
}>();
</script>

<template>
	<div class="level-clears">
		<h1 class="header">Clears</h1>
		<TooManyClears v-if="clears === 'too many to count'" />
		<div
			v-else
			class="clear-container"
		>
			<Clear
				v-for="clear in clears"
				:player="clear"
			/>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@use "../../../styles/_mixins.scss";

.level-clears {
	@include mixins.big-panel;

	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;

	padding: 20px 40px;

	& > .header {
		font-size: 2.5em;
		font-weight: 600;
		text-align: center;
	}

	& > .clear-container {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		gap: 12px;
	}
}
</style>