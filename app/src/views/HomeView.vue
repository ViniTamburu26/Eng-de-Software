<template>
  <TodoHeader />
  <div class="main_content">
    <ImageService />
    <SolicitarForm />
  </div>

</template>

<script>
import ImageService from '@/components/TodoQuadrados.vue';
import TodoHeader from '@/components/TodoHeader.vue';
import SolicitarForm from '@/components/TodoSolicitar.vue';

export default {
  name: 'HomeView',
  components: {
    TodoHeader,
    ImageService,
    SolicitarForm
  }
}
</script>

<style></style>
