<template>
    <TodoAgenda />
  
    <div class="title">
      <h2>ÁREA</h2>
    </div>
  
    <div class="containerServico">
      <div class="recArea">Qual o tamanho da área a ser feita a limpeza?</div>
      <div class="recArea">
        <input class="input-area" type="text" placeholder="Digite aqui o tamanho da área..." />
      </div>
    </div>
  
    <div class="containerValor"> 
      <div class="recValor">
        <div class="preco-info">
          <span class="preco-label">Preço Estimado</span>
          <span class="preco-valor">R$</span>
        </div>
      </div>
    </div>
  
    <div class="navigation-buttons">
        <router-link to="/servico" class="button-left">
            <button class="button-left">Voltar</button>
        </router-link>

        <router-link to="/data" class="button-left">
            <button class="button-right">Avançar</button>
        </router-link>
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
  /* Estilo para o título da seção */
  .title {
    margin-bottom: 60px;
    text-align: center;
    font-weight: bold;
    color: #000000;
  }
  
  /* Estilo dos retângulos de pergunta e input */
  .containerServico {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .recArea {
    width: 1000px;
    height: 100px;
    background: linear-gradient(135deg, #D9D9D9, #737373);
    font-weight: bold;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 0;
    border-radius: 8px;
    padding: 30px;
  }
  
  /* Estilo para o campo de input */
  .input-area {
    width: 80%;
    height: 50px;
    padding: 10px;
    font-size: 16px;
    border: 2px solid #737373;
    border-radius: 8px;
  }
  
  /* Estilo do contêiner do valor */
  .containerValor {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 150px;
  }
  
  .recValor {
    width: 500px;
    height: 100px;
    background: linear-gradient(135deg, #D9D9D9, #737373);
    font-weight: bold;
    color: #000;
    display: flex;
    align-items: flex-start; /* Alinhado à esquerda */
    justify-content: center;
    margin: 20px 0;
    border-radius: 8px;
    padding: 30px;
    position: relative;
  }
  
  /* Estilo para o container de informações do preço */
  .preco-info {
    display: flex;
    flex-direction: column;
  }
  
  /* Estilo para o texto "Preço Estimado" */
  .preco-label {
    margin-bottom: 10px;
    font-size: 20px;
  }
  
  /* Estilo para o texto "R$" abaixo de "Preço Estimado" */
  .preco-valor {
    font-size: 18px;
    color: #000;
    margin-right: 90px;
  }
  
  /* Estilo dos botões de navegação */
  .navigation-buttons {
    display: flex;
    justify-content: space-between; /* Distribui os botões nas extremidades */
    width: 100%;
    padding: 20px;
  }
  
  .button-left, .button-right {
    width: 150px;
    height: 50px;
    background-color: #5c5959;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
  }
  
  .button-left:hover, .button-right:hover {
    background-color: #5c5959;
  }
  
  .button-left {
    align-self: flex-start;
  }
  
  .button-right {
    align-self: flex-end;
  }
  </style>
  