import { createRouter, createMemoryHistory } from 'vue-router'

import Home from './pages/Home.vue'
import Login from './pages/Login.vue'
import Register from './pages/Register.vue'
import Ficha from './pages/Ficha.vue'
import Campaign from './pages/Campaign.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/ficha', component: Ficha },
    { path: '/campaign', component: Campaign},
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router
