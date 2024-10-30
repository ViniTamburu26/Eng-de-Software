<template>
  <TodoAgenda />
  <div class="title">
    <h2>ÁREA</h2>
  </div>

  <div class="containerServico">
    <div class="recArea">
      Qual o tamanho da área a ser feita a limpeza?
    </div>
    <div class="recArea">
      <input class="input-area" type="number" placeholder="Digite aqui o tamanho da área..." v-model.number="area"
        @input="validateArea" min="0" step="0.01" />
    </div>
  </div>

  <div class="containerValor">
    <div class="recValor">
      <div class="preco-info">
        <span class="preco-label">Preço Estimado</span>
        <span class="preco-valor">R$ {{ estimatedPrice.toFixed(2) }}</span>
      </div>
    </div>
  </div>

  <div class="navigation-buttons">
    <router-link to="/servico" class="button-left">
      <button class="button-left">Voltar</button>
    </router-link>

    <router-link :to="{ name: 'data', query: { area, tipoLimpeza, valor: estimatedPrice } }" class="button-left">
      <button class="button-right" :disabled="!isAreaValid">Avançar</button>
    </router-link>
  </div>
</template>

<script>
import TodoAgenda from './TodoAgenda.vue';

export default {
  components: {
    TodoAgenda,
  },
  data() {
    return {
      area: null, // Armazena o tamanho da área
      estimatedPrice: 0, // Preço estimado
      isAreaValid: false, // Validação da área
      tipoLimpeza: this.$route.query.tipoLimpeza || '1', // Tipo de limpeza da query
      precos: { // Preços por tipo de limpeza
        1: 1.5,
        2: 4,
        3: 8,
        4: 10,
      }
    };
  },
  methods: {
    validateArea() {
      this.isAreaValid = this.area > 0; // Verifica se a área é válida
      this.estimatedPrice = this.isAreaValid ? this.area * this.precos[this.tipoLimpeza] : 0; // Calcula o preço
    },
  },
  watch: {
    '$route.query.tipoLimpeza': function (newTipo) {
      this.tipoLimpeza = newTipo; // Atualiza o tipo de limpeza
      this.validateArea(); // Recalcula o preço ao mudar o tipo de limpeza
    }
  },
};
</script>

<style>
.title {
  margin-bottom: 60px;
  text-align: center;
  font-weight: bold;
  color: #000000;
  font-size: 24px;
}

.containerServico,
.containerValor {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
}

.recArea {
  width: 80%;
  max-width: 1000px;
  height: auto;
  background: linear-gradient(135deg, #d9d9d9, #737373);
  font-weight: bold;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
  border-radius: 8px;
  padding: 30px;
  text-align: center;
}

.input-area {
  width: 100%;
  max-width: 500px;
  height: 50px;
  padding: 10px;
  font-size: 16px;
  border: 2px solid #737373;
  border-radius: 8px;
}

.recValor {
  width: 80%;
  max-width: 500px;
  height: auto;
  background: linear-gradient(135deg, #d9d9d9, #737373);
  font-weight: bold;
  color: #000;
  display: flex;
  align-items: flex-start;
  /* Alinhado à esquerda */
  justify-content: center;
  margin: 20px 0;
  border-radius: 8px;
  padding: 30px;
}

.preco-info {
  display: flex;
  flex-direction: column;
}

.preco-label {
  margin-bottom: 10px;
  font-size: 20px;
}

.preco-valor {
  font-size: 20px;
  color: #000;
}

.navigation-buttons {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* Distribui os botões nas extremidades */
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  /* Centraliza em telas maiores */
  padding: 20px;
}

.button-left,
.button-right {
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

.button-left:hover,
.button-right:hover {
  background-color: #5c5959;
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