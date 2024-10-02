<template>
    <header class="flex">
      <div class="header_content">
        <router-link to="/home">
          <img class="logo" src="@/assets/logo.png" alt="Logo CleanUP">
        </router-link>
      </div>
      <div class="header-right">
        <button @click="toggleSidebar" class="sidebar-toggle">
          {{ isSidebarActive ? '✖' : '☰' }} <!-- Mudança de ícone -->
        </button>
      </div>
    </header>
  
    <!-- Barra lateral -->
    <div class="sidebar" :class="{ open: isSidebarActive }" id="sidebar">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#services">Serviços</a></li>
        <li><a href="#about">Sobre</a></li>
        <li><a href="#contact">Contato</a></li>
      </ul>
    </div>
  
    <!-- Seção de solicitações com ícone de calendário -->
    <div class="solicitacoes-container">
      <div class="solicitacoes-content">
        <font-awesome-icon icon="calendar" class="calendar-icon" />
        <h2 class="solicitacoes-title">Solicitações</h2>
      </div>
    </div>
  
    <!-- Quadrado com informações -->
    <div class="info-box" v-if="currentRequest">
      <h3 class="info-title">{{ currentRequest.cleaningType }}</h3>
      <div class="info-details">
        <p><strong>Área:</strong> {{ currentRequest.area }}</p>
        <p><strong>Data:</strong> {{ currentRequest.date }}</p>
        <p><strong>Valor:</strong> {{ currentRequest.value }}</p>
      </div>
      <div class="button-group">
        <button @click="acceptRequest(currentRequest.id)" class="accept-button">Aceitar</button>
        <button @click="declineRequest(currentRequest.id)" class="decline-button">Recusar</button>
      </div>
    </div>
  
    <!-- Lista de solicitações pendentes -->
    <div class="requests-list">
      <h3>Solicitações Pendentes</h3>
      <ul>
        <li v-for="request in requests" :key="request.id" @click="selectRequest(request)">
          {{ request.cleaningType }} - {{ request.date }} - {{ request.value }}
        </li>
      </ul>
    </div>
  
    <!-- Lista de solicitações aceitas -->
    <div class="accepted-requests-section" v-if="acceptedRequests.length > 0">
      <h3>Solicitações Aceitas</h3>
      <div class="accepted-requests-list">
        <ul>
          <li 
            v-for="request in acceptedRequests" 
            :key="request.id" 
            class="accepted-request-item"
          >
            <div class="request-content">
              <span class="request-type">{{ request.cleaningType }}</span>
              <span class="request-date">{{ request.date }}</span>
              <span class="request-value">{{ request.value }}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isSidebarActive: false,
        requests: [], // Array de solicitações
        acceptedRequests: [], // Array de solicitações aceitas
        currentRequest: null, // Solicitação atual
      };
    },
    methods: {
      toggleSidebar() {
        this.isSidebarActive = !this.isSidebarActive;
      },
      fetchCleaningData() {
        const mockData = [
          { id: 1, cleaningType: 'Limpeza Pos Reforma', area: '100 m²', date: '10/10/2024', value: 'R$ 150,00' },
          { id: 2, cleaningType: 'Limpeza Comercial', area: '200 m²', date: '12/10/2024', value: 'R$ 300,00' },
          { id: 3, cleaningType: 'Limpeza Pesada', area: '150 m²', date: '15/10/2024', value: 'R$ 450,00' },
          { id: 4, cleaningType: 'Limpeza Padrão', area: '50 m²', date: '17/10/2024', value: 'R$ 200,00' },
          { id: 5, cleaningType: 'Limpeza Pos Aluguel', area: '300 m²', date: '20/10/2024', value: 'R$ 350,00' },
          { id: 6, cleaningType: 'Limpeza Pesada', area: '400 m²', date: '22/10/2024', value: 'R$ 600,00' },
        ];
  
        this.requests = mockData; // Atualiza o array de solicitações
        this.currentRequest = this.requests[0]; // Seleciona a primeira solicitação como atual
      },
      selectRequest(request) {
        this.currentRequest = request; // Atualiza a solicitação atual ao clicar
      },
      acceptRequest(requestId) {
        const acceptedRequest = this.requests.find(request => request.id === requestId);
        if (acceptedRequest) {
          this.acceptedRequests.push(acceptedRequest); // Adiciona à lista de solicitações aceitas
          this.requests = this.requests.filter(request => request.id !== requestId); // Remove da lista de pendentes
          this.currentRequest = this.requests[0] || null; // Atualiza a solicitação atual
          alert(`Solicitação ${requestId} aceita!`); // Ação ao aceitar
        }
      },
      declineRequest(requestId) {
        this.requests = this.requests.filter(request => request.id !== requestId); // Remove a solicitação recusada
        this.currentRequest = this.requests[0] || null; // Atualiza a solicitação atual
      },
    },
    created() {
      this.fetchCleaningData(); // Chama a função ao criar o componente
    },
  }
  </script>
  
  <style>
  .header_content {
    display: flex; /* Ativa o Flexbox */
    align-items: center; /* Alinha verticalmente */
  }
  
  .logo {
    width: 220px;
    height: auto; /* Manter proporção */
  }
  
  /* Estilo da barra lateral */
  .sidebar {
    display: none; /* Oculta por padrão */
  }
  
  .sidebar.open {
    display: block; /* Exibe quando ativa */
  }
  
  /* Estilo da seção de solicitações */
  .solicitacoes-container {
    padding: 20px;
    margin-top: 90px;
    display: flex; /* Ativa o Flexbox para centralizar o conteúdo */
    justify-content: center; /* Centraliza horizontalmente */
    align-items: center; /* Centraliza verticalmente */
  }
  
  .solicitacoes-content {
    display: flex; /* Ativa o Flexbox para alinhar ícone e título */
    align-items: center; /* Centraliza verticalmente */
  }
  
  .solicitacoes-title {
    font-size: 24px; /* Tamanho do texto */
    color: #000000; /* Cor do texto */
    margin-left: 10px; /* Espaço à esquerda do título */
  }
  
  /* Estilo do ícone de calendário */
  .calendar-icon {
    width: 30px; /* Ajuste o tamanho conforme necessário */
    height: auto; /* Manter proporção */
  }
  
  /* Estilo do quadrado com informações */
  .info-box {
    background-color: #f9f9f9; /* Cor de fundo do quadrado */
    border: 1px solid #372D90; /* Borda do quadrado */
    border-radius: 8px; /* Cantos arredondados */
    padding: 30px; /* Aumenta o espaço interno */
    margin: 20px auto; /* Margem externa */
    width: 300px; /* Largura do quadrado */
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Sombra */
    display: flex;
    flex-direction: column; /* Alinha os elementos verticalmente */
    align-items: center; /* Centraliza o conteúdo horizontalmente */
  }
  
  /* Título da informação */
  .info-title {
    font-size: 24px; /* Tamanho do título */
    color: #000000; /* Cor do título */
    margin-bottom: 20px; /* Espaço abaixo do título */
  }
  
  /* Detalhes das informações */
  .info-details {
    align-self: flex-start; /* Alinha à esquerda */
    text-align: left; /* Alinha o texto à esquerda */
  }
  
  .info-details p {
    margin: 5px 0; /* Margem entre as linhas */
  }
  
  /* Estilo do grupo de botões */
  .button-group {
    display: flex; /* Ativa o Flexbox para alinhar os botões */
    justify-content: space-between; /* Espaçamento entre os botões */
    margin-top: 20px; /* Espaço acima dos botões */
    width: 100%; /* Para ocupar toda a largura do quadrado */
  }
  
  /* Estilo dos botões */
  .accept-button,
  .decline-button {
    padding: 10px 15px; /* Espaço interno dos botões */
    border: none; /* Sem borda */
    border-radius: 4px; /* Cantos arredondados */
    cursor: pointer; /* Muda o cursor ao passar o mouse */
  }
  
  .accept-button {
    background-color: #372D90; /* Cor de fundo do botão aceitar */
    color: #ffffff; /* Cor do texto do botão aceitar */
  }
  
  .decline-button {
    background-color: #ff4d4d; /* Cor de fundo do botão recusar */
    color: #ffffff; /* Cor do texto do botão recusar */
  }
  
  /* Estilo da lista de solicitações */
  .requests-list {
    margin: 20px; /* Margem da lista */
  }
  
  .requests-list h3 {
    font-size: 20px; /* Tamanho do título */
  }
  
  .requests-list ul {
    list-style: none; /* Remove marcadores */
    padding: 0; /* Remove padding */
  }
  
  .requests-list li {
    padding: 10px; /* Espaço interno entre os itens */
    border: 1px solid #ddd; /* Borda dos itens */
    margin-bottom: 10px; /* Espaço abaixo de cada item */
    cursor: pointer; /* Muda o cursor ao passar o mouse */
  }
  
  /* Estilo da lista de solicitações aceitas */
  .accepted-requests-section {
    margin: 20px; /* Margem da seção de solicitações aceitas */
  }
  
  .accepted-requests-section h3 {
    font-size: 20px; /* Tamanho do título */
  }
  
  .accepted-requests-list {
    margin-top: 10px; /* Espaço acima da lista */
  }
  
  .accepted-requests-list ul {
    list-style: none; /* Remove marcadores */
    padding: 0; /* Remove padding */
  }
  
  .accepted-request-item {
    padding: 10px; /* Espaço interno entre os itens */
    border: 1px solid #ddd; /* Borda dos itens */
    margin-bottom: 10px; /* Espaço abaixo de cada item */
  }
  
  /* Estilo do conteúdo da solicitação aceita */
  .request-content {
    display: flex; /* Utiliza flexbox para alinhar os itens na linha */
    gap: 10px; /* Espaço entre os elementos filhos */
  }
  
  .request-type, .request-date, .request-value {
    letter-spacing: 1px; /* Ajusta o espaçamento entre letras */
  }

  @media (max-width: 768px) {
  .header_content {
    justify-content: space-between;
  }

  .logo {
    width: 150px; 
  }

  .sidebar {
    width: 100%;
  }

  .solicitacoes-container {
    flex-direction: column;
    margin-top: 60px; 
  }

  .info-box {
    width: 90%; 
  }

  .button-group {
    flex-direction: column; 
    align-items: stretch; 
    gap: 10px; 
  }

  .requests-list ul, 
  .accepted-requests-list ul {
    padding: 0;
  }

  .requests-list li, 
  .accepted-request-item {
    padding: 8px; 
  }

  .request-content {
    flex-direction: column;
    gap: 5px;
  }
}

@media (min-width: 769px) {
  .header_content {
    justify-content: flex-start;
  }

  .logo {
    width: 220px;
  }

  .solicitacoes-container {
    flex-direction: row; 
  }

  .info-box {
    width: 300px;
  }

  .button-group {
    flex-direction: row;
  }

  .requests-list ul, 
  .accepted-requests-list ul {
    padding: 0;
  }

  .requests-list li, 
  .accepted-request-item {
    padding: 10px;
  }

  .request-content {
    flex-direction: row; 
  }
}
  </style>
  