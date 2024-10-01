<template>
    <TodoAgenda />
  
    <div class="title">
      <h2>Informações</h2>
    </div>
  
    <div class="info-container">
      <div class="service-box">
        <h3>Limpeza Pesada</h3>
        <!-- Ícones -->
        <div class="icons">
          <font-awesome-icon icon="fa-solid fa-soap" /> <!-- Ícone de balde com sabão -->
          <font-awesome-icon icon="fa-solid fa-broom" /> <!-- Ícone de vassoura -->
        </div>
        <ul>
          <li>Área: <strong>30m²</strong></li>
          <li>Data: <strong>28/05/2024</strong></li>
        </ul>
        <div class="price">
          <p>R$ 150,00</p> <!-- Preço ajustado -->
        </div>
        <!-- Botão de Confirmar -->
        <div class="confirm-button">
          <button v-if="!loading" @click="confirmService">Confirmar</button>
          <div v-else class="loading-indicator">
            <font-awesome-icon icon="fa-solid fa-spinner" spin />
          </div>
        </div>
  
        <!-- Mensagem de carregamento -->
        <div v-if="loading" class="loading-message">
          <p>Esperando confirmação de serviço...</p>
        </div>
      </div>
    </div>

    <div class="navigation-buttons">
        <router-link to="/Data" class="button-left">
            <button class="button-left">Voltar</button>
        </router-link>
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
        loading: false // Estado de carregamento
      };
    },
    methods: {
      confirmService() {
        this.loading = true; // Ativa o estado de carregamento
        // Simular um delay, como se estivesse esperando uma confirmação
        setTimeout(() => {
          this.loading = false; // Desativa o carregamento após 3 segundos
          // Aqui você pode adicionar a lógica que deve ocorrer após a confirmação, se necessário
        }, 6000000000); // Tempo em milissegundos
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
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* Sombra suave */
    display: flex;
    flex-direction: column;
    justify-content: center; /* Centraliza o conteúdo verticalmente */
    align-items: center; /* Centraliza o conteúdo horizontalmente */
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
    font-size: 24px; /* Aumentar o tamanho dos ícones */
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
    background-color: #4CAF50; /* Cor do botão */
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
    font-size: 24px; /* Tamanho do ícone de carregamento */
  }
  </style>
  