import {createRouter, createWebHistory} from 'vue-router'
import Profile from "@/views/Profile";
import ManagerPanel from "@/views/ManagerPanel";
import Services from "@/views/Services";
import Home from "@/views/Home";
import About from "@/views/About";
import Settings from "@/views/Settings";

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/profile',
        name: 'profile',
        component: Profile
    },
    {
        path: '/manager',
        name: 'manager__panel',
        component: ManagerPanel
    },
    {
        path: '/services',
        name: 'services',
        component: Services
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
    {
        path: '/settings',
        name: 'settings',
        component: Settings
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
