import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ServicoView from '../views/ServicoView.vue';
import AreaView from '@/views/AreaView.vue';
import DataView from '@/views/DataView.vue';
import InfoView from '@/views/InfoView.vue';
import TelaInicialView from '@/views/TelaInicialView.vue';
import AfiliarView from '@/views/AfiliarView.vue';
import SolicitacaoPrestadorView from '@/views/SolicitacaoPrestadorView.vue';
import AutenticarView from '@/views/AutenticarView.vue';
import HomePrestadorView from '@/views/HomePrestadorView.vue';
import TodoLogin from '@/components/TodoLogin.vue';
import TodoRegistrar from '@/components/TodoRegistrar.vue';



const routes = [

  {
    path: '/',
    name: 'telaInicial',
    component: TelaInicialView
  },

  {
    path: '/afiliar',
    name: 'afiliar',
    component: AfiliarView
  },

  {
    path: '/autenticar',
    name: 'autenticar',
    component: AutenticarView
  },

  {
    path: '/home',
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

  {
    path: '/solicitacaoPrestador', // Certifique-se de que a rota está correta
    name: 'solicitacaoPrestador',
    component: SolicitacaoPrestadorView
  },

  {
    path: '/login',
    name: 'TodoLogin',
    component: TodoLogin
  },

  {
    path: '/registrar',
    name: 'registrar',
    component: TodoRegistrar
  },

  {
    path: '/HomePrestador', // Define o parâmetro :id
    name: 'HomePrestador',
    component: HomePrestadorView,
    props: true // Permite que o parâmetro seja passado como propriedade
}

];


const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
