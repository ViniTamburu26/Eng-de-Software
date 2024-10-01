<template>
    <router-link to="/servico" class="containerInfo">
      <h2>Solicitar</h2>
      <p>Encontre profissionais perto de você</p>
    </router-link>

</template>

<script>
    export default{
        
    }
</script>

<style>

.containerInfo {
  display: flex; /* Ativa o Flexbox */
  flex-direction: column; /* Alinha os itens verticalmente */
  justify-content: center; /* Centraliza o conteúdo dentro da div */
  align-items: center; /* Centraliza o conteúdo horizontalmente */
  background-color: #F8F9FA; /* Cor de fundo */
  border: 2px solid #372D90; /* Borda */
  width: 500px; /* Largura definida */
  border-radius: 8px; /* Bordas arredondadas */
  padding: 20px; /* Espaçamento interno */
  margin: 20px auto; /* Margem superior e inferior de 20px, centraliza horizontalmente */
}


.containerInfo h2 {
  color: #372D90; /* Cor do título */
  margin-bottom: 10px; /* Espaço abaixo do título */
}

.containerInfo p {
  color: #333333; /* Cor do texto */
  font-size: 16px; /* Tamanho da fonte */
}
    
</style>