<template>
    <header class="flex header">
        <div class="header_content">
            <router-link to="/">
                <img class="logo" src="@/assets/logo.png" alt="Logo CleanUP">
            </router-link>

            <!-- Navegação principal -->
            <nav class="nav_menu">
                <router-link to="/contratar">Contratar</router-link>
                <router-link to="/afiliar">Afiliar-se</router-link>
                <router-link to="/servicos">Serviços</router-link>
                <router-link to="/sobre">Sobre</router-link>
            </nav>
        </div>

        <!-- Navegação do usuário à direita -->
        <div class="user_menu">
            <router-link to="/login">Login</router-link>
            <router-link to="/Registrar">Cadastrar</router-link>
        </div>
    </header>

    <div class="main_content">
        <div class="slogan-container">
            <div class="slogan">
            Precisou de Limpeza? <br> Chegamos <br> Até Você!
        </div>
        <img class="image" src="@/assets/mulherLimpeza.png" alt="mulherLimpeza" />
        </div>
        <div class="button_container">
            <router-link to="/home" class="btn_contratar">Contratar</router-link>
        </div>


        <ImageService />

    </div>

</template>

<script>
import ImageService from '@/components/TodoQuadrados.vue';

export default {
    name: 'TelaInicialView',
    components: {
        ImageService,
    }
};
</script>

<style>

.slogan-container {
    display: flex; /* Usa flexbox para alinhar os itens */
    align-items: center; /* Alinha verticalmente os itens no centro */
    justify-content: space-between; /* Espaça os itens uniformemente */
    margin-left: 250px; /* Alinhamento à esquerda */
}


.image {
    width: 500px; /* Ajuste a largura conforme necessário */
    height: auto; /* Mantém a proporção da imagem */
    border-radius: 10px; 
    margin-right: 900px;
    margin-top: 80px;
}


.main_content {
    background-color: #d5dbfc; /* Escolha a cor que preferir */
    padding: 20px; /* Adiciona algum espaçamento */
    min-height: calc(100vh - 80px); /* Ajusta a altura mínima para não sobrepor o cabeçalho */
}

.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    background-color: #372D90;
}

.slogan {
    font-size: 48px;
    color: #000000;
    font-weight: bold;
    width: 296px;
    height: 233px;
    text-align: left;
    margin-top: 150px;
}

.nav_menu {
    display: flex;
    gap: 44px;
    margin-left: 60px;
}

.nav_menu a {
    text-decoration: none;
    color: #E3E0E0;
    font-weight: bold;
    font-size: 20px;
}

.nav_menu a:hover {
    color: #0073e6;
}

.user_menu {
    display: flex;
    gap: 44px;
}

.user_menu a {
    text-decoration: none;
    color: #080808;
    font-weight: bold;
    font-size: 20px;
}

.user_menu a:hover {
    color: #0073e6;
}

/* Estilo para o botão Contratar */
.button_container {
    margin-top: 20px;
    /* Espaçamento entre o slogan e o botão */
    display: flex;
    margin-left: 290px;
    /* Alinhamento à esquerda */
}

.btn_contratar {
    padding: 15px 30px;
    background-color: #372D90;
    color: #ffffff;
    font-weight: bold;
    font-size: 18px;
    text-decoration: none;
    border-radius: 10px;
    transition: background-color 0.3s;
}

.btn_contratar:hover {
    background-color: #005bb5;
    /* Cor do fundo ao passar o mouse */
}

@media (max-width: 768px) {

    .recArea,
    .recValor {
        width: 90%;
        padding: 15px;
    }

    .navigation-buttons {
        flex-direction: column;
        align-items: center;
    }

    .button-left,
    .button-right {
        width: 100%;
        margin-bottom: 10px;
    }
}


@media (max-width: 480px) {

    .recArea,
    .recValor {
        width: 100%;
        padding: 10px;
    }

    .input-area {
        width: 100%;
        font-size: 14px;
    }

    .button-left,
    .button-right {
        font-size: 16px;
    }

    .title {
        font-size: 18px;
    }
}
</style>