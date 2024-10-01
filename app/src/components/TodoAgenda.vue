<template>
    <div class="rectangle-container">
        <div class="rectangle"> <font-awesome-icon icon="calendar" class="icon" /> 
          <span class="calendar-text">Agendar agora?</span>
        </div>
      </div>

</template>

<script>
    export default{
        
    }
</script>

<style>
  
  .rectangle-container {
  display: flex;
  justify-content: center; /* Centraliza o retângulo na página */
  align-items: center; /* Centraliza verticalmente */
  margin-top: 40px;
  margin-bottom: 80px;
}

.rectangle {
  width: 1500px; /* Largura do retângulo */
  height: 100px; /* Altura do retângulo */
  background-color: #F8F9FA; /* Cor de fundo do retângulo */
  border: 2px solid #372D90; /* Borda */
  border-radius: 8px; /* Bordas arredondadas, se desejado */
  display: flex; /* Ativa o Flexbox dentro do retângulo */
  align-items: center; /* Centraliza verticalmente os filhos */
  padding: 10px; /* Espaçamento interno */
  text-align: left; /* Alinhamento de texto à esquerda */
}

.icon {
  font-size: 40px; /* Tamanho do ícone */
  color: #000003; /* Cor do ícone */
  margin-right: 30px; /* Espaço entre o ícone e o texto */
  margin-left: 30px;
  opacity: 90%;
}

.calendar-text {
  font-size: 20px; /* Tamanho do texto */
  color: #000000; /* Cor do texto */
  font-weight: bold; /* Negrito */
  opacity: 70%;
}

</style>