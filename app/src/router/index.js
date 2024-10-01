import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ServicoView from '../views/ServicoView.vue';
import AreaView from '@/views/AreaView.vue';
import DataView from '@/views/DataView.vue';
import InfoView from '@/views/InfoView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/servico', // Certifique-se de que a rota está correta
    name: 'servico',
    component: ServicoView
  },
  {
    path: '/area', // Certifique-se de que a rota está correta
    name: 'area',
    component: AreaView
  },

  {
    path: '/data', // Certifique-se de que a rota está correta
    name: 'data',
    component: DataView
  },

  {
    path: '/info', // Certifique-se de que a rota está correta
    name: 'info',
    component: InfoView
  },

];


const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
