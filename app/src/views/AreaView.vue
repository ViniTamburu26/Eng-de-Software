<template>
  <TodoHeader/>
  <TodoArea/>
</template>

<script>
import TodoHeader from '@/components/TodoHeader.vue';
import TodoArea from '@/components/TodoArea.vue';

export default {
name: 'HomeView',
components: {
  TodoHeader,
  TodoArea,
}
}
</script>