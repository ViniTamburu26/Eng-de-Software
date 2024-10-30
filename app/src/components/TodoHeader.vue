<template>
  <header class="flex">
    <div class="header_content">
      <router-link to="/home">
        <img class="logo" src="@/assets/logo.png" alt="Logo CleanUP">
      </router-link>
    </div>
    <div class="header-right">
      <button @click="toggleSidebar" class="sidebar-toggle" v-if="!isSidebarActive">
        ☰
      </button>
      <div class="headerText">
        <font-awesome-icon :icon="['fas', 'location-dot']" />
        <span>Avenida das Nações Unidas ...</span>
      </div>
    </div>
  </header>

  <!-- Barra lateral -->
  <div class="sidebar" :class="{ open: isSidebarActive }" id="sidebar">
    <button @click="toggleSidebar" class="close-sidebar" v-if="isSidebarActive">
      ✖
    </button>
    <ul>
      <li><a href="#home"><font-awesome-icon :icon="['fas', 'home']" /> Home</a></li>
      <li><a href="#services"><font-awesome-icon :icon="['fas', 'tools']" /> Serviços</a></li>
      <li><a href="#about"><font-awesome-icon :icon="['fas', 'info-circle']" /> Sobre</a></li>
      <li><a href="/"><font-awesome-icon :icon="['fas', 'sign-out-alt']" /> Sair</a></li>
    </ul>
  </div>
</template>

<script>
export default {
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
  padding: 20px;
  display: flex;
  align-items: center;
}

.logo {
  width: 220px;
  height: 100px;
  margin-left: 60px;
}

.header-right {
  display: flex;
  align-items: center;
}

.headerText {
  color: white;
  font-size: 20px;
  margin-left: auto;
  padding: 10px;
}

.headerText span {
  padding-left: 8px;
}

.sidebar-toggle {
  background-color: transparent;
  border: none;
  color: #ffffff;
  font-size: 24px;
  cursor: pointer;
  padding: 10px;
  z-index: 1000;
  margin-left: 90px;
}

/* Barra lateral */
.sidebar {
  width: 130px;
  background-color: #372D90;
  position: fixed; /* Mantém a sidebar fixa */
  left: -200px; /* Inicialmente oculta */
  top: 0; /* Alinhado ao topo da tela */
  height: 100%; /* A altura é 100% da janela */
  transition: left 0.3s ease; /* Transição suave ao abrir/fechar */
  z-index: 999; /* Garante que a sidebar esteja na frente */
  padding-top: 10px; /* Espaçamento superior */
}

.sidebar.open {
  left: 0; /* Exibe a sidebar quando aberta */
}

.close-sidebar {
  background-color: transparent;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  padding: 10px 15px;
  margin: 10px;
  display: block; /* Para ocupar uma linha inteira */
}

/* Estilo da lista */
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

/* Estilos de mídia */
@media (max-width: 1024px) {
  .logo {
    width: 180px;
    height: auto;
    margin-left: 30px;
  }

  .headerText {
    font-size: 18px;
  }

  .sidebar {
    width: 150px;
  }
}

@media (max-width: 768px) {
  .header_content {
    padding: 15px;
  }

  .sidebar-toggle {
    margin-left: 60px;
  }

  .headerText {
    font-size: 16px;
  }

  .sidebar {
    width: 130px;
  }
}

@media (max-width: 480px) {
  .logo {
    width: 150px;
  }

  .sidebar-toggle {
    font-size: 20px;
  }

  .headerText {
    font-size: 14px;
  }
}
</style>
