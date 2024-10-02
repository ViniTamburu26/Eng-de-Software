<template>
  <div class="flex headOption">
    <div class="header_Option">
      <img class="logoOption" src="@/assets/logo.png" alt="Logo CleanUP">
    </div>
  </div>
  <div class="background-Option">
    <h2 class="entrar-text">Entrar como:</h2> 
    <div class="options-container">
      <router-link to="/solicitacaoPrestador" class="option-box">Prestador</router-link>
      <router-link to="/home" class="option-box">Cliente</router-link>
    </div>
  </div>
</template>

<script>
   
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.headOption {
  background-color: #372D90;
  display: flex; 
  justify-content: center; 
  align-items: center; 
  padding: 20px;
}

.header_Option {
  display: flex; 
  justify-content: center;
  align-items: center; 
}

.logoOption {
  width: 180px; /* Ajustado para ser um pouco menor em telas menores */
  height: auto; 
}

.background-Option {
  background-color: #A2C7EB; 
  height: calc(100vh - 100px); /* Ajusta a altura para não sobrepor o cabeçalho */
  display: flex; 
  flex-direction: column; 
  justify-content: center; 
  align-items: center; 
}

.entrar-text {
  font-size: 24px; 
  color: #372D90; 
  margin-bottom: 20px; 
}

/* Estilo para os quadrados */
.options-container {
  display: flex; 
  flex-direction: column; 
  gap: 20px; 
}

/* Estilo para botões */
.option-box {
  background-color: #372D90; 
  color: white; 
  padding: 20px; 
  border-radius: 10px; 
  text-align: center; 
  width: 80%; /* Largura em porcentagem para responsividade */
  max-width: 300px; /* Largura máxima para telas grandes */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); 
  cursor: pointer; 
  transition: background-color 0.3s; 
  text-decoration: none; 
}

.option-box:hover {
  background-color: #4c3bb1; 
}


@media (min-width: 768px) {
  .options-container {
    flex-direction: row; 
    justify-content: center; 
  }
  
  .option-box {
    width: 200px; 
  }
}

@media (max-width: 480px) {
  .logoOption {
    width: 150px; 
  }
  
  .entrar-text {
    font-size: 20px; 
  }
}
</style>
