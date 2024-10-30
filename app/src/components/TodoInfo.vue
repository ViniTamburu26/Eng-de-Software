<template>
  <div class="main_content">
    <TodoAgenda />

  <div class="title">
    <h2>Informações</h2>
  </div>

  <div class="info-container">
    <div class="service-box">
      <h3>{{ serviceTitle }}</h3>
      <div class="icons">
        <font-awesome-icon icon="fa-solid fa-soap" />
        <font-awesome-icon icon="fa-solid fa-broom" />
      </div>
      <ul>
        <li>Área: <strong>{{ area }} m²</strong></li>
        <li>Data: <strong>{{ formattedDate }}</strong></li>
        <li>Preço: <strong>R$ {{ valor.toFixed(2) }}</strong></li>
      </ul>
      <div class="price">
        <p>R$ {{ valor.toFixed(2) }}</p>
      </div>
      <div class="confirm-button">
        <button v-if="!loading" @click="confirmService">Confirmar</button>
        <div v-else class="loading-indicator">
          <font-awesome-icon icon="fa-solid fa-spinner" spin />
        </div>
      </div>
      <div v-if="loading" class="loading-message">
        <p>Esperando confirmação de serviço...</p>
      </div>
    </div>
  </div>

  <div class="navigation-buttons" v-if="!serviceConfirmed">
    <router-link to="/servico" class="button-left">
      <button class="button-left">Voltar</button>
    </router-link>
  </div>
  </div>
  
</template>

<script>
import TodoAgenda from './TodoAgenda.vue';

export default {
  components: {
    TodoAgenda
  },
  data() {
    return {
      loading: false,
      serviceConfirmed: false,
      area: parseFloat(this.$route.query.area) || 0, // Recebe a área da query
      data: this.$route.query.data || 'Não disponível', // Recebe a data da query
      valor: parseFloat(this.$route.query.valor) || 0, // Recebe o valor da query
      tipoLimpeza: this.$route.query.tipoLimpeza || '1' // Recebe o tipo de limpeza da query
    };
  },
  computed: {
    serviceTitle() {
      switch (this.tipoLimpeza) {
        case '1':
          return 'Limpeza Padrão';
        case '2':
          return 'Limpeza Pesada';
        case '3':
          return 'Limpeza Pós-Aluguel';
        case '4':
          return 'Limpeza Pós-Reforma';
        default:
          return 'Limpeza Padrão'; // Título padrão
      }
    },

    formattedDate() {
      const date = this.$route.query.data; // Pega a data da query
      if (date) {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        // Cria uma nova data e formata no padrão desejado
        const formatted = new Date(date).toLocaleDateString('pt-BR', options);
        return formatted; // Retorna a data formatada
      }
      return ''; // Retorna uma string vazia se não houver data
    }

  },



  methods: {
    confirmService() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.serviceConfirmed = true;
        alert('Serviço confirmado com sucesso!');

        this.$router.push({ name: 'home' }); // Substitua 'home' pelo nome da sua rota inicial
      }, 3000);
    }
  }
};
</script>

<style>
/* Container principal */
.info-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

/* Estilo do quadrado */
.service-box {
  width: 400px;
  height: 400px;
  background-color: #d9d9d9;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  font-family: Arial, sans-serif;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  /* Sombra suave */
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* Centraliza o conteúdo verticalmente */
  align-items: center;
  /* Centraliza o conteúdo horizontalmente */
}

.service-box h3 {
  margin-bottom: 15px;
  font-weight: bold;
  color: black;
}

/* Estilo para os ícones */
.icons {
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
}

.icons font-awesome-icon {
  margin: 0 10px;
  font-size: 24px;
  /* Aumentar o tamanho dos ícones */
}

/* Lista para exibir Área e Data */
ul {
  list-style-type: none;
  padding: 0;
  margin: 10px 0;
  font-size: 18px;
  color: black;
}

ul li {
  margin-bottom: 10px;
}

/* Estilo para o preço */
.price {
  font-weight: bold;
  font-size: 20px;
  margin-top: 20px;
  color: black;
}

/* Estilo do botão Confirmar */
.confirm-button {
  margin-top: 20px;
}

.confirm-button button {
  background-color: #4CAF50;
  /* Cor do botão */
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

/* Estilo da mensagem de carregamento */
.loading-message {
  margin-top: 20px;
  font-size: 18px;
  color: black;
}

/* Estilo do indicador de carregamento */
.loading-indicator {
  margin-top: 20px;
  font-size: 24px;
  /* Tamanho do ícone de carregamento */
}

@media (max-width: 768px) {

.recArea,
.recValor {
  width: 90%;
  padding: 15px;
}

.navigation-buttons {
  flex-direction: column;
  align-items: center;
}

.button-left,
.button-right {
  width: 100%;
  margin-bottom: 10px;
}
}


@media (max-width: 480px) {

.recArea,
.recValor {
  width: 100%;
  padding: 10px;
}

.input-area {
  width: 100%;
  font-size: 14px;
}

.button-left,
.button-right {
  font-size: 16px;
}

.title {
  font-size: 18px;
}
}

</style>