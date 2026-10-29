import type { RouteRecordRaw } from "vue-router";
import MainPage from '@/components/MainPage.vue';
import LevelPage from '@/components/LevelPage.vue';

export const routes: RouteRecordRaw[] = [
	{ path: '/', component: MainPage, },
	{ path: '/level/:placement', component: LevelPage, props: true },
];