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

    <!-- Login Container -->
    <div class="login-container">
      <h2 class="login-title">Login</h2>
      <form @submit.prevent="handleLogin" class="login-form">
        <input type="email" v-model="email" placeholder="Email" required class="input-field" />
        <input type="password" v-model="password" placeholder="Senha" required class="input-field" />
        <button type="submit" class="submit-button">Entrar</button>
      </form>
      <p v-if="error" class="error-message">{{ error }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: "",
      password: "",
      error: null,
    };
  },
  methods: {
    async handleLogin() {
      try {
        const response = await axios.post('http://localhost:3000/auth/login', {
          email: this.email,
          password: this.password,
        });

        const token = response.data.token; // Aqui a variável token é atribuída

        // Exemplo de como armazenar o token, por exemplo, no localStorage
        localStorage.setItem('token', token);

        // Redirecionar ou atualizar o estado do aplicativo após o login
        this.$router.push('/home'); // Mudar para a página de home após login
      } catch (err) {
        this.error = err.response ? err.response.data.error : 'Erro de conexão'; // Define a mensagem de erro
      }
    }
  },
};
</script>

<style scoped>

/* Estilos para o login */
.login-container {
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

.login-title {
  font-size: 28px;
  color: #372D90;
  margin-bottom: 20px;
}

.login-form {
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

.submit-button:hover {
  background-color: #0073e6;
}

.error-message {
  color: red;
  margin-top: 10px;
  font-size: 14px;
}
</style>
