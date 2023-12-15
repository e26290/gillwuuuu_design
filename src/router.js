import { createRouter, createWebHistory } from 'vue-router';
import index from './components/index.vue';
import Page2 from './components/page2.vue';

const routes = [
    { path: '/', component: index },
    { path: '/page2', component: Page2 }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;