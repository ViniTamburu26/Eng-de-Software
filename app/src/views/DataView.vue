<template>
  <TodoHeader />
  <TodoData />

</template>

<script>
import TodoData from '@/components/TodoData.vue';
import TodoHeader from '@/components/TodoHeader.vue';

export default {
  name: 'ServicoView',
  components: {
    TodoHeader,
    TodoData
  }
}
</script>

<style></style>