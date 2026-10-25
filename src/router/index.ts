import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '@/components/MainPage.vue';
import LevelPage from '@/components/LevelPage.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{ path: '/', component: MainPage, },
		{ path: '/level/:id', component: LevelPage, },
	],
});

export default router;
