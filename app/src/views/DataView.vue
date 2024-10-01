<template>
    <TodoHeader />
    <TodoData/>

    <div class="title">
        <h2>Data</h2>
    </div>


    <div class="containerServico">
      <div class="recArea">Qual a data a ser realizada limpeza?</div>
      <div class="recArea">
        <input class="input-data" type="date" />
      </div>
    </div>

    <div class="navigation-buttons">
        <router-link to="/area" class="button-left">
            <button class="button-left">Voltar</button>
        </router-link>

        <router-link to="/info" class="button-left">
            <button class="button-right">Avançar</button>
        </router-link>
    </div>

  
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
  
  <style>
  
  .input-data {
  width: 80%;
  height: 50px;
  padding: 10px;
  font-size: 16px;
  border: 2px solid #737373;
  border-radius: 8px;
}


  </style>
  