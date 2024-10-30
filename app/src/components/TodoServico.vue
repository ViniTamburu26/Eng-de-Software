<template>
  <div class="main_content">
    <TodoAgenda />
  <div class="title">
    <h2>Serviços</h2>
  </div>

  <div class="containerServico">
    <div class="service-links">
      <router-link :to="{ path: '/area', query: { tipoLimpeza: '1' } }" class="recServico">Limpeza Simples
        <font-awesome-icon :icon="['fas', 'broom']" /></router-link>

      <router-link :to="{ path: '/area', query: { tipoLimpeza: '2' } }" class="recServico">Limpeza Pesada
        <font-awesome-icon :icon="['fas', 'broom']" /></router-link>

      <router-link :to="{ path: '/area', query: { tipoLimpeza: '3' } }" class="recServico">Limpeza Pós Aluguel
        <font-awesome-icon :icon="['fas', 'broom']" /></router-link>

      <router-link :to="{ path: '/area', query: { tipoLimpeza: '4' } }" class="recServico">Limpeza Pós Reforma
        <font-awesome-icon :icon="['fas', 'broom']" /></router-link>
    </div>
  </div>


  </div>
  
</template>

<script>
import TodoAgenda from './TodoAgenda.vue';

export default {
  components: {
    TodoAgenda,
  },
};
</script>

<style>
/* Estilo para o título */
.title {
  margin-bottom: 40px;
  text-align: center;
  font-weight: bold;
  color: #000000;
}

/* Container flexível para os serviços */
.containerServico {
  display: flex;
  justify-content: center;
  /* Centraliza o conteúdo horizontalmente */
}

/* Container para os links de serviços */
.service-links {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  /* Garante que ocupe 100% da largura disponível */
}

/* Estilo dos retângulos de serviço */
.recServico {
  width: 80%;
  /* Largura relativa para ser responsivo */
  max-width: 1000px;
  /* Limita a largura em telas grandes */
  height: 100px;
  background: linear-gradient(135deg, #D9D9D9, #737373);
  font-weight: bold;
  color: #000000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* Espaça o conteúdo */
  margin: 20px 0;
  border-radius: 8px;
  padding: 0 30px;
  text-decoration: none;
  transition: background 0.3s;
}

.recServico:hover {
  background: linear-gradient(135deg, #737373, #D9D9D9);
  /* Efeito hover */
}


font-awesome-icon {
  font-size: 40px;
  color: #000003;
  opacity: 90%;
}


@media (max-width: 768px) {
  .recServico {
    height: 80px;
    font-size: 14px;
    padding: 0 20px;
  }
}


@media (max-width: 480px) {
  .recServico {
    height: 60px;
    font-size: 12px;
    padding: 0 10px;
  }

  font-awesome-icon {
    font-size: 30px;
  }
}
</style>