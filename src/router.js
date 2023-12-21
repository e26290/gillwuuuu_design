import { createRouter, createWebHistory } from 'vue-router';
import index from './components/index.vue';
import work from './components/work.vue';

const routes = [
    { path: '/', component: index },
    { path: '/work', component: work }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;