<template>
  <router-link to="/servico" class="containerInfo">
    <h2>Solicitar</h2>
    <p>Encontre profissionais perto de você</p>
  </router-link>
</template>

<script>
export default {

}
</script>

<style>

.containerInfo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #F8F9FA; 
  border: 2px solid #372D90;
  width: 50%; /* Largura definida como percentual para ser responsiva */
  max-width: 500px; /* Largura máxima para evitar esticar demais em telas grandes */
  border-radius: 8px;
  padding: 20px;
  margin: 20px auto;
  box-sizing: border-box; /* Garante que padding e borda não aumentem o tamanho do box */
  text-decoration: none; 
}

/* Efeito de hover */
.containerInfo:hover {
  background-color:#969799; /* Cor de fundo ao passar o mouse */
}

.containerInfo h2 {
  color: #372D90;
  margin-bottom: 10px;
}

.containerInfo p {
  color: #333333;
  font-size: 16px;
}


@media (max-width: 768px) {
  .containerInfo {
    width: 90%; 
    padding: 15px; 
  }

  .containerInfo p {
    font-size: 14px; 
  }
}


@media (max-width: 480px) {
  .containerInfo {
    width: 100%; 
    padding: 10px;
  }

  .containerInfo h2 {
    font-size: 18px;
  }

  .containerInfo p {
    font-size: 13px; 
  }
}
</style>
