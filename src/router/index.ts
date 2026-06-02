import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import AtendimentosPage from '../pages/AtendimentosPage.vue'
import NovoAtendimentoPage from '../pages/NovoAtendimentoPage.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/atendimentos',
    name: 'atendimentos',
    component: AtendimentosPage,
  },
  {
    path: '/atendimentos/novo',
    name: 'novo-atendimento',
    component: NovoAtendimentoPage,
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
