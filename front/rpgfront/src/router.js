import { createRouter, createMemoryHistory } from 'vue-router'

import Home from './pages/Home.vue'
import Login from './pages/Login.vue'
import Register from './pages/Register.vue'
import Ficha from './pages/Ficha.vue'
import Campaign from './pages/Campaign.vue'
import Characters from "./pages/Characters.vue";
import Guide from "./pages/Guide.vue";

const routes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/guide', component: Guide },
    { path: '/ficha', component: Ficha },
    { path: '/campaign', component: Campaign},
    { path: '/characters', component: Characters},
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router
