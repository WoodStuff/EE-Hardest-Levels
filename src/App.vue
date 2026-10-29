<script setup lang="ts">
import { RouterView } from 'vue-router';
import Topbar from './components/Topbar.vue';
</script>

<template>
	<Topbar />
	<RouterView class="body" />
</template>

<style lang="scss" scoped>
.body {
	margin-top: calc(var(--topbar-height) + var(--topbar-body-spacing)) !important;
}
</style>