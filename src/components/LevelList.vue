<script setup lang="ts">
import Level from './Level.vue';

</script>

<template>
	<div class="level-list">
		<Level
			v-for="n in [1, 2, 3]"
		/>
	</div>
</template>

<style lang="scss" scoped>
.level-list {
	width: 800px;
	margin: auto;

	display: flex;
	flex-direction: column;
	gap: 12px;
}
</style>