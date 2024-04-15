import inicio from "../components/inicio.vue";
import juego from "../components/juego.vue";
import card from "../components/card.vue";
import {createRouter, createWebHashHistory} from 'vue-router'

const routes = [
    { path: '/', component: inicio },
    { path: '/juego', component: juego },
    { path: '/card', component: card }
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes
})