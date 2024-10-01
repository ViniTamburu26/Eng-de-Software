<template>
    <TodoHeader/>
    <TodoInfo/>

</template>

<script>
import TodoHeader from '@/components/TodoHeader.vue';
import TodoInfo from '@/components/TodoInfo.vue';

export default {
  name: 'HomeView',
  components: {
    TodoInfo,
    TodoHeader

  }
}
</script>

<style>


</style>
