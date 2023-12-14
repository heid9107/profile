import { createRouter as _createRouter, createWebHistory } from 'vue-router'
import WelcomeView from '../views/WelcomeView.vue'
import AboutView from '../views/AboutView.vue'
import EducationView from '../views/EducationView.vue'
import HobbiesView from '../views/HobbiesView.vue'
import WorkView from '../views/EmploymentHistory.vue'
import PortfolioView from '../views/PortfolioView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: WelcomeView
    },
    {
        path: '/About',
        name: 'about',
        component: AboutView
    },
    {
        path: '/Education',
        name: 'education',
        component: EducationView
    },
    {
        path: '/Hobbies',
        name: 'hobbies',
        component: HobbiesView
    },
    {
        path: '/EmploymentHistory',
        name: 'work',
        component: WorkView
    },
    {
        path: '/Portfolio',
        name: 'portfolio',
        component: PortfolioView
    }


]

export function createRouter() {
    return _createRouter({
        history: createWebHistory(),
        routes: routes
    })
}