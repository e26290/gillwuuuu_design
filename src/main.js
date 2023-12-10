import { createApp } from 'vue';
import './css/base.css';
import './css/color.css'
import App from './App.vue';
import router from './router';

createApp(App).use(router).mount('#app');
