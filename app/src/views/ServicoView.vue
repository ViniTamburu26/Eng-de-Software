<template>
  <TodoHeader />
  <TodoServico/>

</template>

<script>
import TodoHeader from '@/components/TodoHeader.vue';
import TodoServico from '@/components/TodoServico.vue';

export default {
  name: 'ServicoView',
  components: {
    TodoHeader,
    TodoServico
  }
}
</script>

<style>
/* Seus estilos aqui */
</style>
