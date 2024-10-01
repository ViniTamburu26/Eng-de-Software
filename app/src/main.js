import { createApp } from 'vue';
import App from './App.vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import router from './router'
import { faBroom } from '@fortawesome/free-solid-svg-icons';

// Adiciona o ícone ao repositório de ícones
library.add(faLocationDot);
library.add(faCalendar);
library.add(faBroom);

// Cria a instância Vue
const app = createApp(App).use(router);

// Registra o componente globalmente
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');
