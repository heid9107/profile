import { createRouter as _createRouter, createWebHistory } from 'vue-router'

import WelcomeView from '../views/WelcomeView.vue';
import AboutView from '../views/AboutView.vue';


const routes = [
    {
        path: '/',
        name: 'home',
        component: WelcomeView
    },
    {
        path: '/AboutView',
        name: 'About',
        component: AboutView
    },

]

export function createRouter() {
    return _createRouter({
        history: createWebHistory(),
        routes: routes
    })
}