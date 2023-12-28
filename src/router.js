import { createRouter, createWebHistory } from 'vue-router';
import index from './components/index.vue';
import work from './components/work.vue';
import contact from './components/contact.vue';
import ramblings from './components/ramblings.vue';


const routes = [
    { path: '/', component: index },
    { path: '/work', component: work },
    { path: '/contact', component: contact },
    { path: '/ramblings', component: ramblings },
];

const router = createRouter({
    history: createWebHistory(),
    routes,

    // 添加 scrollBehavior
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { top: 0 };
        }
    }
});

export default router;