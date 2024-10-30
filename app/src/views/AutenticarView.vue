<template>
    <header class="flex header">
        <div class="header_content">
            <router-link to="/">
                <img class="logo" src="@/assets/logo.png" alt="Logo CleanUP">
            </router-link>
        </div>
    </header>

    <div class="main_content">
        <div class="autenticar">
            <h2 class="prompt_text">Qual o seu email?</h2>
            <input type="text" class="id_input" v-model="providerId" placeholder="Digite seu email" />

            <button v-if="!emailExists" class="continue_button" @click="checkEmail">Continuar</button>

            <div v-if="emailExists">
                <h2 class="prompt_text">Digite sua senha:</h2>
                <input type="password" class="id_input" v-model="password" placeholder="Digite sua senha" />
            </div>

            <button v-if="emailExists" class="continue_button" @click="handleLogin">Login</button>

            <p v-if="error" class="error_message">{{ error }}</p>

            <p v-if="showRegisterPrompt" class="register_prompt">
                Não possui uma conta?
                <router-link to="/registrar">Cadastre-se aqui</router-link>
            </p>
        </div>

    </div>

</template>

<script>
export default {
    data() {
        return {
            providerId: '',
            password: '',
            emailExists: false,
            showRegisterPrompt: false,
            error: null,
            providerName: '',
            userId: null // Armazena o userId
        };
    },
    methods: {
        async checkEmail() {
            this.error = null;
            this.showRegisterPrompt = false;

            if (!this.providerId) {
                this.error = "Por favor, insira um email.";
                return;
            }

            try {
                const response = await fetch(`http://localhost:3000/check/checkEmail`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email: this.providerId })
                });
                const data = await response.json();

                if (data.exists) {
                    this.emailExists = true;
                    this.providerName = data.name;
                } else {
                    this.error = "Este email não está cadastrado.";
                    this.showRegisterPrompt = true;
                }
            } catch (err) {
                console.error("Erro ao verificar email:", err);
                this.error = "Ocorreu um erro ao verificar o email.";
            }
        },

        async handleLogin() {
            this.error = null;

            if (!this.password) {
                this.error = "Por favor, insira uma senha.";
                return;
            }

            try {
                // Envia o email e senha para o backend para autenticação
                const response = await fetch(`http://localhost:3000/check/login`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email: this.providerId, password: this.password })
                });
                const data = await response.json();

                if (data.success) {
                    this.userId = data.userId; // Armazena o userId
                    this.$router.push(`/HomePrestador?userId=${this.userId}`);
                } else {
                    this.error = data.message;
                }
            } catch (err) {
                this.error = "Ocorreu um erro ao fazer login.";
                console.error("Erro ao fazer login:", err);
            }
        }
    }
};
</script>

<style>
.autenticar {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 150px;

}

.prompt_text {
    font-size: 24px;
    color: #000000;
    margin-bottom: 20px;
}

.id_input {
    width: 300px;
    padding: 10px;
    border: 1px solid #372D90;
    border-radius: 5px;
    margin-bottom: 20px;
}

.continue_button {
    background-color: #372D90;
    color: #FFFFFF;
    font-size: 20px;
    font-weight: bold;
    padding: 10px 20px;
    text-decoration: none;
    border-radius: 5px;
    width: 300px;
    text-align: center;
}

.continue_button:hover {
    background-color: #0073e6;
}

.error_message {
    color: red;
    margin-top: 10px;
}

.register_prompt {
    margin-top: 20px;
    font-size: 16px;
    color: #000;
}

.register_prompt a {
    color: #372D90;
    text-decoration: underline;
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