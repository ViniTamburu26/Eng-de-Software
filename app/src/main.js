import { createApp } from 'vue';
import App from './CleanUp.vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faLocationDot, faCalendar, faBroom } from '@fortawesome/free-solid-svg-icons'; // Importando todos os ícones em uma única linha
import router from './router';

// Adiciona os ícones ao repositório de ícones
library.add(faLocationDot, faCalendar, faBroom);

// Cria a instância Vue
const app = createApp(App).use(router);

// Registra o componente FontAwesome globalmente
app.component('font-awesome-icon', FontAwesomeIcon);

// Monta a aplicação
app.mount('#CleanUp');
