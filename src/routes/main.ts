import { createRouter, createWebHashHistory } from 'vue-router'
import About from '../pages/about/index.vue';
import Home from '../pages/home/index.vue';

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/about',
            name: 'about',
            component: About,
        }
    ]
})