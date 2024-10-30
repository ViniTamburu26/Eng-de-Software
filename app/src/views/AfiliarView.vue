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

        <!-- Contêiner para o conteúdo abaixo do cabeçalho -->
        <div class="main_content">
            <div class="text_and_image">
                <div class="text_content">
                    <p class="service_text">
                        Preste serviços de limpeza quando quiser e ganhe de acordo com suas necessidades.
                    </p>
                    <p class="income_text">
                        Gere renda no horário que preferir.
                    </p>
                    <div class="action_buttons">
                        <router-link to="/autenticar" class="start_button">Começar</router-link>
                        <span class="login_prompt">Já tem uma conta? <router-link to="/autenticar"
                                class="login_link">Fazer
                                login</router-link></span>
                    </div>
                </div>
                <img class="side_image" src="@/assets/limpeza.jpg" alt="Limpeza" />
            </div>
        </div>
</template>

<script>

</script>

<style scoped>

.main_content {
    background-color: #d5dbfc; /* Escolha a cor que preferir */
    padding: 20px; /* Adiciona algum espaçamento */
    min-height: calc(100vh - 80px); /* Ajusta a altura mínima para não sobrepor o cabeçalho */
}

.text_and_image {
    display: flex;
    align-items: center;
    margin-left: 233px;
    margin-top: 120px;
}

.text_content {
    margin-right: 20px;
}

.service_text {
    font-size: 48px;
    color: #000000;
    font-weight: bold;
    width: 600px;
    margin-top: 0;
}

.income_text {
    font-size: 24px;
    color: #000000;
    margin-top: 10px;
}

.action_buttons {
    display: flex;
    align-items: center;
    margin-top: 20px;
}

.side_image {
    width: 750px;
    height: auto;
    border-radius: 20px;
}

.start_button {
    background-color: #372D90;
    color: #FFFFFF;
    font-size: 20px;
    font-weight: bold;
    padding: 10px 20px;
    text-decoration: none;
    border-radius: 5px;
    margin-right: 20px;
}

.start_button:hover {
    background-color: #0073e6;
}

.login_prompt {
    font-size: 20px;
}

.login_link {
    color: #000000;
}

.login_link:hover {
    color: #0073e6;
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