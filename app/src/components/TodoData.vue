<template>
  <div class="main_content">
    <TodoAgenda />
    <div class="title ">
    <h2>Data</h2>
  </div>

  <div class="containerServico ">
    <div class="recArea">Qual a data a ser realizada a limpeza?</div>
    <div class="recArea">
      <input class="input-data" type="date" v-model="selectedDate" />
    </div>
  </div>

  <div class="navigation-buttons">
    <router-link to="/servico" class="button-left">
      <button class="button-left">Voltar</button>
    </router-link>

    <router-link :to="{
      path: '/info',
      query: {
        data: selectedDate,
        area: areaValue, // Passa o valor da área
        tipoLimpeza: tipoLimpezaValue, // Passa o tipo de limpeza
        valor: estimatedPrice // Passa o preço estimado
      }
    }" class="button-right" :disabled="!selectedDate">
      <button class="button-right">Avançar</button>
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
      selectedDate: '' // Inicializa a data selecionada
    };
  },
  computed: {
    areaValue() {
      // Pega o valor da área da query string da rota anterior
      return this.$route.query.area || 0; // Define um valor padrão caso não esteja presente
    },
    tipoLimpezaValue() {
      // Pega o tipo de limpeza da query string da rota anterior
      return this.$route.query.tipoLimpeza || '1'; // Define um valor padrão caso não esteja presente
    },
    estimatedPrice() {
      // Pega o valor estimado da query string da rota anterior
      return this.$route.query.valor || 0; // Define um valor padrão caso não esteja presente
    }
  }
};
</script>

<style>

.main_content {
    background-color: #d5dbfc; /* Escolha a cor que preferir */
    padding: 20px; /* Adiciona algum espaçamento */
    min-height: calc(100vh - 80px); /* Ajusta a altura mínima para não sobrepor o cabeçalho */
}

.input-data {
  width: 80%;
  height: 50px;
  padding: 10px;
  font-size: 16px;
  border: 2px solid #737373;
  border-radius: 8px;
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