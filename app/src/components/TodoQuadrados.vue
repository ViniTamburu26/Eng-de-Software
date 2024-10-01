<template>
    
    <div id="main-content">

      <TodoAgenda/>

      <div class="section-title">
        <h2>Serviços</h2>
      </div>
      
      <div class="squares-container">
        <div class="service-item">
          <div class="square" :style="{ backgroundImage: 'url(' + require('@/assets/limpezaPadrao.jpg') + ')' }"></div>
          <p class="description">Limpeza Padrão</p>
        </div>
        
        <div class="service-item">
          <div class="square" :style="{ backgroundImage: 'url(' + require('@/assets/limpezaPesada.jpg') + ')' }"></div>
          <p class="description">Limpeza Pesada</p>
        </div>
        
        <div class="service-item">
          <div class="square" :style="{ backgroundImage: 'url(' + require('@/assets/limpezaPosAluguel.jpg') + ')' }"></div>
          <p class="description">Limpeza Pós Aluguel</p>
        </div>
        
        <div class="service-item">
          <div class="square" :style="{ backgroundImage: 'url(' + require('@/assets/limpezaPosReforma.jpg') + ')' }"></div>
          <p class="description">Limpeza Pós Reforma</p>
        </div>
      </div>

    </div>
</template>

<script>

import TodoAgenda from './TodoAgenda.vue';

export default {
  components: {
    TodoAgenda
  }

};
</script>

<style>


#main-content {
  margin-top: 20px; /* Distância do cabeçalho */
  padding: 20px; /* Espaçamento interno */
  background-color: #ffffff; /* Cor de fundo para o conteúdo */
  min-height: calc(100vh - 250px); /* Altura mínima para ocupar o restante da tela */
}

/* Novo estilo para o título da seção */
.section-title {
  margin-bottom: 20px; /* Espaçamento abaixo do título */
  margin-left: 100px;
  text-align: left;
  font-weight: bold; /* Adiciona negrito ao texto */
  color: #000000;
}

/* Estilo para o contêiner dos quadrados */
.squares-container {
  display: flex; /* Ativa o Flexbox para os quadrados */
  justify-content: space-between; /* Distribui espaço entre os quadrados */
  flex-wrap: wrap; /* Permite que os itens quebrem para a próxima linha se não houver espaço suficiente */
  width: 100%; /* Usa toda a largura disponível */
  padding: 30px;
}

/* Novo estilo para cada item de serviço */
.service-item {
  display: flex;
  flex-direction: column; /* Alinha os elementos verticalmente */
  align-items: center; /* Centraliza horizontalmente */
  width: calc(25% - 40px); /* Largura relativa com margem */
  margin: 10px; /* Margem entre os itens */
}

/* O estilo para os quadrados e descrições permanece o mesmo */
.square {
  width: 300px; /* Largura dos quadrados */
  height: 300px; /* Altura dos quadrados */
  background-color: #372D90; /* Cor de fundo dos quadrados */
  margin-bottom: 5px; /* Margem abaixo do quadrado para separar da descrição */
  display: flex; /* Ativa o Flexbox dentro do quadrado */
  justify-content: center; /* Centraliza o conteúdo horizontalmente */
  align-items: center; /* Centraliza o conteúdo verticalmente */
  color: white; /* Cor do texto dentro dos quadrados */
  border-radius: 8px; /* Bordas arredondadas, se desejado */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* Sombra opcional */
  background-size: cover; /* Faz a imagem ocupar todo o quadrado */
}

/* Estilo para as descrições abaixo dos quadrados */
.description {
  text-align: center; /* Centraliza o texto */
  color: #000000; /* Cor do texto */
  font-weight: bold;
  font-size: 16px; /* Tamanho da fonte */
  margin-top: 10px;
}

</style>