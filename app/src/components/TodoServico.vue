<template>
    <TodoAgenda/>
    <div class="title">
        <h2>Serviços</h2>
    </div>

    <router-link to="/area" class="containerServico">
        <div class="recServico">Limpeza Simples <font-awesome-icon :icon="['fas', 'broom']" /></div>
        <div class="recServico">Limpeza Pesada  <font-awesome-icon :icon="['fas', 'broom']" /></div>
        <div class="recServico">Limpeza Pos Aluguel <font-awesome-icon :icon="['fas', 'broom']" /></div>
        <div class="recServico">LImpeza Pos Reforma <font-awesome-icon :icon="['fas', 'broom']" /></div>
    </router-link>


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

/* Novo estilo para o título da seção */
.title {
  margin-bottom: 60px; /* Espaçamento abaixo do título */
  text-align: center;
  font-weight: bold; /* Adiciona negrito ao texto */
  color: #000000;
}

.containerServico{
  display: flex;
  flex-direction: column; /* Para empilhar os retângulos verticalmente */
  align-items: center; /* Centraliza os retângulos no eixo horizontal */
}

.recServico {
  width: 1000px; /* Largura do retângulo */
  height: 100px; /* Altura do retângulo */
  background: linear-gradient(135deg, #D9D9D9, #737373);
  font-weight: bold;
  color: rgb(0, 0, 0); /* Cor do texto */
  display: flex;
  align-items: center; /* Centraliza o texto verticalmente */
  margin: 20px 0; /* Espaçamento entre os retângulos */
  border-radius: 8px; /* Bordas arredondadas (opcional) */
  padding: 30px;
}

.icone {
  font-size: 40px; /* Tamanho do ícone */
  color: #000003; /* Cor do ícone */
  margin-right: 30px; /* Espaço entre o ícone e o texto */
  margin-left: 30px;
  opacity: 90%;
}

</style>

