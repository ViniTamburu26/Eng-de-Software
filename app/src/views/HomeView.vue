<template>
    <TodoHeader/>
    <HelloWorld/>
    <SolicitarForm />
</template>

<script>
import HelloWorld from '@/components/TodoQuadrados.vue';
import TodoHeader from '@/components/TodoHeader.vue';
import SolicitarForm from '@/components/TodoSolicitar.vue';

export default {
  name: 'HomeView',
  components: {
    TodoHeader,
    HelloWorld,
    SolicitarForm
  }
}
</script>

<style>


</style>
