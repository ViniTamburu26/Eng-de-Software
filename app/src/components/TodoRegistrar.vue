<template>
  <div>
    <!-- Header -->
    <header class="flex header">
      <div class="header_content">
        <router-link to="/">
          <img class="logo" src="@/assets/logo.png" alt="Logo CleanUP" />
        </router-link>
      </div>
    </header>

    <!-- Container de Registro -->
    <div class="register-container">
      <h2 class="register-title">Cadastrar</h2>
      <form @submit.prevent="handleRegister" class="register-form">
        <input 
          type="text" 
          v-model="name" 
          placeholder="Nome" 
          required 
          class="input-field" 
        />
        <input 
          type="email" 
          v-model="email" 
          placeholder="Email" 
          required 
          class="input-field" 
          @input="clearError" 
        />
        <input 
          type="password" 
          v-model="password" 
          placeholder="Senha" 
          required 
          class="input-field" 
        />
        <button 
          type="submit" 
          class="submit-button" 
          :disabled="isLoading"
        >
          Cadastrar
        </button>
      </form>
      <p v-if="error" class="error-message">{{ error }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'; // Importa Axios para requisições HTTP

export default {
  data() {
    return {
      name: "", 
      email: "",
      password: "",
      error: null,
      isLoading: false, // Variável para controlar o estado de carregamento
    };
  },
  methods: {
    async handleRegister() {
      this.isLoading = true; // Inicia o carregamento
      try {
        // Faz uma requisição POST para o backend
        const response = await axios.post('http://localhost:3000/auth/register', {
          name: this.name,
          email: this.email,
          password: this.password,
        });

        // Exibe uma mensagem de sucesso
        alert(response.data.message);

        // Redireciona ou atualiza o estado do aplicativo após o registro
        this.$router.push('/'); 
      } catch (err) {
        this.error = err.response.data.message || 'Erro ao registrar'; // Define a mensagem de erro
      } finally {
        this.isLoading = false; // Finaliza o carregamento
      }
    },
    clearError() {
      // Limpa a mensagem de erro quando o usuário começa a digitar novamente
      this.error = null;
    }
  },
};

</script>

<style scoped>

/* Estilos para o registro */
.register-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  max-width: 400px;
  margin: 20px auto; /* Espaçamento superior para o layout */
  border: 1px solid #372D90;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin-top: 150px;
}

.register-title {
  font-size: 28px;
  color: #372D90;
  margin-bottom: 20px;
}

.register-form {
  width: 100%;
}

.input-field {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #372D90;
  border-radius: 5px;
  font-size: 16px;
}

.submit-button {
  background-color: #372D90;
  color: #FFFFFF;
  font-size: 18px;
  font-weight: bold;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
}

.submit-button:disabled {
  background-color: #cccccc; /* Cor do botão desabilitado */
  cursor: not-allowed; /* Altera o cursor quando o botão está desabilitado */
}

.submit-button:hover:not(:disabled) {
  background-color: #0073e6;
}

.error-message {
  color: red;
  margin-top: 10px;
  font-size: 14px;
}
</style>