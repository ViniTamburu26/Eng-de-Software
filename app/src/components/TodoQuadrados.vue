<template>
  <div id="main-content">

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
  text-align: left;
  font-weight: bold; /* Adiciona negrito ao texto */
  color: #000000;
  margin-left: 233px;
  margin-top: 150px;
  font-size: 30px;
}

/* Estilo para o contêiner dos quadrados */
.squares-container {
  margin-left: 233px;
  display: flex;
  justify-content: space-between; /* Espaçamento entre quadrados */
  flex-wrap: wrap; /* Quebra de linha quando necessário */
  padding: 30px;
  gap: 20px; /* Espaço entre os itens */
}

/* Estilo para cada item de serviço */
.service-item {
  flex: 1 1 calc(20% - 20px); /* Ajuste para 5 colunas e espaçamento dinâmico */
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px; /* Espaçamento inferior */
}

/* O estilo dos quadrados */
.square {
  width: 80%; /* Diminui a largura dos quadrados */
  padding-top: 80%; /* Proporção 1:1 para manter o quadrado, ajustada para 80% */
  background-color: #372D90;
  border-radius: 8px;
  background-size: cover;
  background-position: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

/* Estilo para as descrições abaixo dos quadrados */
.description {
  text-align: center;
  color: #000000;
  font-weight: bold;
  font-size: 16px;
  margin-top: 10px;
}


@media (max-width: 768px) {
  .service-item {
    flex: 1 1 calc(33% - 20px); 
  }

  .square {
    width: 70%; 
  }
}


@media (max-width: 480px) {
  .service-item {
    flex: 1 1 calc(100% - 20px); 
  }

  .square {
    width: 90%; 
    padding-top: 90%; 
  }

  .description {
    font-size: 14px; 
  }
}
</style>
