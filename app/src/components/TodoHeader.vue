<template>
    <header class="flex">
      <div class="header_content">
        <router-link to="/">
            <img class="logo" src="@/assets/logo.png" alt="Logo CleanUP">
        </router-link>
      </div>
      <div class="header-right">
        <button @click="toggleSidebar" class="sidebar-toggle">
          {{ isSidebarActive ? '✖' : '☰' }} <!-- Mudança de ícone -->
        </button>
        <div class="headerText">
          <font-awesome-icon :icon="['fas', 'location-dot']" />
          <span>Avenida das Nações Unidas ...</span>
        </div>
      </div>
    </header>

    <!-- Barra lateral -->
    <div class="sidebar" :class="{ open: isSidebarActive }" id="sidebar">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#services">Serviços</a></li>
        <li><a href="#about">Sobre</a></li>
        <li><a href="#contact">Contato</a></li>
      </ul>
    </div>
</template>

<script>
    export default{
        data() {
    return {
      isSidebarActive: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarActive = !this.isSidebarActive;
    },
  },
    }
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}


header {
  background-color: #372D90;
}

.header_content {
  width: 100%;
  padding: 20px; /* Ajuste conforme necessário */
  display: flex; /* Ativa o Flexbox */
  align-items: center; /* Alinha verticalmente */
}

.logo {
  width: 220px;
  height: 100px;
  margin-left: 60px; /* Ajuste este valor conforme necessário */
}

.header-right {
  display: flex; /* Ativa o Flexbox */
  align-items: center; /* Alinha verticalmente */
}

.headerText {
  color: white; /* Cor do texto */
  font-size: 20px; /* Tamanho do texto */
  margin-left: auto;
  padding: 10px;
}

.headerText span {
  padding-left: 8px; /* Espaço entre o ícone e o texto */
}

/* Estilos do botão de toggle */
.sidebar-toggle {
  background-color: transparent;
  border: none;
  color: #ffffff;
  font-size: 24px;
  cursor: pointer;
  padding: 10px; /* Ajuste conforme necessário */
  z-index: 1000;
  margin-left: 90px;
}

/* Barra lateral */
.sidebar {
  width: 130px;
  background-color: #372D90;
  position: fixed;
  left: -200px; /* Inicialmente oculta */
  top: 193px; /* Alinhado logo abaixo do cabeçalho */
  height: calc(100% - 120px); /* Altura ajustada para não sobrepor o cabeçalho */
  transition: left 0.3s ease;
  z-index: 999;
}

.sidebar.open {
  left: 0; /* Barra lateral aberta */
}

.sidebar ul {
  list-style: none;
  padding-left: 0;
}

.sidebar ul li {
  margin: 10px 0;
}

.sidebar ul li a {
  color: white;
  text-decoration: none;
  font-size: 16px;
  display: block;
  padding: 10px;
  transition: background-color 0.3s;
}

.sidebar ul li a:hover {
  background-color: #4c3bb1;
  border-radius: 5px;
}
</style>