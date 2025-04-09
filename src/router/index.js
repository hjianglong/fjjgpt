import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'About',
        component: AboutView
    }
];

// 硬编码 BASE_URL
const baseUrl = '/';
const router = createRouter({
    history: createWebHistory(baseUrl),
    routes
});

export default router;